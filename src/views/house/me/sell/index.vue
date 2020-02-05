<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="listQuery.title"
        placeholder="Title"
        style="width: 200px;"
        class="filter-item"
      />
      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-refresh"
        @click="getList()"
      >刷新</el-button>
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column
        label="订单号"
        prop="order"
        align="center"
        width="300"
      >
        <template slot-scope="{row}">
          <span>{{ row.sell_order }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="订单状态"
        prop="statue"
        align="center"
        width="100"
      >
        <template slot-scope="{row}">
          <el-tag v-show="row.sell_statue === 1" type="success">求购中</el-tag>
          <el-tag v-show="row.sell_statue === 2" type="info">已完成</el-tag>
          <el-tag v-show="row.sell_statue === 0" type="warning">关闭</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="时间"
        prop="time"
        align="center"
        width="150"
      >
        <template slot-scope="{row}">
          <span>{{ row.sell_time | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="购买人"
        prop="name"
        align="center"
        width="80"
      >
        <template slot-scope="{row}">
          <span>{{ row.sell_name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="地址"
        prop="address"
        align="center"
        width="180"
      >
        <template slot-scope="{row}">
          <span>{{ row.sell_address }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="价格"
        prop="price"
        align="center"
        width="80"
      >
        <template slot-scope="{row}">
          <span>{{ row.sell_price }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="热度"
        prop="pick"
        align="center"
        width="80"
      >
        <template slot-scope="{row}">
          <span>{{ row.sell_pick }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="180" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button
            v-if="row.status!='published'"
            size="mini"
            type="success"
            @click="handleUpdate(row)"
          >详情</el-button>
        <el-button
            v-if="row.sell_statue === 1"
            size="small"
            type="danger"
            @click="closeOrder(row)"
          >关闭订单</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />

    <el-dialog title="查看详情" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :model="temp"
        label-position="left"
        label-width="70px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="订单号" prop="order">
          <span>{{ temp.sell_order }}</span>
        </el-form-item>
        <el-form-item label="状态" prop="statue">
          <el-tag v-show="temp.sell_statue === 1" type="success">求购中</el-tag>
          <el-tag v-show="temp.sell_statue === 2" type="info">已完成</el-tag>
          <el-tag v-show="temp.sell_statue === 0" type="warning">关闭</el-tag>
        </el-form-item>
        <el-form-item label="发布时间" prop="time">
          <span>{{ temp.sell_time | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </el-form-item>
        <el-form-item label="购买人" prop="name">
          <span>{{ temp.sell_name }}</span>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <span>{{ temp.sell_address }}</span>
        </el-form-item>
        <el-form-item label="价格" prop="prick">
          <span>{{ temp.sell_price }}</span>
        </el-form-item>
        <el-form-item label="点击量" prop="price">
          <span>{{ temp.sell_pick }}</span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">返回</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { closeUserBuyHouse , showSellerSellHouse } from "@/api/myhouse";
import waves from "@/directive/waves"; // waves directive
import { parseTime } from "@/utils";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination

export default {
  name: "ComplexTable",
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "info",
        deleted: "danger"
      };
      return statusMap[status];
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type];
    }
  },
  data() {
    return {
      buttonIsNotOk: false,
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20
      },
      temp: {
        sell_order: "",
        sell_statue: "",
        sell_time: "",
        sell_name: "",
        sell_addres: "",
        sell_price: "",
        sell_pick: ""
      },
      dialogFormVisible: false,
      dialogPvVisible: false,
      downloadLoading: false
    };
  },
  created() {
    this.getList()
    var roles = this.$store.getters.roles
    if (roles[0] === 'seller') {
      this.buttonIsNotOk = true
    }
  },
  methods: {
    getList() {
      this.listLoading = true
      this.listQuery.uuid = this.$store.getters.uuid
      showSellerSellHouse(this.listQuery).then(response => {
        this.list = response.data.list
        this.total = response.data.total
        this.uuid = this.$store.getters.uuid
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      });
    },
    //详情
    handleUpdate(row) {
      this.temp = Object.assign({}, row); // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp);
      this.dialogStatus = "update";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      })
      //记录点击量
      pickSell(this.temp.sell_order)
    },
    closeOrder(row) {
      var order = row.sell_order
      closeUserBuyHouse(order).then(response => {
        this.dialogFormVisible = false;
        this.$notify({
          title: "成功",
          message:response.data.msg,
          type: "success",
          duration: 2000
        })
        this.getList(this.listQuery)
      })
    }
  }
}
</script>

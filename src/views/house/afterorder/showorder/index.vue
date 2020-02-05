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
        label="单号"
        prop="order"
        align="center"
        width="300"
      >
        <template slot-scope="{row}">
          <span>{{ row.after_order }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="订单状态"
        prop="statue"
        align="center"
        width="100"
      >
        <template slot-scope="{row}">
          <el-tag v-show="row.after_statue === 1">发布</el-tag>
          <el-tag v-show="row.after_statue === 2" type="warning">处理中</el-tag>
          <el-tag v-show="row.after_statue === 3" type="success">完成</el-tag>
          <el-tag v-show="row.after_statue === 0" type="info">撤销</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="时间"
        prop="time"
        align="center"
        width="150"
      >
        <template slot-scope="{row}">
          <span>{{ row.after_time | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="卖家姓名"
        prop="address"
        align="center"
        width="180"
      >
        <template slot-scope="{row}">
          <span>{{ row.after_seller }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="买家联系方式"
        prop="price"
        align="center"
        width="150"
      >
        <template slot-scope="{row}">
          <span>{{ row.after_phone }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center" width="280" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button
            size="mini"
            @click="handleUpdate(row)"
          >查看</el-button>
          <el-button
            v-if="row.after_statue===1"
            size="mini"
            type="success"
            @click="changed(2, row)"
          >处理</el-button>
          <el-button
            v-if="row.after_statue===2"
            size="mini"
            type="primary"
            @click="changed(3, row)"
          >完成</el-button>
          <el-button
            v-if="row.after_statue===1 || row.after_statue===2"
            size="mini"
            type="danger"
            @click="changed(0, row)"
          >撤销</el-button>
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
        <el-form-item label="单号" prop="order">
          <span>{{ temp.after_order }}</span>
        </el-form-item>
        <el-form-item label="状态" prop="statue">
          <el-tag v-show="temp.after_statue === 1">发布</el-tag>
          <el-tag v-show="temp.after_statue === 2" type="warning">处理中</el-tag>
          <el-tag v-show="temp.after_statue === 3" type="success">完成</el-tag>
          <el-tag v-show="temp.after_statue === 0" type="info">撤销</el-tag>
        </el-form-item>
        <el-form-item label="发布时间" prop="time">
          <span>{{ temp.after_time | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </el-form-item>
        <el-form-item label="卖家姓名" prop="seller">
          <span>{{ temp.after_seller }}</span>
        </el-form-item>
        <el-form-item label="卖家联系方式" prop="phone">
          <span>{{ temp.after_phone }}</span>
        </el-form-item>
        <el-form-item label="问题描述" prop="introduction">
          <span>{{ temp.after_introduction }}</span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">返回</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { showAfterOrder , changeAfterOrder } from "@/api/afterorder";
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
        after_order: "",
        after_statue: "",
        after_time: "",
        after_seller: "",
        after_phone: "",
        after_introduction: ""
      },
      dialogFormVisible: false,
      dialogPvVisible: false,
      downloadLoading: false
    };
  },
  created() {
    this.getList()
    var roles = this.$store.getters.roles
    if (roles[0] === 'user') {
      this.buttonIsNotOk = true
    }
  },
  methods: {
    getList() {
      this.listLoading = true
      showAfterOrder(this.listQuery).then(response => {
        this.list = response.data.list
        this.total = response.data.total

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
    },
    changed(status, row) {
      var order = row.after_order
      changeAfterOrder(order, status).then(response => {
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

<template>
  <div class="app-container">
    <div class="title">
      <h2>请在下方输入您的求租需求</h2>
    </div>
    <el-form
      ref="dataForm"
      :rules="rules"
      :model="house"
      label-position="left"
      label-width="70px"
      style="width: 400px; margin-left:50px;"
    >
      <el-form-item label="地址" prop="address">
        <el-input v-model="house.address" />
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input v-model="house.price" type="number" />
      </el-form-item>
      <el-form-item label="需求" prop="introduction">
        <el-input
          v-model="house.introduction"
          :autosize="{ minRows: 2, maxRows: 4}"
          type="textarea"
          placeholder="请输入描述信息哦~"
        />
      </el-form-item>
      <el-tooltip class="left" placement="top">
        <div slot="content">请输入您的需求~<br/>
          请输入但不限于以下内容哦~<br/>
          房租是否包含水电费,物业费,取暖费,宽带费等.<br/>
          房源家具是否齐全.空调,洗衣机,桌椅板凳等<br/>
          交通是否便利<br/>
          周围是否有生活超市或娱乐场所<br/>
        </div>
        <el-button>查看输入提示</el-button>
      </el-tooltip>
    </el-form>
    <div slot="footer" class="dialog-footer" style="margin-left: 100px; margin-top: 50px">
      <el-button type="primary" @click="addHouse">提交信息</el-button>
    </div>
  </div>
</template>

<script>
import { addHouseByUser , addHouseBySeller } from "@/api/house";

export default {
  data() {
    return {
      house: {
        address: '',
        introduction: '',
        price: ''
      },
      rules: {
        price: [
          { required: true, message: "价格不能为空哦~", trigger: "blur" }
        ],
        introduction: [
          { required: true, message: "描述信息信息不能为空哦~", trigger: "blur" }
        ],
        address: [{ required: true, message: "地址不能为空哦~", trigger: "blur" }]
      }
    }
  },
  created() {},
  methods: {
    addHouse: function() {
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          var uuid = this.$store.getters.uuid
          var houseVo = {
            sell_uuid: uuid,
            sell_address: this.house.address,
            sell_intruduction: this.house.introduction,
            sell_price: this.house.price
          }

          addHouseByUser(houseVo).then(response => {
            this.$notify({
              title: '成功',
              message: response.data.msg,
              type: 'success',
              duration: 2000
            })
            this.$router.push({ path: '/house/showsell' })
          })
        } else {
          this.$notify({
            title: '提交失败',
            message: '请检查输入的数据格式~',
            type: 'fail',
            duration: 2000
          })
        }
      })
    }
  }
}
</script>

<style>
.title {
  padding-top: 10px;
  padding-left: 100px;
}
.left {
  margin-left: 200px;
}
</style>

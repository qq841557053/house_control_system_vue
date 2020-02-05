<template>
  <div class="app-container">
    <div class="title">
      <h2>请输入在下方售后信息</h2>
    </div>
    <el-form
      ref="dataForm"
      :rules="rules"
      :model="order"
      label-position="top"
      label-width="70px"
      style="width: 400px; margin-left:50px;"
    >
      <el-form-item label="出售方" prop="seller">
        <el-input v-model="order.seller" />
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="order.address" />
      </el-form-item>
      <el-form-item label="问题描述" prop="introduction">
        <el-input
          v-model="order.introduction"
          :autosize="{ minRows: 2, maxRows: 4}"
          type="textarea"
          placeholder="请输入问题描述~"
        />
      </el-form-item>
      <el-form-item label="您的联系方式" prop="phone">
        <el-input type="number" v-model="order.phone" />
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer" style="margin-left: 100px">
      <el-button type="primary" @click="addAfterOrder">提交售后</el-button>
    </div>
  </div>
</template>

<script>
import { addAfterOrder } from "@/api/afterorder";

export default {
  data() {
    return {
      order: {
        seller: '',
        address: '',
        introduction: '',
        phone: ''
      },
      rules: {
        phone: [
          { required: true, message: "联系方式不能为空哦~", trigger: "blur" }
        ],
        introduction: [
          { required: true, message: "问题描述不能为空哦~", trigger: "blur" }
        ],
        address: [{ required: true, message: "地址不能为空哦~", trigger: "blur" }],
        seller: [
          { required: true, message: "卖家信息不能为空哦~", trigger: "blur" }
        ]
      }
    }
  },
  created() {},
  methods: {
    addAfterOrder: function() {
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          addAfterOrder(this.order).then(response => {
            this.$notify({
              title: '成功',
              message: response.data.msg,
              type: 'success',
              duration: 2000
            })
            this.$router.push({ path: '/' })
          })
        } else {
          this.$notify({
            title: '提交失败',
            message: '请检查输入的数据格式~',
            type: 'fail',
            duration: 2000
          })
        }
      });
    }
  }
}
</script>

<style>
.title {
  padding-top: 10px;
  padding-left: 100px;
}
</style>

<template>
  <div class="app-container">
    <div class="title">
      <h2>请输入在下方输入用户信息</h2>
    </div>
    <el-form
      ref="dataForm"
      :rules="rules"
      :model="user"
      label-position="left"
      label-width="70px"
      style="width: 400px; margin-left:50px;"
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model="user.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password" />
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="user.name" />
      </el-form-item>
      <el-form-item label="描述" prop="introduction">
        <el-input
          v-model="user.introduction"
          :autosize="{ minRows: 2, maxRows: 4}"
          type="textarea"
          placeholder="请输入信息哦~"
        />
      </el-form-item>
      <el-form-item label="权限" prop="roles">
        <el-select v-model="user.roles" placeholder="请选择">
          <el-option
            v-for="item in roles"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer" style="margin-left: 100px">
      <el-button type="primary" @click="addUser">添加用户</el-button>
    </div>
  </div>
</template>

<script>
import { addUser } from "@/api/user";

export default {
  data() {
    return {
      roles: [
        {
          value: 0,
          label: "admin"
        },
        {
          value: 1,
          label: "user"
        },
        {
          value: 2,
          label: "seller"
        }
      ],
      user: {
        name: "",
        username: "",
        password: "",
        introduction: "",
        roles: ""
      },
      rules: {
        password: [
          { required: true, message: "密码不能为空哦~", trigger: "blur" }
        ],
        introduction: [
          { required: true, message: "个人信息不能为空哦~", trigger: "blur" }
        ],
        name: [{ required: true, message: "姓名不能为空哦~", trigger: "blur" }],
        username: [
          { required: true, message: "账号不能为空哦~", trigger: "blur" }
        ],
        roles: [{ required: true, message: "要选择权限哦~", trigger: "blur" }]
      }
    };
  },
  created() {},
  methods: {
    addUser: function() {
      console.log(this.user)
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          addUser(this.user).then(response => {
            this.$notify({
              title: '成功',
              message: response.data.msg,
              type: 'success',
              duration: 2000
            })
            this.$router.push({ path: '/user/show' })
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

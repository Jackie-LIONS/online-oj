<template>
  <div class="box">

     <!-- 路由跳转到登录 -->
     <div class="msg">
        <span>已经有账号了？点击下方按钮跳转登录</span><br />
        <el-button type="primary" @click="login">登录</el-button>
     </div>

    <div class="formRegister">
        <el-form :model="user" :rules="rules" ref="user" id="loginForm" label-width="100px">
          <el-form-item label="账号" prop="username">
            <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="user.password" placeholder="请输入密码"></el-input>
          </el-form-item>

          <el-form-item label="昵称" prop="nickname">
            <el-input v-model="user.nickname" placeholder="请输入昵称"></el-input>
          </el-form-item>

          <el-form-item label="电话" prop="phone">
            <el-input v-model="user.phone" placeholder="请输入电话号码"></el-input>
          </el-form-item>

          <el-form-item label="简介" prop="userProfile">
            <el-input type="textarea" v-model="user.userProfile" placeholder="请输入用户简介"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click.native.prevent="submitForm">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </template>
  
  <script >
  import { ref } from 'vue';
  import api from '@/api/index.js';
  import { ElMessage } from 'element-plus';
  import { useRouter } from 'vue-router'


  // 获取路由对象
const router= useRouter()

  export default {
    data() {
      return {
        user: {
          username: '',
          password: '',
          nickname: '',
          phone: '',
          userProfile: '',
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 8, message: '密码长度不能少于8位', trigger: 'blur' },
            // { pattern: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]+$/, message: '密码必须包含英文字母、数字和特殊符号', trigger: 'blur' },
          ],
          nickname: [
            { required: true, message: '请输入昵称', trigger: 'blur' },
          ],
          phone: [
            { required: true, message: '请输入电话号码', trigger: 'blur' },
            { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的电话号码', trigger: 'blur' },
          ],
          userProfile: [
            { required: true, message: '请输入用户简介', trigger: 'blur' },
          ],
        },
      };
    },
    methods: {
      submitForm() {
        api.getRegister({
          username: this.user.username,
          password: this.user.password,
          nickname: this.user.nickname,
          phone: this.user.phone,
          userProfile: this.user.userProfile
        }).then(res =>{
          if(res.data.code === 200){
            console.log("注册成功"+user)
            router.push("/login");
          }else{
            console.log('1212121');
            // ElMessage.error(res.data.message)
            ElMessage.error(res.data.message);
          }
        });
      },
      login() {
        this.$router.push("/login");
      },
    },
  };
  </script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  background: url("/src/assets/imges/background.png");
  background-size: 100% 100%;
  position: fixed;
  background-attachment: fixed;
}

body {
  margin: 0;
  padding: 0;
}
.msg {
  background-image: url(/src/assets/imges/cloud.png);
  background-size: 100% 100%;
  color: #fff;
  font-size: 15px;
  display: inline;
  margin-top: 9rem;
  width: 30%;
  float: left;
  margin-left: 51rem;
}
.formRegister {
  width: 27%;
  height: 70%;
  float: left;
  margin-left: 11vw;
  margin-top: 6%;
}
#loginForm >>> .el-form-item__label {
  font-size: 16px;
  font-weight: 700;
}
#loginForm >>> .el-button {
  font-size: 15px;
  border-radius: 10px;
}


</style>
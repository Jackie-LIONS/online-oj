<template>
    <div class="login-container">

        <!-- 路由跳转到注册 -->
        <div class="msg" >
            <span>还没有账号？</span><br />
            <span>点击下方按钮进行注册</span><br /><br />
            <el-button type="primary" @click="register">注册</el-button>
        </div>

        <el-form  class="user" size="large" :model="user">
            <div class="title-container">
                <h3 class="title">Lion-在线编程平台登录</h3>
            </div>

            <el-form-item prop="username">
                <el-input :prefix-icon="User" style="width: 80%;left: 10%;" v-model="user.username" type="text" placeholder="please input your account" name="username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input :prefix-icon="Lock" style="width: 80%;left: 10%;" v-model="user.password" type="password" placeholder="please input your password" name="password"></el-input>
            </el-form-item>
            <el-form-item prop="captcha">
                <el-input :prefix-icon="Star" v-model="user.captcha" style="width: 40%; left: 10%;" type="text" placeholder="captcha" name="captcha"></el-input>
                <img :src="captchaImg" style="width: 20%;position: absolute;left: 55%;" alt=""  @click="refreshCaptcha"/>
            </el-form-item>
            <el-button class="loginButtom" type="primary" @click.native.prevent="handleLogin">登录</el-button>

        </el-form>
    </div>
</template>

<script setup>
import { reactive,onMounted, ref } from 'vue';
import { User,Lock,Star } from '@element-plus/icons-vue'
import api from '@/api/index.js'
import { useLoginStore } from '@/stores/loginStore'
import { useRouter } from 'vue-router'


// 登录仓库对象
const loginStroe = useLoginStore()
// 获取路由对象
const router= useRouter()

// 图片验证码
const captchaImg = ref('');
onMounted(()=>{
    captchaImg.value = 'http://localhost:9090/user/captcha';    
})

// 声明用户信息
const user = reactive({
    username: "",
    password: "",
    captcha: ""         //验证码
});

const register = ()=> {
      router.push("/register");
    }

// 登录事件
const handleLogin= ()=>{
    api.getLogin({
        username: user.username,
        password: user.password,
        captcha:  user.captcha
    }).then(res=>{
        console.log(res.data);
        if(res.data.code === 200){
            loginStroe.token = res.data.data
            // loginStroe.username = user.username
            router.push('/')
        }else{
            // 失败给出用户提示
            ElMessage.error(res.data.message)
        }
    })
}

// 验证码刷新
const refreshCaptcha = () => {
    captchaImg.value = 'http://localhost:8002/user/captcha' + '?time=' + Date.now();
}

</script>

<style scoped>
.login-container{
    width: 100%;
    height: 100%;
    /* background-color:#2d3a4b; */
    background: url(/src/assets/imges/lion.jpg) no-repeat center;
    /* background-size: 100% 100%; */
}
.user{
    position: absolute;
    width: 400px;
    padding: 0px 35px;
    /* margin: 0 auto; */
    box-shadow: 5px 5px 20px rgba(30, 30, 30, 0.5);
    top: 200px;
    right: 92px;
    .loginButtom{
        width: 30%;
        margin-bottom: 30px;
        margin-left: 120px;
    }
}
.title-container .title{
    padding: auto;
    color: aliceblue;
    text-align: center;
    margin: 20px auto;
}
.msg {
  background: url(/src/assets/imges/cloud.png) no-repeat center;
  color: #fff;
  font-size: 15px;
  display: inline;
  margin-top: 9rem;
  width: 30%;
  float: left;
  margin-left: 51rem;
}
</style>
<template>
<h1>hhh</h1>
</template>
<script setup>
import { reactive,onMounted, ref } from 'vue';
import { User,Lock,Star } from '@element-plus/icons-vue'
import api from '@/api/index.js'

// 个人信息
const userInfo = reactive({
   username: "",
   nickname: "",
   phone: "",
   headPic:"",
   userProfile:"",
})

// 登录事件
const handleUserInfo= async ()=>{
    api.getUserInfo({
    }).then(res=>{
        if(res.data.code === 200){
         Object.assign(userInfo, res.data.data)
        }else{
            // 失败给出用户提示
            ElMessage.error(res.data.message)
        }
    })
}

onMounted(() => {
   handleUserInfo();
})
</script>
<template>
    <div class="top-navs">
        <el-menu
            mode="horizontal"
            background-color="#fff"
            text-color="34, 34, 38"
            active-text-color="#ffd04b"
            :ellipsis="false"
            :default-active="active"
            router
            >
            <el-menu-item index="0">
                <img
                    style="width: 64px"
                    src="D:\DataStorage\vscode\online-oj\src\assets\imges\logo.png"
                    alt="Element logo"
                />
            </el-menu-item>
            <el-menu-item index="/" >
                <span>首页</span>
            </el-menu-item>
            <el-menu-item index="/blog">
                <span>博客中心</span>
            </el-menu-item>
            <el-menu-item index="/problem" >
                <span>题目列表</span>
            </el-menu-item>

            <div class="flex-grow1" />

            <el-menu-item>
                <el-input :prefix-icon="Search" class="rounded-input" v-model="input2" placeholder="Please input">
                <template #append>
                    搜索
                </template>
                </el-input>
            </el-menu-item>

            <div class="flex-grow2" />

            <el-menu-item index="/selfInfo">
                <span>个人中心</span> 
            </el-menu-item>

            <el-sub-menu index="/login">
                <template #title>登录</template>
                    <el-menu-item @click="logoutHandler">注销</el-menu-item>
            </el-sub-menu>   
        </el-menu>
    </div>
  </template>

<style>
.flex-grow1 {
  flex-grow: 0.3;
}
.flex-grow2 {
  flex-grow: 0.6;
}
.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid #ff9f4b;
    color: #ff4b91!important;
}
.top-navs {
    --el-menu-horizontal-height: 70px;
}
.rounded-input {
    .el-input-group__prepend {
        border-radius: 95px;
        border: 0;
        box-shadow: 0 0 0 0px;
    }
 
    .el-input__wrapper {
        border-radius: 95px 0 0 95px;
        border: 1px solid black;
        box-shadow: 0 0 0 0px;
    }
 
    .el-input-group__append {
        border-radius:0 95px 95px 0;
        border: 0;
        box-shadow: 0 0 0 0px;
        background-color:#fc5531;
        color: #020b1b
    }
}
</style>

<script setup>
    import { ref } from "vue";
    import { Search } from '@element-plus/icons-vue'
    import { useLoginStore} from '@/stores/loginStore.js'
    import { useRouter } from "vue-router";
    const active = ref("/")
    const input2 = ref('')
    const loginStore = useLoginStore()
    const router = useRouter()

    // 注销登录按钮
    const logoutHandler= () =>{
        // 存储信息清空，并且 回退到登录页
        loginStore.token = ""
        router.push("/login")


    }
</script>
  

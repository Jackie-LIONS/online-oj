<template>
  <div class="ArticleView">
    <div>
      <h1 class="title">【Linux】nmcli命令详解</h1>
      <div class="feature">
        <img src="../../assets/nodianzan.svg" alt="SVG Image" width="20" height="20" style="margin-right: 5px">
        (20)

        <img src="../../assets/pinglun.svg" alt="SVG Image" width="20" height="20" style="margin:0 5px" @click="openReview">
        (20)
      </div>
      <div class="content">
        以往我都是在linux的系统中都是通过配置文件来配置和修改ip的，今天我们就来说一说nmcli命令配置网络。目前所有的linux系统配置网卡等信息，均已经推行Network-Manager服务去管理。nmcli 是 NetworkManager 的命令以往我都是在linux的系统中都是通过配置文件来配置和修改ip的，今天我们就来说一说nmcli命令配置网络。目前所有的linux系统配置网卡等信息，均已经推行Network-Manager服务去管理。nmcli 是 NetworkManager 的命令，以往我都是在linux的系统中都是通过配置文件来配置和修改ip的，今天我们就来说一说nmcli命令配置网络。目前所有的linux系统配置网卡等信息，均已经推行Network-Manager服务去管理。nmcli 是 NetworkManager 的命令以往我都是在linux的系统中都是通过配置文件来配置和修改ip的，今天我们就来说一说nmcli命令配置网络。目前所有的linux系统配置网卡等信息，均已经推行Network-Manager服务去管理。nmcli 是 NetworkManager 的命令，以往我都是在linux的系统中都是通过配置文件来配置和修改ip的，今天我们就来说一说nmcli命令配置网络。目前所有的linux系统配置网卡等信息，均已经推行Network-Manager服务去管理。nmcli 是 NetworkManager 的命令以往我都是在linux的系统中都是通过配置文件来配置和修改ip的，今天我们就来说一说nmcli命令配置网络。目前所有的linux系统配置网卡等信息，均已经推行Network-Manager服务去管理。nmcli 是 NetworkManager 的命令，以往我都是在linux的系统中都是通过配置文件来配置和修改ip的，今天我们就来说一说nmcli命令配置网络。目前所有的linux系统配置网卡等信息，均已经推行Network-Manager服务去管理。nmcli 是 NetworkManager 的命令以往我都是在linux的系统中都是通过配置文件来配置和修改ip的，今天我们就来说一说nmcli命令配置网络。目前所有的linux系统配置网卡等信息，均已经推行Network-Manager服务去管理。nmcli 是 NetworkManager 的命令
      </div>
    </div>
    <el-drawer v-model="drawer" title="I am the title" :with-header="false">
      <span>Hi there!</span>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import { useRoute } from 'vue-router'
const router=useRoute()

const id = ref(null)

const drawer = ref(false)

const openReview = () => {
  drawer.value = true;
};

onMounted(()=>{
  id.value = router.query.id
})
</script>

<style scoped>
.ArticleView{
  margin-top: 10px;
  padding: 10px;
  background-color: #fff;
  text-align: center;
}

.ArticleView .title{
  margin-bottom: 10px;
  font-size: 30px;
  display: inline-block;
}

.ArticleView .feature{
  float: right;
  margin-top: 20px;
  display: flex;
}

.ArticleView .content{
  text-align: left;
  font-size: 16px;
}
</style>

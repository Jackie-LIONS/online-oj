<template>
  <div class="BlogView">
    <el-tabs v-model="active_name" class="demo-tabs">
      <el-tab-pane label="关注" name="first">
        <a v-for="(item,index) in article_list" :key="index">
          <article-item
            :image-url="item.image_url"
            :title="item.title"
            :content="item.content"
            :dianzannumber="item.dianzannumber"
            @click="goToArticle(item.id)"
          >
          </article-item>
        </a>
        <el-pagination background layout="prev, pager, next" :total="1000" style="margin-top: 10px" />
      </el-tab-pane>
      <el-tab-pane label="推荐" name="second">推荐</el-tab-pane>
      <el-tab-pane label="资讯" name="third">资讯</el-tab-pane>
      <el-tab-pane label="热榜" name="fourth">热榜</el-tab-pane>
      <el-tab-pane label="自荐" name="fifth">自荐</el-tab-pane>
      <el-tab-pane label="动态" name="sixth">动态</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup>
import { ref, defineComponent } from 'vue'
import ArticleItem from '@/component/ArticleItem/index.vue'
import { useRouter } from 'vue-router'
const router= useRouter()

defineComponent({ ArticleItem })

const active_name = ref('first')

const article_list = [
  {
    id:0,
    image_url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: '【Linux】nmcli命令详解',
    content: '以往我都是在linux的系统中都是通过配置文件来配置和修改ip的，今天我们就来说一说nmcli命令配置网络。目前所有的linux系统配置网卡等信息，均已经推行Network-Manager服务去管理。nmcli 是 NetworkManager 的命令以往我都是在linux的系统中都是通过配置文件来配置和修改ip的，今天我们就来说一说nmcli命令配置网络。目前所有的linux系统配置网卡等信息，均已经推行Network-Manager服务去管理。nmcli 是 NetworkManager 的命令，以往我都是在linux的系统中都是通过配置文件来配置和修改ip的，今天我们就来说一说nmcli命令配置网络。目前所有的linux系统配置网卡等信息，均已经推行Network-Manager服务去管理。nmcli 是 NetworkManager 的命令以往我都是在linux的系统中都是通过配置文件来配置和修改ip的，今天我们就来说一说nmcli命令配置网络。目前所有的linux系统配置网卡等信息，均已经推行Network-Manager服务去管理。nmcli 是 NetworkManager 的命令，以往我都是在linux的系统中都是通过配置文件来配置和修改ip的，今天我们就来说一说nmcli命令配置网络。目前所有的linux系统配置网卡等信息，均已经推行Network-Manager服务去管理。nmcli 是 NetworkManager 的命令以往我都是在linux的系统中都是通过配置文件来配置和修改ip的，今天我们就来说一说nmcli命令配置网络。目前所有的linux系统配置网卡等信息，均已经推行Network-Manager服务去管理。nmcli 是 NetworkManager 的命令，以往我都是在linux的系统中都是通过配置文件来配置和修改ip的，今天我们就来说一说nmcli命令配置网络。目前所有的linux系统配置网卡等信息，均已经推行Network-Manager服务去管理。nmcli 是 NetworkManager 的命令以往我都是在linux的系统中都是通过配置文件来配置和修改ip的，今天我们就来说一说nmcli命令配置网络。目前所有的linux系统配置网卡等信息，均已经推行Network-Manager服务去管理。nmcli 是 NetworkManager 的命令',
    dianzannumber:20
  }
]

const goToArticle = (id) => {
  router.push({
    path:'/article',
    query:{
      id:id
    }
  })
}


</script>
<style scoped>
::v-deep .el-tabs__item {
  color: #555666;
}

::v-deep .el-tabs__item.is-active {
  color: #222226;
}


::v-deep .el-tabs__item:hover {
  color: #222226;
  cursor: pointer;
}

::v-deep .el-tabs__active-bar {
  background-color: #222226;
}

.BlogView {
  padding-bottom: 40px;
}

.BlogView a{
  text-decoration: none;
  cursor: pointer;
}

</style>

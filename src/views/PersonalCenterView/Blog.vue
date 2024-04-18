<template>
  <div class="MyBlog">
    <el-tabs v-model="active_name" class="demo-tabs">
      <el-tab-pane label="最近" name="first">
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
      <el-tab-pane label="文章" name="second">文章</el-tab-pane>
      <el-tab-pane label="资源" name="third">资源</el-tab-pane>
      <el-tab-pane label="问答" name="fourth">问答</el-tab-pane>
      <el-tab-pane label="帖子" name="fifth">帖子</el-tab-pane>
      <el-tab-pane label="收藏" name="sixth">收藏</el-tab-pane>
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

.MyBlog {
 padding-bottom: 40px;
}

.MyBlog a{
 text-decoration: none;
 cursor: pointer;
}
 </style>

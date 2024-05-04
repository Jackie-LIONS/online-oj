<template>
  <div class="  ArticleItem">
    <div class="left">
      <el-image :src="imageUrl" style="width: 300px;height: 150px;" fit="cover"/>
    </div>

    <div class="right">
      <h3 class="title">{{title}}</h3>
      <div class="content">{{content}}</div>
      <div class="feature">
        <img src="../../assets/nodianzan.svg" alt="SVG Image" width="20" height="20" style="margin-right: 5px">
        ({{ dianzannumber }})

        <img src="../../assets/pinglun.svg" alt="SVG Image" width="20" height="20" style="margin:0 5px">
        ({{ dianzannumber }})
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  imageUrl: String,
  title: String,
  content: String,
  dianzannumber:Number
})
</script>

<style scoped>
.ArticleItem{
  width: 100%;
  background-color: #ffffff;
  height: 200px;
  border-bottom: 2px solid #F0F0F2;
  padding: 25px 0;
  box-sizing: border-box;

}

.left{
  float: left;
  margin: 0 20px;
}

.right{
  width: 95%;
}

.right .title{
  display: block;
  margin-bottom: 10px;
}

.right .content{
  font-size: 15px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4; /* 控制显示行数 */
  max-height: 150px; /* 控制显示的高度 */
}

.right .feature{
  margin-top: 20px;
  display: flex;
}


</style>

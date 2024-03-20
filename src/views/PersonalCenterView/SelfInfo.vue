<template>
   <div class="common-layout">
      <el-container>
         <el-header>个人中心</el-header>
         <el-container>
            <el-aside width="20%"><person-aside></person-aside></el-aside>
            <el-main><router-view></router-view></el-main>
         </el-container>
      </el-container>
   </div>


</template>

<script setup>
import PersonAside from './PersonAside.vue';
</script>

<style scoped>
.common-layout {
   width: 100%;
   height: 100%;
   background: url("/src/assets/imges/personBackgroup.png");
   background-size: 90% 100%;
   background-position: 70%;
   margin: 0;
}
.common-layout .el-contain {
   height: 100%;
}

.el-aside {
   height: 100%;
}
.el-header {
    line-height: 60px;
    font-size: 28px;
    color: #0d0d75;
    border-radius: 10px;
    font-weight: 600;
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
   align-items: center;
    /* border-bottom: 1px solid #e0e0e0; */
}

.el-header i:hover {
  color: #409eff;
  text-align: center;
}
</style>
<template>
  <div>
    <el-menu class="el-menu-vertical-demo" default-active="homePage">
      <el-menu-item index="homePage"  @click="selfIfo()" style="margin-top: 20px">
        <i class="el-icon-s-promotion"></i>
        <span slot="title">个人信息</span>
      </el-menu-item>
      <el-menu-item index="2" @click="myBlog()">
        <i class="el-icon-medal"></i>
        <span slot="title">我的博客</span>
      </el-menu-item>
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <!-- <location /> -->
          </el-icon>
          <span>题目管理</span>
        </template>
        <el-menu-item index="1-1" @click="submitQuestionRecords()">
          <i class="el-icon-document-copy"></i>
          <span slot="title">提交记录</span>
        </el-menu-item>
        <el-menu-item index="1-2" @click="myQuestionSolution()">
          <i class="el-icon-document-copy"></i>
          <span slot="title">我的题解</span>
        </el-menu-item>
        <el-menu-item index="1-3" @click="progressManagement()">
          <i class="el-icon-document-copy"></i>
          <span slot="title">进度管理</span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    selfIfo() {
      this.$router.push('/person');
    },
    myBlog() {
      this.$router.push('/myBlog');
    },
    submitQuestionRecords() {
      this.$router.push('/submitRecord');
    },
    myQuestionSolution() {
      this.$router.push('/questionSolution');
    },
    progressManagement() {
      this.$router.push('/progress');
    },
  }
}
</script>

<style scoped>
.tac {
  width: 100%;
  height: 321px;
  margin: 0;
  margin-top: 40%;
  background-color: #fff;
  padding: 0;
}
</style>
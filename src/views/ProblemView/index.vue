<template>
  <div class="questionView">
    <el-table :data="questionData" style="width: 100%" @row-click="handleRowClick">
      <el-table-column  type="index" width="70" />
      <el-table-column label="题目" prop="title" />
      <el-table-column label="标签" prop="tags" />
      <el-table-column label="提交数" prop="submitNum" />
      <el-table-column label="通过率" prop="acceptedNum" />
      <el-table-column label="难度" prop="acceptedNum" />
      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="small" placeholder="Type to search" />
        </template>

        <template>
          <!-- <router-link :to="{ name: 'problemEditSubmitView', params: { id: this.id }}" prop="id">去做题</router-link> -->
          <!-- < size="small" @click="handleEdit">去做题</el-button> -->
          <!-- <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        class="pagination"
        layout="prev, pager,next"
        :total="total"
        :page-size="size"
        v-model:current-page="page"
        @current-change="handleCurrentChange"
      />
  </div>
</template>

<script>
import { ref } from 'vue';
import api from '@/api/index.js';
const search = ref('');

export default {
  data() {
    return {
      paginationShow: true,
      questionData: [],
      total: 10,
      page: 1,
      size: 5,
    };
  },
  methods: {
    handleCurrentChange(page) {
      this.page = page;
      this.fetchUserData();
    },
    fetchUserData() {
      // 调用后端接口获取当前页用户信息
      api.getQuestionListPage({
         page: this.page,
         size: this.size
      }).then(res =>{
        if(res.data.code === 200){
          console.log(res.data.data);
          this.questionData = res.data.data.records;
          this.total = res.data.data.total;
        }else {
          // 失败给出用户提示
          ElMessage.error(res.data.message)
        }  
      });  
    },
    handleRowClick(row) {
      this.$router.push(`/problemEdit?id=${row.id}`);
    }
  
  },
  mounted() {
    this.fetchUserData();
  },
};

</script>
<style scoped>
.pagination {
  position: absolute;
    right: -10;
    margin: 0 auto;
}
.questionView{
  max-width: 1280px;
  margin: 0 auto;
}
</style>

<template>
  <div class="questionView">
    <div style="display: flex">
      <div class="plan">
        <h2>学习计划</h2>
        <ul>
          <li class="item">
            <a href="lions.blog.csdn.net">
              <img src="../../assets/imges/1-cover.png">

              <div class="right">
                <h3>面试经典150题</h3>

                <div>最经典 150 题，掌握面试所有知识点</div>
              </div>
            </a>
          </li>

          <li class="item">
            <a href="lions.blog.csdn.net">
              <img src="../../assets/imges/2-cover.png">

              <div class="right">
                <h3>面试经典150题</h3>

                <div>最经典 150 题，掌握面试所有知识点</div>
              </div>
            </a>
          </li>

          <li class="item">
            <a href="lions.blog.csdn.net">
              <img src="../../assets/imges/3-cover.png">

              <div class="right">
                <h3>2024 春招冲刺百题计划</h3>

                <div>近3个月高频面试精选 100 题</div>
              </div>
            </a>
          </li>

          <li class="item">
            <a href="lions.blog.csdn.net">
              <img src="../../assets/imges/5-cover.png">

              <div class="right">
                <h3>LeetCode 热题 100</h3>

                <div>力扣最受刷题发烧友欢迎的 100道题</div>
              </div>
            </a>
          </li>

          <li class="item">
            <a href="lions.blog.csdn.net">
              <img src="../../assets/imges/7-cover.png">

              <div class="right">
                <h3>[新」动计划·编程入门</h3>

                <div>编程初学者的力扣适应手册</div>
              </div>
            </a>
          </li>

          <li class="item">
            <a href="lions.blog.csdn.net">
              <img src="../../assets/imges/8-cover.png">

              <div class="right">
                <h3>字节跳动秋招心动计划</h3>

                <div>秋招弯道顺利超车</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <Calendar
        @clickDate="clickDate"
      ></Calendar>
    </div>
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
import api from '@/api/index.js';
import { ElMessage } from 'element-plus'
import Calendar from '@/component/Calendar/index.vue'

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
  components:{
    Calendar
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
    },
    // 日期点击事件
    clickDate(){
      console.log(123)
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
    margin: 0 auto;
}
.questionView{
  max-width: 1280px;
  margin: 0 auto;
}

.plan{
  width: 850px;
}

.plan h2{
  font-weight: normal;
  margin-bottom: 12px;
}

.plan ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.plan ul li {
  list-style: none;
  padding: 0;
  float: left;
  margin-bottom: 12px;
}

.plan .item{
  background-color: #F5F5F5;
  padding: 0.5rem;
  border-radius: 5px;
  height: 72px;
  width: 250px;
  margin-right: 1rem;
}

.plan .item a{
  text-decoration: none;
}

.plan .item img{
  width: 72px;
  height: 72px;
  float: left;
  margin-right: 14px;
  border-radius: 4px;
}

.plan .item .right h3{
  font-weight: normal;
  margin-bottom: 10px;
}

.plan .item .right div{
  font-size: 12px;
}
</style>

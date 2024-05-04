<template>
  <div class="container">
    <div class="left">

    </div>
    <div class="right">
      <h1>{{article_detail.title}}测试</h1>
      <div class="tagList">
        <el-tag type="info">Tag 1</el-tag>
        <el-tag type="info">Tag 1</el-tag>
      </div>

      <MdViewer :value="article_detail.content || ''" />
    </div>
  </div>
</template>

<script setup>
import { ref,onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router';
import MdViewer from '@/component/MdViewer/index.vue'
import api from '@/api/index';
import { ElMessage } from 'element-plus';

// 获取路由对象
const router = useRouter();

// 使用 ref 创建响应式变量
const id = ref('');

const article_detail = reactive({
  articleId: "",
  content: "111111111111111111111111111111111111111111",
  createTime: "",
  updateTime: "",
});
const articleDetail = async ()=>{
  await api.getArticleDetail({
    articleId : id.value
  }).then(res =>{
    if(res.data.code === 200){
      Object.assign(article_detail,res.data.data);
    }else{
      ElMessage.error(res.data.message)
    }
  })
}

onMounted(() => {
    // 通过 router.currentRoute.value.query.id 获取路由参数
    id.value = router.currentRoute.value.query.id;
    console.log(id.value,"湖南-");
    articleDetail();
})

</script>

<style scoped lang="scss">
.container{
  display: flex;
  justify-content: space-around;

  .left{
    width: 25%;
    height: 100px;
    background: #ffffff;
  }
  .right{
    padding:20px 50px;
    width: 65%;
    height: 1000px;
    background-color: #ffffff;

    .tagList{
      margin: 10px 0;

      > .el-tag{
        margin-left: 10px;
      }
    }
  }
}
</style>

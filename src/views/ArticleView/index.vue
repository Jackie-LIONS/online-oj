<template>
  <div class="container">
    <MdViewer :value="article_detail.content || ''" />
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
  content: "",
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

<style scoped>

</style>

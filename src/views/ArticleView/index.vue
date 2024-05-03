<template>
  <div class="container">
    <MdViewer :value="article_detail.content || ''" />
  </div>
</template>

<script setup>
import { ref,onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import MdViewer from '@/component/MdViewer/index.vue'
import api from '@/api/index';
import { id } from 'element-plus/es/locale';
import { ElMessage } from 'element-plus';
const router = useRoute()

const id = ref('');

const article_detail = reactive({
  articleId: "",
  content: "",
  createTime: "",
  updateTime: "",
});
const articleDetail = async ()=>{
  api.getArticleDetail({
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
    articleDetail();
})

</script>

<style scoped>

</style>

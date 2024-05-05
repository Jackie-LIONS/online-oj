<template>
  <div class="container">
    <div class="left">

    </div>
    <div class="right">
      <h1>{{ article_detail.title }}</h1>
      <!-- <div class="article-info-box">
        <div class="article-bar-top">
          <img class="article-type-img" src="src/assets/imges/original.png" alt="无"/>
          <div class="bar-content">
            <a class="follow-nickName" href="https://blog.csdn.net/m0_58847451?type=blog" target="_blank" rel="noopener" title="article_detail.name"></a>
            <img class="article-time-img article-head-img" src="src/assets/imges/newCurrentTime2.png" alt="无"/>
            <span class="time">于&nbsp;{{ article_detail.createTime }}&nbsp;发布</span>
            <div class="read-count-box">
              <img class="article-read-img article-head-img" src="src/assets/imges/articleReadEyes2.png" alt="无"/>
              <span class="read-count">阅读量15k</span>
              <a id="blog_detail_zk_collection" class="un-collection" data-reoprt-click="{"mod":"popu_823"},"spm":"1001.2101.3001.4232","ab":"new"}>
                <img class="article-collect-img article-head-img un-collect-status isdefault" style="display: inline-block;" src="src/assets/imges/tobarCollect2.png" alt="无"/>
                <img class="article-collect-img article-head-img collect-status isactive" style="display: none;" src="src/assets/imges/tobarCollectionActive2.png" alt="无"/>
                <span class="name">收藏</span>
                <span class="get-collection" style="color: rgb(153, 154, 170);"> 40 </span>
              </a>
              <div class="read-count-box is-like">
                <img class="article-read-img article-head-img" style="display: block;" id="is-like-imgactive-new" src="src/assets/imges/newHeart2023Active.png" alt="无"/>
                <img class="article-read-img article-head-img" style="display: none;" id="is-like-img-new" src="src/assets/imges/newHeart2023Black.png" alt="无"/>
                <span class="read-count" id="blog-digg-num"> 点赞数 58 </span>
              </div>
            </div>
          </div>
        </div>
        <div class="blog-tags-box">
          <div class="tags-box artic-tag-box">
            <span class="label">分类专栏：</span>
            <a class="tag-link" href="https://blog.csdn.net/m0_58847451?type=blog" target="_blank" rel="noopener">bug修理厂</a>
            <span class="label">文章标签：</span>
            <a class="tag-link" href="https://blog.csdn.net/m0_58847451?type=blog" target="_blank" rel="noopener">标签跳转页（待处理）</a>
          </div>
        </div>
        <div class="up-time" style="left: 202px; display: none;">
          <span>于&nbsp;{{article_detail.createTime}}&nbsp;首次发布</span>
        </div>
        <div class="slide-content-box">
          <div class="article-copyright">
            <div class="createcommons">
              "版权声明：本文为博主原创文章，遵循"
              <a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">CC 4.0 BY-SA</a>
              "版权协议，转载请附上原文出处链接和本声明。"
            </div>
            <div class="article-source-link">
              "本文链接："
              <a href="https://blog.csdn.net/m0 58847451/article/details/137105086" target="_blank"></a>
            </div>
          </div>
        </div>
        <div class="operating">
          <a class="href-article-edit" data-reoprt-click="{"spm":"1001.2101.3001.9700"}" href="https://editor.csdn.net/md?articleld=137105086">
            "编辑"
            ::after
          </a>
          <a class="href-article-edit slide-toggle">版权</a>
        </div> -->
      <!-- </div> -->

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
  title: "",
  categoryId: "",
  tags: [],
  summary: "",
  content: "111111111111111111111111111111111111111111",
  cover: "",
  articleType: "",
  source: "",
  status: "",
  sourceUrl: "",
  createTime: "",
  updateTime: "",
});
const articleDetail = async ()=>{
  await api.getArticleDetail({
    articleId : id.value
  }).then(res =>{
    if(res.data.code === 200){
      console.log(res.data.data,"湖南a");
      Object.assign(article_detail,res.data.data);
      console.log(article_detail,"湖南");
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
// container.right.article-info-box {
//     position: relative;
//     background: #f8f8f8;
//     border-radius: 4px;
// }
// container.right.article-info-box div.article-bar-top {
//     color: #999aaa;
//     width: 88%;
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
// }

</style>

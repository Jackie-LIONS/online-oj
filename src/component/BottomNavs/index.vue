<!-- Footer.vue -->
<template>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-links">
            <!-- 外部网站链接 -->
            <div>CSDN博客: <a href="https://lions.blog.csdn.net" target="_blank">@狮子也疯狂</a></div>
  
            <!-- 邮箱展示 -->
            <div>Email: Jackie_csy@163.com</div>
          </div>
  
          <!-- 口号 -->
          <div class="slogan">为解决编程爱好者线上刷题，学习提供帮助！</div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
//   export default {
//     name: 'Footer'
//   }
  </script>
  
  <style scoped>
  /* 样式可以根据你的需要进行调整 */
  .footer {
    background-color: #333;
    color: white;
    padding: 20px 0;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .footer-links a {
    color: white;
    margin-right: 20px;
    text-decoration: none;
  }
  
  .slogan {
    font-size: 16px;
  }
  </style>
  
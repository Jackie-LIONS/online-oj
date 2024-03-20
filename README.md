## 项目所需要使用到的技术栈
1. 基本框架：Vue3
2. 网络请求：axios
3. 路由：Vue-Router4.x
4. 状态管理：Pinia
5. 图表：echarts
6. 语言切换：vue-i18n
7. UI组件库：element-plus
8. 仓库持久化存储：pinia-plugin-persist
9. ElementPlus字体图标：element-plus/icons-vue


## 跨域的解决方案
1. 前台
    1. JSONP
    2. Proxy(开发环境生效)
2. 后台解决
    1. cors解决跨域


## 编辑功能，数据回显
1. 拿到当前表格中的数据，重新赋值到编辑对话框中
2. 通过网络请求获取新的对应此条数据（预更新）

## 项目完结之后的打包
执行：npm run build
服务器问题：放在同一个服务器上 
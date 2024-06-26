/**
 * 存放所有的网络请求地址
 */
const base ={
    baseUrl: "http://www.lion.com",
    login: "/user/login",
    register: "/user/register",
    userInfo: "/user/getUserInfo",
    questionListPage: "/question/search",
    questionEdit: "/question/findById",
    questionEditSubmit: "/question/submit",
    questionSubmitList: "/question/searched",
    getNextQuestionId: "/question/getNextQuestionId",
    singleQuestionSubmitPage: "/question/getSingleSubmitPage",
    NewsList: "/user/news/all",
    publishArticle: "/article/publish",
    articleDetail: "/article/selectById",
    articlePage: "/article/selectPage",
    articleDelete: "/article/delete",


}
export default base
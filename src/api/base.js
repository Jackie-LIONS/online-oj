/**
 * 存放所有的网络请求地址
 */
const base ={
    baseUrl: "http://localhost:9090",
    login: "/user/login",
    register: "/user/register",
    userInfo: "/user/getUserInfo",
    questionListPage: "/question/search",
    questionEdit: "/question/findById",
    questionEditSubmit: "/question/submit",
    questionSubmitList: "/question/searched",
    singleQuestionSubmitPage: "/question/getSingleSubmitPage",

}
export default base
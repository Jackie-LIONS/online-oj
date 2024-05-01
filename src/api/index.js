import axios from "../utils/request.js";
import base from "./base.js";


axios.defaults.headers.post['Content-Type'] = 'application/json';

const api={
    getLogin(params){
        return axios.post(base.baseUrl+base.login, params)
    },
    getRegister(params){
        console.log(params, '传过来的参数');
        return axios.post(base.baseUrl+base.register,params)
    },
    getUserInfo(){
        return axios.get(base.baseUrl+base.userInfo,{
        })
    },
    getQuestionListPage(params){
        return axios.get(base.baseUrl+base.questionListPage,{
            params
        })
    },
    getQusetionEdit(params){
        return axios.get(base.baseUrl+base.questionEdit,{
            params
        })
    },
    getQuestionEditSubmit(params){
        return axios.post(base.baseUrl+base.questionEditSubmit,params)
    },
    getquestionSubmitList(params){
        return axios.get(base.baseUrl+base.questionSubmitList,{
            params
        })
    },
    getSingleQuestionSubmitPage(params){
        return axios.get(base.baseUrl+base.singleQuestionSubmitPage,{
            params
        })
    },
    getNewsList(params){
        return axios.get(base.baseUrl+base.NewsList,params)
    }
}

export default api; 
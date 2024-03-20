import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout.vue'
import HomeView from '../views/HomeView/index.vue'
import LoginView from '../views/LoginView/index.vue'
import RegisterView from '../views/RegisterView/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout,
      children: [
        // 添加二级子路由
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/blog',
          name: 'blog',
          component: () => import("../views/BlogView/index.vue")
        },
        {
          path: '/selfInfo',
          name: 'SelfInfo',
          component: () => import("../views/PersonalCenterView/SelfInfo.vue"),
          children: [{
            path: '/person',
            name: 'Person',
            component: () => import("../views/PersonalCenterView/person.vue"),
          },
            {
            path: '/submitRecord',
            name: 'SubmitRecord',
            component: () => import("../views/PersonalCenterView/SubmitRecord.vue"),
          },
          {
            path: '/myblog', 
            name: 'Blog',
            component: () => import("../views/PersonalCenterView/Blog.vue"),
          },
          {
            path: '/questionSolution',
            name: 'QuestionSolution',
            component: () => import("../views/PersonalCenterView/QuestionSolution.vue"),
          },
          {
            path: '/progress',
            name: 'ProgressManagement',
            component: () => import("../views/PersonalCenterView/ProgressManagement.vue"),
          }
          ]
        },
        {
          path: '/problem',
          name: 'problemView',
          component: () => import("../views/ProblemView/index.vue")
        },
        {
          path: '/problemEdit',
          name: 'problemEditSubmitView',
          // props: true,
          // src\views\ProblemView\ProblemEditSubmitView
          component: () => import("../views/ProblemView/ProblemEditSubmitView/index.vue")
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView
    }
  ]
})

export default router

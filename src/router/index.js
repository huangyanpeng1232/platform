import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/login/Index.vue'
import Home from '../views/framework/Index'
import Blank from '../views/framework/Blank'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      requireAuth:false
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      requireAuth:true
    },
    children: [
      {
        path: '/',
        name: 'Blank',
        component: Blank,
        meta:{
          requireAuth:true
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)){ // 判断该路由是否需要登录权限
    if (localStorage.token) { // 判断当前的token是否存在 ； 登录存入的token
      next();
    }else {
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }else {
    next();
  }
});

export default router

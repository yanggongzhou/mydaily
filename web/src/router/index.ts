import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// // 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location:any) {
//   return originalPush.call(this, location).catch((err:any)=> err)
// }

const router:any = new Router({
  // 解决vue框架页面跳转有白色不可追踪色块的bug
  scrollBehavior: () => ({ x: 0, y: 0 }),
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/start'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import (('@/pages/login.vue'))
    },
    {
      path: '/start',
      name: 'start',
      component: () => {
        return import (('@/pages/start.vue'));
      }
    },
    {
      path: '/list',
      name: 'list',
      component: () => import (("@/pages/list.vue"))
    },
    {
      path: '/home',
      name: 'home',
      component: () => import (("@/components/home/home.vue"))
    }
  ]
})

router.beforeEach((to:any, from:any, next:any) => {
  // console.log(to, from,next)
  next()
})

export default router

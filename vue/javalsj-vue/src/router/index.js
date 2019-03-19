import Vue from 'vue'
import Router from 'vue-router'
import BlogLogin from '@/components/manage/BlogLogin.vue'
import BlogIndex from '@/components/home/BlogIndex.vue'
import Menu01 from '@/components/menu/Menu01.vue'
import Menu02 from '@/components/menu/Menu02.vue'
import Menu03 from '@/components/menu/Menu03.vue'
import Menu04 from '@/components/menu/Menu04.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/index',
      name: 'BlogIndex',
      component: BlogIndex
    },
    {
      path: '/manage',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'BlogLogin',
      component: BlogLogin
    },
    {
      path: '/menu01',
      name: 'Menu01',
      component: Menu01
    },
    {
      path: '/menu02',
      name: 'Menu02',
      component: Menu02
    },
    {
      path: '/menu03',
      name: 'Menu03',
      component: Menu03
    },
    {
      path: '/menu04',
      name: 'Menu04',
      component: Menu04
    }
  ]
})

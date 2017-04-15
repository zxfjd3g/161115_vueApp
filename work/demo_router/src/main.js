import Vue from 'vue'
import VueRouter from 'vue-router'

import app from './app.vue'
import about from './components/about.vue'
import home from './components/home.vue'
import message from './components/message.vue'
import news from './components/news.vue'
import messageDetail from './components/message_detail.vue'

//声明使用插件
Vue.use(VueRouter)

// 创建路由器
const router = new VueRouter({
  linkActiveClass: 'active', //指定当前路由链接的样式名
  history: true //去掉#!
})

// 注册路由
router.map({
  '/home': {
    component: home,
    subRoutes: {
      '/news': {
        component: news
      },
      '/message': {
        component: message,
        subRoutes: {
          '/mdtail/:id': {
            component: messageDetail
          }
        }
      }
    }
  },
  '/about': {
    component: about
  }
})

// 启动应用
router.start(app, '#app')

// 请求默认路由
router.go('/home')



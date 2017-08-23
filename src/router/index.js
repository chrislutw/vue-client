import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Cash from '@/pages/Cash'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/cash',
      name: 'Cash',
      component: Cash
    }
  ]
})

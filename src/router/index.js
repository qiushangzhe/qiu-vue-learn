import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LifeCycle from '@/views/LifeCycle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/lifeCycle',
      name: 'LifeCycle',
      component: LifeCycle
    }
  ]
})

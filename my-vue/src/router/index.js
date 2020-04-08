import Vue from 'vue'
import Router from 'vue-router'
import Indexhome from '@/components/indexhome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexhome',
      component: Indexhome
    }

  ]
})

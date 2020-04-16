import Vue from 'vue'
import Router from 'vue-router'
import Indexhome from '@/components/indexhome'
import Search from '@/components/search'
import Board from '@/components/board'

import MovieList from '@/components/movieList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'indexhome',
      // 默认选择board组件
      redirect: 'board',
      component: Indexhome,
      children: [
        // 也可以用空的路径
      // {
      //   path: '',
      //   name: 'board',
      //   component: Board
      // },
        {
          path: '/board',
          name: 'board',
          component: Board
        },
        {
          path: '/search',
          name: 'search',
          component: Search
        },
        {
          path: '/movieList',
          name: 'movieList',
          component: MovieList
        }

      ]
    }

  ]
})

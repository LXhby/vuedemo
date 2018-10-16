import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/home'
import Member from '@/components/Member/member'
import Search from '@/components/Search/search'
import Shopcart from '@/components/Shopcart/shopcart'
import NewsList from '@/components/News/newsList'
import NewsDetail from '@/components/News/newsDetail'
import PhotoList from '@/components/Photo/photoList'
import PhotoDetail from '@/components/Photo/photoDetail'
import GoodList from '@/components/Goods/GoodsList'
import GoodsDetail from '@/components/Goods/GoodsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name:'home'}
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart
    },
    {
      path: '/news/list',
      name: 'news.list',
      component: NewsList
    },
    {
      path: '/news/detail',
      name: 'news.detail',
      component: NewsDetail
    },
    {
      path: '/photo/list/:categoryId',
      name: 'photo.list',
      component: PhotoList
    },
    {
      path: '/photo/detail',
      name: 'photo.detail',
      component: PhotoDetail
    },
    {
      name:'goods.list',
      path: '/goods/list',
      component: GoodList
    },
    {
      name: 'goods.detail',
      path: '/goods/detail/:id',
      component:GoodsDetail
    },
    {
      component:
    }
  ]
})

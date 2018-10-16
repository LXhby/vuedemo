// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/global.css'
import './assets/font/iconfont.css'
Axios.defaults.baseURL = 'https://www.sinya.online/api/'
Vue.prototype.$axios = Axios

// 配置请求拦截器 ，显示loading图标
Axios.interceptors.request.use(function (config) {
  MintUI.Indicator.open({
    text:'玩命加载中...'
  });
  return config
})
// 配置响应拦截器，关闭loading图标
Axios.interceptors.response.use(function (response) {
  MintUI.Indicator.close()
  return response
})
Vue.use(MintUI)
Vue.config.productionTip = false

import Moment from 'moment'
Moment.locale('zh-cn')
Vue.filter("convertTime",function (data,formatStr) {
  return Moment(data).format(formatStr)
})
Vue.filter('relativeTime',function (previousTime) {
  return Moment(previousTime).fromNow();
})
import NavBar from "@/components/Common/NavBar"
Vue.component(NavBar.name,NavBar)

//图片预览
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
//评论组件
import Comment from '@/components/Common/comment'
Vue.component(Comment.name, Comment)


//轮播图
import MySwipe from '@/components/common/MySwipe'
Vue.component(MySwipe.name,MySwipe)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

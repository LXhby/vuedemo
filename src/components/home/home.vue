<template>
    <div>
      <my-swipe url='getlunbo'></my-swipe>
      <div class="grid">
        <ul>
          <li v-for="item in grids">
            <router-link :to="item.router">
              <span></span>
              <div>{{item.title}}</div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      imgs: [],
      grids:[
        {
          title:"新闻资讯",
          router: {name:'news.list'}
        },
        {
          title: "图文分享",
          router: {name:'photo.list', params: {categoryId: 0}}
        },
        {
          title:"商品展示",
          router: {name:'goods.list',query:{id:1}}
        },
        {
          title: "留言反馈",
          router: {name:'news.list'}
        },
        {
          title: "新闻资讯",
          router: {name:'news.list'}
        },
        {
          title:"搜索资讯",
          router:{name:'news.list'}
        },
        {
          title:"联系我们",
          router:{name:'news.list'}
        }
      ]
    }
  },
  created () {
   
  }
}
</script>

<style scoped>

  .grid ul{
    width: 100%;
    overflow: hidden;
  }
  .grid li{
    list-style: none;
    float: left;
    width: 33.3%;
    height: 80px;
    padding: 10px 0;
    text-align:center;
  }
  .grid li a{
    display: block;
    width: 100%;
    height: 100%;
  }
  .grid li:nth-child(1) span{
    display: inline-block;
    width: 50px;
    height: 50px;
    background: url("../../assets/img/新闻.png") 0 0 /50px no-repeat;
  }
  .grid li:nth-child(2) span{
    display: inline-block;
    width: 50px;
    height: 50px;
    background: url("../../assets/img/图片.png") 0 0 /50px no-repeat;
  }
  .grid li:nth-child(3) span{
    display: inline-block;
    width: 50px;
    height: 50px;
    background: url("../../assets/img/商品.png") 0 0 /50px no-repeat;
  }
  .grid li:nth-child(4) span{
    display: inline-block;
    width: 50px;
    height: 50px;
    background: url("../../assets/img/留言.png") 0 0 /50px no-repeat;
  }
  .grid li:nth-child(5) span{
    display: inline-block;
    width: 50px;
    height: 50px;
    background: url("../../assets/img/资讯.png") 0 0 /50px no-repeat;
  }
  .grid li:nth-child(6) span{
    display: inline-block;
    width: 50px;
    height: 50px;
    background: url("../../assets/img/联系人.png") 0 0 /50px no-repeat;
  }
</style>

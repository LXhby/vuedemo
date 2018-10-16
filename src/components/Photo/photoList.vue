<template>
    <div>
      <nav-bar title="图文列表"></nav-bar>
      <div class="photo-header">
        <ul class="clearfix">
          <li v-for="(item) in categorys" :key="item.id">
            <a href="javascript:;" @click="loadRouter(item.id)">{{item.title}}</a>
          </li>
        </ul>
      </div>
      <div class="photo-list">
        <ul>
          <li v-for="img in imgs" :key="img.id">
            <router-link :to="{name:'photo.detail',query:{id:img.id}}">
              <img v-lazy="img.img_url" alt="">
              <p>
                <span>{{img.title}}</span>
                <br>
                <span>{{img.zhaiyao}}</span>
              </p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  data (){
    return {
      imgs:[],
      categorys:[]
    }
  },
  beforeRouteUpdate (to, from, next) {
    // 路由复用，但是参数改变触发
    console.log(1)
    this.loadById(to.params.categoryId)
    next()
  },
  created () {
    let categoryId = this.$route.params.categoryId;
    this.loadById(categoryId);
    this.$axios.get('/getimgcategory')
      .then((res)=>{
        this.categorys = res.data.message;
        this.categorys.unshift({
          id:0,title:'全部'
        })
      })
      .catch(err=>{
        console.log("失败")
      })
  },
  methods: {
    loadRouter (categoryId) {
      this.$router.push({
        name: 'photo.list',
        params: {
          categoryId
        }
      })
    },
    loadById (categoryId) {
      this.$axios.get('getimages/' + categoryId)
        .then((res) => {
          this.imgs = res.data.message;
          if (this.imgs.length ==0){
            this.$toast({
              message:"没有图片",
              iconClass:'iconfont icon-meiyoudingdan-01'
            })
          }
        })
    }
  }
}
</script>

<style scoped>
  .photo-header li{
    float: left;
    padding: 0 10px;
  }
  .photo-list li{
    position: relative;
    margin-bottom: 5px;
  }
.photo-list li img{
  width: 100%;
  height: 200px;
}
  .photo-list li p{
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    color: #fff;
  }
  image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
</style>

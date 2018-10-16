<template>
    <div>
      <nav-bar title="图片详情"></nav-bar>
      <div class="photo-title">
        <p>{{info.title}}</p>
        <span>发起日期: {{info.add_time | convertTime('YYYY-MM-DD')}}</span>
        <span>{{info.click}}次浏览</span>
        <span>分类：民生经济</span>
      </div>
      <ul class="clearfix">
        <vue-preview :slides="imgs"></vue-preview>
        <!--<li v-for="(img,index) in imgs" :key="index">-->
          <!--<img :src="img.src" alt="">-->
        <!--</li>-->
      </ul>
      <div class="photo-desc">
        <p v-html="info.content"></p>
      </div>
    <comment :cid="$route.query.id"></comment>
    </div>
</template>

<script>
export default {
  data () {
    return {
      info: [],
      imgs: []
    }
  },
  created () {
    let id = this.$route.query.id;
    this.$axios.get('getimageInfo/' + id)
      .then((res)=>{
        this.info = res.data.message[0];
      })
    this.$axios.get('getthumimages/' + id)
      .then(res=>{
        this.imgs = res.data.message;
        this.imgs.forEach(img=>{
          img.msrc = img.src;
          img.w = 600;
          img.h = 400;
        })
      })
      .catch(err=>console.log("失败"))
  }
}
</script>

<style scoped>
.photo-title p{
  font-size: 24px;
  font-weight: bold;
  color: #00aaff;
}
  .photo-title span{
    margin: 0 5px;
  }
  ul{
    padding: 10px;
  }
>>> ul figure{
  display: inline-block;
  margin: 10px 5px;
}
  >>> ul img{
    width: 100px;
  }
</style>

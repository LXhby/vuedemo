<template>
    <div>
      <nav-bar title="新闻列表"></nav-bar>
      <ul class="list">
        <li v-for="news in newsList" :key="news.id">
          <router-link :to="{name:'news.detail',query:{id:news.id}}">
            <img :src="news.img_url" alt="">
            <div class="box-list">
              <span>{{news.title}}</span>
              <div class="news-desc">
                <p>点击数：{{news.click}}</p>
                <p>发表时间：{{news.add_time | convertTime('YYYY-MM-DD')}}</p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "newsList",
  data () {
    return {
      newsList:[]
    }
  },
  created (){
      this.$axios.get("getnewslist")
        .then((res)=>{
          this.newsList = res.data.message;
        })
        .catch((err)=>{
          console.log(err)
        })
  }
}
</script>

<style scoped>
.list{
  width: 100%;
}
  .list li{
    height: 100px;
    padding: 10px 20px;
    border-bottom: 1px solid #ccc;
  }
  .list li img{
    float: left;
    width: 60px;
    margin-top: 30px;
  }
  .list li .box-list{
    float: right;
    width: 75%;
  }
  .list li span{
    font-size: 18px;
    margin-bottom: 10px;
  }
.list li .news-desc{
    color: #00aaff;
  }
</style>

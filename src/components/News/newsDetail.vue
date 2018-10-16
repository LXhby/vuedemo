<template>
    <div>
      <nav-bar title="新闻详情"></nav-bar>
      <div class="news-title">
        <p>{{newsDetail.title}}</p>
        <div class="newstop">
          <span>{{newsDetail.click}}次点击</span>
          <span>分类：民生经济</span>
          <span>添加时间：{{newsDetail.add_time | convertTime('YYYY年MM月DD日')}}</span>
        </div>
        <div class="news-content" v-html="newsDetail.content">新闻明细</div>
      </div>
    </div>
</template>

<script>
export default {
  name: "newsDetail",
  data () {
    return {
      newsDetail:[]
    }
  },
  created(){
    let id = this.$route.query.id;
    this.$axios.get('getnew/'+ id)
      .then((res)=>{
        console.log(res.data)
        this.newsDetail = res.data.message[0]
      })
  }
}
</script>

<style scoped>
  .news-title{
    margin-bottom: 70px;
  }
  .newstop{
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }
  .news-title p{
    font-size: 16px;
    font-weight: bold;
    color: #00aaff;
    text-align: center;
  }
.news-title span{
  margin: 0 5px;
}
  >>> .news-content img{
    width: 100%;
  }
</style>

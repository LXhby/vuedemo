<template>
    <div>
      <nav-bar title="商品展示"></nav-bar>
      <mt-loadmore :auto-fill="false" :bottom-method="loadBottom" ref="loadMore" :bottom-all-loaded ='isAllLoaded'>
        <ul>
          <li v-for="(item,index) in goodList" :key="item.id">
            <router-link :to='{name:'goods.detail',params:{id:'item.id'}}'>
              <img :src="item.img_url" alt="">
              <div class="title" v-text="item.title"></div>
              <div class="desc">
                <div class="sell">
                  <span>￥{{item.sell_price}}</span>
                  <span>￥{{item.market_price}}</span>
                </div>
                <div class="detail">
                  <div class="hot">
                    热卖中
                  </div>
                  <div class="count">
                    剩{{item.stock_quantity}}件
                  </div>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </mt-loadmore>
    </div>
</template>

<script>
export default {
  name: "GoodsList",
  data () {
    return {
      goodList:[],
      page:1，
      isAllLoaded:false//全部数据是否加载完毕
    }
  },
  created () {
    this.page = this.$route.query.id || '1';
    this.loadByPage(this.page)
  },
  methods: {
    loadByPage () {
      this.$axios.get('getgoods?pageindex=' + this.page)
        .then(res=>{
          this.goodList = res.data.message;
          this.page++;
        })
    },
    concatByPage(){//追加
      this.$axios.get('getgoods?pageindex=' + this.page)
        .then(res=>{
          if(res.data.message.length ===0){//判断是否还有数据
            // loadmore的禁止属性来控制
            this.$toast("没有更多数据了")
            this.isAllLoaded = true;
          }
          this.goodList = this.goodesList.concat(res.data.message);
          this.$refs.loadMore.onBottomLoaded()
          this.page++;
        })
    },
    loadBottom () {
      this.concatByPage(this.page)

      
    }
  }
}
</script>

<style scoped>
ul{
  overflow: hidden;
}
</style>

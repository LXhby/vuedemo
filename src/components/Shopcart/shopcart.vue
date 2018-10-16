<template>
    <div>
    <nav-bar title='购物车'></nav-bar>
        <div class="pay-detail">
            <ul>
                <li class='p-list' v-for ='goods in shopcart' :key='goods.id'>
                    <mt-switch v-model='goods.isselected'></mt-switch>
                    <img :src="goods.thumb_path" alt="">
                    <div class="pay-calc">
                        <span>￥{{goods.sell_price}}</span>
                        <span>-</span>
                        <span>{{}goods.num}</span>
                        <span>+</span>
                        <a href="">删除</a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="show-price">
            <div class="show-1">
              <p>总计</p>
              <span>已选择商品1件，总价</span>
            </div>
            <div class="show-2">
              <mt-button type='danger' size=''large>去结算</mt-button>
            </div>
        </div>
    </div>

</template>
<script>
import GoodsTools from "@/goodsTools"
  export default{
    data(){
      return{
          shopcart:[]
      }
    },
    created(){
      let goodsList = GoodsTools.getGoodsList();
      let ids = Object.keys(goodsList).join(",");
      this.$axios.get("goods/getshopcartlist/"+ids)
      .then(res=>{
        this.shopcart = res.data.message;
      })
      .catch(err=>console.log("失败"))
    }
  }
</script>
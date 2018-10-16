<template>
    <div>
        <nav-bar title='商品详情'></nav-bar>
        <div class="outer-swiper">
            <div class="swiper">
                <my-swipe url='getthumimages/87'></my-swipe>
            </div>
        </div>
        <div class="product-desc">
            <ul>
                <li>
                    <span class='product-desc-span'>{{goodInfo.title}}</span>
                </li>
                <li class="price-li">市场价
                    <s>￥{{goodInfo.market_price}}</s>销售价：<span>￥{{goodInfo.sell_price}}</span>
                </li>
                <li class="number-li">
                    购买数量:
                    <span @click='subatract'>-</span>
                    <span>{{picNum}}</span>
                    <span @click='add'>+</span>
                </li>
                <li>
                    <mt-buttom type='primary'>立即购买</mt-buttom>
                    <mt-buttom type='danger' @click='showBall'>加入购物车</mt-buttom>
                </li>
            </ul>
        </div>
        <transition name='ball'  v-on:after-enter="afterEnter">
            <div class="ball" v-if='isExist'></div>
        </transition>
        
        <div class="product-props">
            <ul>
                <li>商品参数</li>
                <li>商品货号：{{goodInfo.goods_no}}</li>
                <li>库存情况：{{goodInfo.stock_quantity}}</li>
                <li>上架时间：{{goodInfo.add_time |converttime('YYYY-MM-DD')}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
import EventBus from "@/components/EventBus.js"
import GoodsTools from "@/goodsTools.js";
    export default{
        data (){
            return {
                goodInfo:[],
                picNum:1;
                isExist:false,//小球移出
            }
        },
        created(){
            let imgid = this.$route.params.id;
            this.$axios.get('goods/getinfo/'+imgid)
            .then(res=>{
                this.goodInfo = res.data.message;
            })
        },
        methods:{
            showBall(){
                this.isExist=true;
            },
            afterEnter(){
                this.isExist = false;
                //通知App组件增加小球数量
                EventBus.$emit("addShopcart",this.picNum);

                //添加到本地存储
                GoodsTools.add({
                    id:this.goodInfo.id,
                    num:this.pickNum

                })
            },
            add(){
                if(this.goodInfo.stock_quantity<=this.picNum) return;
                this.picNum++;
            },
            substract(){
                this.picNum --;
                if(this.picNum>=1){
                    this.picNum = 1;
                }
            }
        }
    }
</script>
<style>
.ball-enter-active{
    animation:bounce-in 1s;
}
.ball-leave{//元素离开默认时1，所以会闪一下，设置为0
    opacity:0;
}
    @keyframes bounce-in{
        0%{
            transform:translate3d(0,0,0);
        }
        50%{
            transform:translate3d(140px,-50px,,0);
        }
        75%{
            transform:translate3d(140px,-50px,0);
        }
        100%{
            transform:translate3d(140px,300px,0);
        }
    }
</style>
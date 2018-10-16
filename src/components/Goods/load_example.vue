<template>
    <div>
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" @top-status-change="handleTopChange" ref="loadmore">
        <ul>
          <li v-for="item in list" :key="item">{{item}}</li>
        </ul>
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{'rotate' : topStatus === 'drop'}">↓</span>
          <span v-show="topStatus === 'loading'">loading...</span>
        </div>
      </mt-loadmore>
    </div>
</template>

<script>
export default {
  name: "GoodsList",
  data () {
    return {
      list:[1,2,3,4],
      topStatus: ''
    }
  },
  methods: {
    handleTopChange(status){
      this.topStatus = status;
    },
    loadTop () {
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom(){
     // this.$refs.loadmore.onBottomLoaded();
    }
  }
}
</script>

<style scoped>

</style>

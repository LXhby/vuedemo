<template>
    <div class="comment-box">
      <ul class="title">
        <li>
          <div class="clearfix">
            <span class="fl">提交评论</span>
            <span class="fr"><a href="">返回</a></span>
          </div>
        </li>
        <li class="txt">
          <textarea v-model="newComment"></textarea>
        </li>
        <li>
          <mt-button size="large" type="primary" @click="sendMessage">发表评论</mt-button>
        </li>
        <li class="photo-comment">
          <div class="clearfix">
            <span class="fl">评论列表</span>
            <span class="fr">44条评论</span>
          </div>
        </li>
      </ul>
      <ul class="comment-list">
        <li v-for="(msgs,index) in msg" :key="index">
          {{msgs.user_name}}:{{msgs.content}} {{msgs.add_time | relativeTime}}
        </li>
      </ul>
      <mt-button type="danger" size="large" @click="loadMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
  name: 'comment',
  props: ['cid'], //评论需要的id
  data () {
    return {
      msg: [],
      page:1,
      newComment:""
    }
  },
  created () {
    this.page = this.$route.query.page || '1';
    this.firstLoad()
  },
  methods: {
    firstLoad () {
      this.$axios.get(`getcomments/${this.cid}?pageindex=${this.page}`)
        .then((res)=>{
          if (res.data.message.length==0){
            this.$toast("没有数据了")
          }
          this.msg = res.data.message;
          this.page ++;
        })
        .catch(err=>console.log("评论失败"))
    },
    loadMore(){
      this.$axios.get(`getcomments/${this.cid}?pageindex=${this.page}`)
        .then((res)=>{
          if (res.data.message.length==0){
            this.$toast("没有数据了")
          }
          this.msg = this.msg.concat(res.data.message);
          this.page ++;
        })
        .catch(err=>console.log("评论失败"))
    },
    sendMessage(){
      if (this.newComment.trim() ===''){
        return this.$toast("评论信息不能为空")
      }
      this.$axios.post(`postcomment/` + this.cid,`content=` + this.newComment)
        .then((res)=>{
          this.newComment = "";
          // 加载第一页的数据
          this.page = 1;
          this.firstLoad()
        })
        .catch(err=>console.log("失败"))
    }
  }
}
</script>

<style scoped>
.comment-box{
  margin-top: 20px;
    padding: 0 10px;
}
  .txt textarea{
    box-sizing: border-box;
    width: 100%;
    height: 30px;
  }
</style>

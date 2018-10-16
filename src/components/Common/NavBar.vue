<template>
    <div class="bar-header">
      <p @click="goback">&nbsp<</p>
      <h1 class="page-title">{{title}}</h1>
    </div>
</template>

<script>
export default {
  name: 'nav-bar',
  data () {
    return {

    }
  },
  props:['title'],
  methods: {
    goback(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.bar-header{
  width: 100%;
  height: 30px;
  background-color: skyblue;
}
.bar-header p{
  float: left;
  width: 50px;
  height: 100%;
  margin: 0;
  padding: 0;
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
}
.bar-header h1{
  font-size: 18px;
  text-align: center;
  line-height: 30px;
}
</style>

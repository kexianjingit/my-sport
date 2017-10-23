<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item class="slide1"><img src="../assets/images/banner_cg.png" class="img"></mt-swipe-item>
    <mt-swipe-item class="slide2"><img src="../assets/images/banner_cg.png" class="img"></mt-swipe-item>
    <mt-swipe-item class="slide3"><img src="../assets/images/banner_cg.png" class="img"></mt-swipe-item>
  </mt-swipe>
</template>
<script>
	export default {
		mounted(){

		},
		methods:{

		}
	}
</script>
<style scoped>
  .img {
    width: 100%;
  }
  .mint-swipe {
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }

  .mint-swipe-item {
    line-height: 200px;
  }

  .slide1 {
    background-color: #0089dc;
    color: #fff;
  }

  .slide2 {
    background-color: #ffd705;
    color: #000;
  }

  .slide3 {
    background-color: #ff2d4b;
    color: #fff;
  }
</style>

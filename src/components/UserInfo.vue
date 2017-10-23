<template>
  <div id="_centent">
    <header>
      <div class="rt-bk">
        <a href="#" class="back"><i class="fa fa-chevron-left"></i> 返回</a>
      </div>
      <div class="top-name"><p>WEICOME GYM</p></div>
      <div class="rt-bk_right" >
        <p>…</p>
      </div>
    </header>
    <div class="payment_qr">
      <div class="portrait">
        <img src="../assets/images/head-img.png" class="portrait_img">
      </div>
      <p>angelababy</p>
    </div>

    <div class="main_box">
      <div class="personal_cont">
        <ul>
          <li class="payment_li"><a href="#"><span class="left"><img src="../assets/images/pc_hyk.png" class="pc_img"> 我的会员卡</span><i class="fa fa-chevron-right right"></i> </a></li>
          <li class="payment_li"><a href="#"><span class="left"><img src="../assets/images/pc_qb.png" class="pc_img"> 我的钱包</span><i class="fa fa-chevron-right right"></i></a></li>
        </ul>
      </div>
      <div class="personal_cont">
        <ul>
          <li class="payment_li"><a href="#"><span class="left"><img src="../assets/images/pc_yy.png" class="pc_img"> 我的预约</span><i class="fa fa-chevron-right right"></i> </a></li>
          <li class="payment_li"><a href="#"><span class="left"><img src="../assets/images/pc_ma.png" class="pc_img"> 我的二维码</span><i class="fa fa-chevron-right right"></i></a></li>
          <li class="payment_li"><a href="#"><span class="left"><img src="../assets/images/pc_sj.png" class="pc_img"> 体测数据</span><i class="fa fa-chevron-right right"></i></a></li>
          <li class="payment_li"><a href="#"><span class="left"><img src="../assets/images/pc_yhq.png" class="pc_img"> 优惠券</span><i class="fa fa-chevron-right right"></i> </a></li>
          <li class="payment_li"><a href="#"><span class="left"><img src="../assets/images/pc_gr.png" class="pc_img"> 个人信息</span><i class="fa fa-chevron-right right"></i></a></li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
	export default{
		 watch:{
		 	$route(to){
		 		if(to.path=='/user-info'){
		 			this.$store.dispatch('SHOW_HEAD_FAIL');
		 		}
		 	}
		 }
	}
</script>
<style scoped>
  #_centent{ padding-bottom:1rem;;}
  header{ position:relative; width: 7.5rem; height: 0.84rem;  background-color: #696969;color: #fff;}
  .rt-bk{ position:absolute; top:0.27rem; left:0.3rem; float:left;}
  .rt-bk_right {
    position:absolute; top:0.15rem; right:0.3rem; float:right;
  }
  .back {float: left;margin-right: 0.15rem;}
  .rt-bk_right p{ float:left; font-size:0.4rem;}
  .rt-bk p{ float:left; font-size:0.24rem;}
  .top-name{ text-align:center; font-size:0.34rem; line-height:0.84rem;}
  .head-img img{ width:1.43rem; height:1.43rem;}
  .head-dsb p{ font-size:0.28rem; color:#fff;}
  .payment_qr {
    position: relative;padding-top: 0.8rem;box-sizing: border-box;
    width: 7.5rem;height: 3.4rem;background-color: #2a2a2a;text-align: center;color: #fff;background: url("../assets/images/personal_bn.png") no-repeat center;background-size: contain;
  }
  .portrait {
    width: 1.5rem;height: 1.5rem;background-color: #fff;margin: 0 auto;border-radius: 50%;margin-bottom: 0.1rem;
  }
  .portrait_img {
    width: 1.5rem;height: 1.5rem;
  }
  .main_box {
    height: auto;width: 7.5rem; background: #1b1b1b;padding: 0.2rem 0.25rem;color: #e9e9e9;box-sizing: border-box;
  }
  .personal_cont {
    height: auto;background: #2a2a2a;border-radius: 0.1rem;position: relative;margin-bottom: 0.2rem;
  }
  .payment_li {
    clear: both;height: 0.8rem;border-bottom: 0.01rem solid #1b1b1b;
  }
  .payment_li a {
    height: 0.8rem;line-height: 0.8rem;padding: 0 0.4rem;display: block;
  }
  .payment_li .left {
    float: left;
  }
  .payment_li .left .pc_img {
    vertical-align: sub;width: 0.4rem;
  }
  .payment_li .right {
    float: right;line-height: 0.8rem;
  }
  .payment_qr p {
    font-size: 0.28rem;
  }
</style>

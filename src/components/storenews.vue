<template>
  <div style="padding-bottom: 2rem;">
    <header>
      <div class="rt-bk">
        <a href="#" class="back" onclick="window.history.go(-1)"><i class="fa fa-chevron-left"></i> 返回</a>
      </div>
      <div class="top-name"><p>{{articleData.storename}}</p></div>
      <div class="rt-bk_right" >
        <p>…</p>
      </div>
    </header>
    <div class="head">
      <Slider></Slider>
    </div>
    <div class="main_box">
      <div class="pepole_conten">
        <h5 class="pepole_name">{{articleData.storename}}<span class="fl_right"><img src="../assets/images/tel.png" class="img_height2"> {{articleData.tel}}</span></h5>
        <p class="pepole_text1"><span><img src="../assets/images/dl.png" class="img_height"> </span> {{articleData.adress}} <a class="dt_color" href="#"> 查看地图＞</a></p>
        <p class="pepole_text2">营业时间：06:00-24:00</p>
      </div>
      <div class="cg_conten">
        <h5 class="cg_name">场馆设施：</h5>
        <ul class="cg_ul">
          <li v-for="recom in articleData.recommend">{{recom.ss}}</li>
        </ul>
      </div>
      <div class="pepole_conten">
        <h5 class="pepole_name">场馆活动：</h5>
        <p class="pepole_text1">{{articleData.hd}}</p>
      </div>
    </div>

    <div class="footer">
      <div class="mune right_boder">
        <img src="../assets/images/jl01.png">
        <p>预约私教</p>
      </div>
      <div class="mune">
        <img src="../assets/images/tk01.png">
        <p class="color">预约团课</p>
      </div>
    </div>
    </div>
</template>
<script>
  import Slider from './Slider.vue'
	export default{
		mounted(){
			this.fetchData(this.$route.params.id);

			//发送 隐藏footer的 action
			if(this.$route.path.indexOf('storenews')>0){
				this.$store.dispatch('hideFooter');
			}
		},
		data(){
			return {
				articleData:{

        }
			}
		},
  components:{
			Slider
  },
		watch:{
			$route(to){
				var reg=/storenews\/\d+/;
				if(reg.test(to.path)){
					var articleId=this.$route.params.id || 0;
					this.fetchData(articleId);
				}
			}
		},
		methods:{
			fetchData(id){
				var _this=this;
				this.$http.get('api/goods').then(function(res){
					_this.articleData=res.data.data[id];
				}).catch(function(err){
          alert('数据接收失败');
					console.log('会有店页面:',err);
				})
			}
		}
	}
</script>
<style scoped>
  header{ position:relative; width: 7.5rem; height: 0.84rem;  background-color: #696969;color: #fff;}
  .rt-bk{ position:absolute; top:0.27rem; left:0.3rem; float:left;}
  .rt-bk_right {
    position:absolute; top:0.15rem; right:0.3rem; float:right;
  }
  .back {float: left;margin-right: 0.15rem;}
  .rt-bk_right p{ float:left; font-size:0.4rem;}
  .rt-bk p{ float:left; font-size:0.24rem;}
  .top-name{ text-align:center; font-size:0.34rem; line-height:0.84rem;}
  .head{ position:relative; height: 3.43rem;width: 7.5rem;box-sizing: border-box;}
  .head-img img{ width:1.43rem; height:1.43rem;}
  .head-dsb p{ font-size:0.28rem; color:#fff;}

  .footer{ position:fixed;bottom:0;left:0; margin-top:0.2rem; width:7.5rem; height:1.2rem; background: #6a6a6a; font-size:0.24rem;}
  .footer .mune{ float:left; width:3.1rem !important; height:1.2rem !important; text-align:center;padding-top:0.2rem;box-sizing: border-box; }
  .footer .mune p{ font-size:0.22rem; color:#fff;}
  .foo .mune img{ width:0.5rem; height:0.5rem;}
  .right_boder {
    border-right: 0.01rem solid #1b1b1b;
  }

  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 0.22rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .dt_color {
    color: #7d7d7d !important;
    margin-left: 0.2rem;

  }
  .img{
    width: 100%;
  }
  .img_height {
    height: 0.2rem;
  }
  .img_height2 {
    height: 0.3rem;vertical-align: middle;
  }
  .main_box {
    height: auto;width: 7.5rem; background: #1b1b1b;padding: 0.2rem 0.25rem;color: #e9e9e9;box-sizing: border-box;
  }
  .pepole_conten{
    background: #2a2a2a;border-radius: 0.1rem;padding: 0.2rem 0;position: relative;margin-bottom: 0.2rem;color: #c7c7c7;overflow: hidden;
  }
  .pepole_conten .pepole_name {
    font-size:0.3rem;margin-bottom: 0.2rem;border-bottom: 0.01rem solid #1b1b1b;padding: 0 0.3rem 0.1rem 0.3rem;
  }
  .fl_right {
    float: right;
  }
  .pepole_conten .pepole_text1 {
    font-size: 0.2rem;margin-bottom: 0.1rem;padding: 0 0.3rem;
    word-wrap:break-word;
  }
  .pepole_conten .pepole_text2 {
    font-size: 0.2rem;padding: 0 0.3rem;
    word-wrap:break-word;
  }
  .pepole_conten .img_cont {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: 0.2rem;
    right: 0.2rem;
    overflow: hidden;
    text-align: center;
  }
  .pepole_conten .img_cont img {
    width: 1.5rem;height: 1.5rem;
  }

  .cg_conten{
    background: #2a2a2a;border-radius: 0.1rem;padding: 0.2rem 0;margin-bottom: 0.2rem;color: #c7c7c7;overflow: hidden;
  }
  .cg_conten .cg_name {
    font-size:0.3rem;margin-bottom: 0.2rem;border-bottom: 0.01rem solid #1b1b1b;padding: 0 0.3rem 0.1rem 0.3rem;
  }
  .cg_ul {
    padding: 0 0.3rem;
    height: 0.9rem;
  }
  .cg_ul li{
    float: left;
    width: 1.4rem;
    height: 0.4rem;
    margin-right: 0.2rem;
    margin-bottom: 0.1rem;
  }


</style>

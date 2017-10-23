<template>
  <div id="_centent">
    <header>
      <div class="rt-bk">
        <p></p>
      </div>
      <div class="top-name"><p>WECOME GYM</p></div>
      <div class="rt-bk_right" >
        <p>…</p>
      </div>
    </header>
    <div class="head">
      <div class="swiper-container swiper1">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in slides">
            <img :src="item.src" class="img">
          </div>
        </div>
        <div class="swiper-pagination abs"></div>
        <div class="select_box">
          <div class="distpicker city_cont">
            <select>
              <option>全部店</option>
              <option>光谷店</option>
              <option>旗舰店</option>
            </select>
          </div>
          <div class="lx">
            <select>
              <option>武汉全城</option>
              <option>武昌区</option>
              <option>江岸区</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="main_box">
      <ul>
        <li class="store_li" v-for="(store,index) in storeList">
          <router-link :to="'/storenews/'+store.id">
            <img :src="store.src" class="ht">
            <div class="li_cont">
                <h3>{{index+1}}.{{store.title}} <i class="fa fa-map-marker adr"></i> <span class="siz"><i class="fa fa-angle-left"></i> {{store.k}}</span></h3>
                <p>{{store.address}}</p>
            </div>
            <i class="fa fa-star-o star"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="jg"></div>
  </div>
</template>
<script>
	export default {
		data(){
			return {
        slides: [
          {
            src: require('../assets/images/banner2.png'),
            href: 'detail/analysis'
          },
          {
            src: require('../assets/images/banner2.png'),
            href: 'detail/count'
          },
          {
            src: require('../assets/images/banner2.png'),
            href: 'detail/count'
          }
        ],
        storeList:[
          {
            src: require('../assets/images/bg_img1.png'),
            title: '光谷会员店',
            id:'1',
            k: '1km',
            address:'武汉市洪山区关山大道55号现代光谷世贸中心',
          },
          {
            src: require('../assets/images/bg_img2.png'),
            title: '关山旗舰店',
            id:'2',
            k: '1km',
            address:'武汉市洪山区关山大道55号现代光谷世贸中心',
          },
          {
            src: require('../assets/images/bg_img3.png'),
            title: '武昌店',
            id:'3',
            k: '1km',
            address:'武汉市洪山区关山大道55号现代光谷世贸中心',
          },
          {
            src: require('../assets/images/bg_img2.png'),
            title: '汉口店',
            id:'4',
            k: '1km',
            address:'武汉市洪山区关山大道55号现代光谷世贸中心',
          },
          {
            src: require('../assets/images/bg_img3.png'),
            title: '光谷会员店',
            id:'5',
            k: '1km',
            address:'武汉市洪山区关山大道55号现代光谷世贸中心',
          }
        ]
			}
		},
		mounted(){
      this.fnSlider();
		},
		methods:{
      fnSlider(){
        $(function (){
          var swiper = new Swiper('.swiper1', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false
          });
        });
      }
		}
	}

</script>
<style scoped>
	@import '../assets/css/index.css';
  #_centent{ }
  header{ position:relative; width: 7.5rem; height: 0.84rem;  background-color: #696969;color: #fff;}
  .rt-bk{ position:absolute; top:0.27rem; left:0.3rem; float:left;}
  .rt-bk_right {
    position:absolute; top:0.15rem; right:0.3rem; float:right;
  }
  .rt-bk_right p{ float:left; font-size:0.4rem;}
  .rt-bk p{ float:left; font-size:0.24rem;}
  .top-name{ text-align:center; font-size:0.34rem; line-height:0.84rem;}
  .head{ position:relative; height: 3.43rem;width: 7.5rem;box-sizing: border-box;}
  .jg{ margin-bottom:1rem;}
  footer{ position:fixed;bottom:0;left:0; margin-top:0.2rem; width:7.5rem; height:0.99rem; background: #6a6a6a; padding-top:0.2rem; font-size:0.24rem;}
  .mune p{ font-size:0.22rem; color:#fff;}
  .mune img{ width:0.5rem; height:0.5rem;}
  select{outline: none;border: none;background-color:transparent;color: #fff;font-size: 0.24rem;
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    background: url("../assets/images/sj.png") no-repeat scroll right center;
    background-size: 0.2rem 0.2rem;
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
  .img{
    width: 100%;
  }
  .main_box {
    height: auto;width: 7.5rem;padding: 0.2rem 0.3rem; background: #1b1b1b;color: #e9e9e9;box-sizing: border-box;
  }
  .select_box {
    width: 7.5rem;height: 0.8rem;text-align: center;line-height: 0.8rem;position: absolute;
    z-index: 1000;bottom: 0;background-color: #1b1b1b;background-color: rgba(0,0,0,0.5);
  }
  .city_cont {
    width: 3.5rem;float: left;box-sizing: border-box;color: #fff;
  }
  .city_cont select {
    width: 1.1rem;
  }
  .lx {
    width: 3.5rem;float: right;color: #fff;
  }
  .lx select{
    width: 1.3rem;
  }
  .abs {
    position: absolute;top: 0.2rem;
  }
  .store_li {
    height: 2.5rem;overflow:hidden;margin-bottom: 0.2rem;position: relative;
    border-radius: 0.1rem;
  }
  .store_li a {
    display: block;
  }
  .li_cont {
    width: 100%; height: 1rem;background-color: #1b1b1b;background-color: rgba(0,0,0,0.7);
    position: absolute;bottom: 0;left: 0;padding: 0.1rem 0.4rem;box-sizing: border-box;
  }
  .li_cont h3 {
    font-size: 0.3rem;
  }
  .li_cont p {
    font-size: 0.2rem;
  }
  .adr {
    margin-left: 0.3rem;
  }
  .siz {
    font-size: 0.22rem;
  }
  .star {
    position: absolute;right: 0.4rem;bottom: 0.3rem;
    font-size: 0.4rem !important;
  }
  .ht {
    height: 2.5rem;
  }

</style>

<template>
  <div>
    <header>
      <div class="rt-bk">
        <a href="#" class="back" onclick="window.history.go(-1)"><i class="fa fa-chevron-left"></i> 返回</a>
      </div>
      <div class="top-name"><p>WECOME GYM</p></div>
      <div class="rt-bk_right" >
        <p>…</p>
      </div>
    </header>

  <div id="_centent">
    <div class="main_box" id="wrapper">
      <div class="tex_box scroller">
        <div class="head">
          <div class="swiper-container swiper1">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in slides">
                <img :src="item.src" class="img">
              </div>
            </div>
            <div class="swiper-pagination abs"></div>
            <p class="gz">
              <input type="text" name="coach" placeholder="输入教练课程" class="coach_input">
              <select class="selt1">
                <option>筛选</option>
                <option>价格</option>
              </select>

              <select class="selt3">
                <option>排序方式</option>
                <option>2</option>
              </select>
            </p>
          </div>
        </div>
        <ul>
          <li class="comment_li" v-for="(item,index) in arrList">
            <router-link :to="'/storenews/'+item.id">
              <div class="comment_li_lef">
                <div class="lef_round">
                  <img :src="item.src">
                </div>
              </div>
              <div class="comment_li_right">
                <h3 class="comment_right_tit" >{{item.name}} <span><img src="../assets/images/man.png" class="img_height_3"></span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></h3>
                <p class="comment_right_text">带课量：{{item.num}}</p>
                <p class="comment_right_text">{{item.address}}</p>
              </div>
              <span class="price">¥ {{item.price}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="jg"></div>
  </div>
  </div>
</template>
<script>
	export default {
    name: 'page-search',
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
				arrList:[
          {
            src: require('../assets/images/pepole1.jpg'),
            name: '老王',
            id:'1',
            num:'3',
            price: '200/h',
            address:'国家体育局国家认证…',
          },
          {
            src: require('../assets/images/pepole2.jpg'),
            name: '哲明',
            id:'2',
            num:'65',
            price: '250/h',
            address:'国家体育局国家认证…',
          },
          {
            src: require('../assets/images/pepole3.jpg'),
            name: '黎明',
            id:'3',
            num:'300',
            price: '200/h',
            address:'国家体育局国家认证…',
          },
          {
            src: require('../assets/images/pepole1.jpg'),
            name: '老王',
            id:'4',
            num:'3',
            price: '200/h',
            address:'国家体育局国家认证…',
          },
          {
            src: require('../assets/images/pepole2.jpg'),
            name: '哲明',
            id:'5',
            num:'65',
            price: '250/h',
            address:'国家体育局国家认证…',
          },
          {
            src: require('../assets/images/pepole3.jpg'),
            name: '黎明',
            id:'6',
            num:'300',
            price: '200/h',
            address:'国家体育局国家认证…',
          },
          {
            src: require('../assets/images/pepole1.jpg'),
            name: '老王',
            id:'7',
            num:'3',
            price: '200/h',
            address:'国家体育局国家认证…',
          },
          {
            src: require('../assets/images/pepole2.jpg'),
            name: '哲明',
            id:'8',
            num:'65',
            price: '250/h',
            address:'国家体育局国家认证…',
          },
          {
            src: require('../assets/images/pepole3.jpg'),
            name: '黎明',
            id:'9',
            num:'300',
            price: '200/h',
            address:'国家体育局国家认证…',
          }
        ]
			}
		},
  mounted(){
    this.fnSlider();
  },
  computed: {
    filterResult() {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
    }
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
  #_centent{ padding-bottom:0.3rem;
  }
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
  .head .gz {
    position: absolute;bottom: 0.1rem;font-size: 0.2rem;color: #e9e9e9;z-index: 1000;
    padding: 0.1rem 0.3rem;
  }
  .jg{ margin-bottom:0.8rem;}
  select{outline: none;border: none;background-color:transparent;
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
    height: auto;background: #1b1b1b;color: #e9e9e9;
    width: 7.5rem;
  }
  .coach_input {
    border: none;
    width: 2.2rem;
    height: 0.5rem;
    background-image: url(../assets/images/44.png);
    background-position: 95% 45%;
    background-repeat: no-repeat;
    background-size: 0.3rem 0.3rem;
    padding: 0.05rem 0.4rem;
    border-radius: 0.6rem;
    opacity: 0.5;
  }

  .tex_box {
    padding: 0.3rem 0;clear: both;
  }
  .comment_li {
    height: 1.2rem; padding: 0.3rem 0.3rem;border-bottom: 0.01rem solid #666;position: relative;
  }
  .comment_li_lef {
    width: 1rem;height:1rem;float: left;margin-right: 0.3rem;
  }
  .lef_round {
    width: 1rem;height: 1rem;
    border-radius: 50%;
    overflow: hidden;
  }
  .lef_round img {
    width: 1.1rem;
  }
  .comment_li_right {
    width: 3rem;float: left;
  }
  .comment_right_tit {
    font-size: 0.3rem;color: #e9e9e9;
  }
  .img_height_3 {
    height: 0.3rem;margin-right: 0.1rem;
  }
  .comment_right_text {
    font-size: 0.2rem;margin-top: 0.1rem;color: #e9e9e9;width: 3rem;
    height: 0.3rem; overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .price {
    position: absolute;top: 0.6rem;right: 0.5rem;font-size: 0.4rem;
  }
  .abs {
    position: absolute;top: -0.4rem;
  }
  .selt1{
    margin: 0 0.2rem;font-size: 0.24rem;padding: 0.05rem 0.1rem;color: #fff;width: 1rem;
  }
  .selt3{
    margin: 0 0.2rem;font-size: 0.24rem;padding: 0.05rem 0.1rem;color: #fff;width: 1.5rem;
  }
  .page-search {
    height: 100%;
  }
</style>

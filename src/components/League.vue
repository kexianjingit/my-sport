<template>
  <div id="_centent">
    <header>
      <div class="rt-bk">
        <a href="#" class="back"><i class="fa fa-chevron-left"></i> 返回</a>
      </div>
      <div class="top-name"><p>WECOME GYM</p></div>
      <div class="rt-bk_right" >
        <p>…</p>
      </div>
    </header>

    <div class="head">
      <mt-swipe :auto="4000">
        <mt-swipe-item class="slide1" v-for="item in slides">
          <img :src="item.src" class="img">
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="main_box">
      <div class="shop_cont">
        <div class="select_box">
          <div class="distpicker city_cont" data-toggle="distpicker">
            <select id="province7" class="select_city1">
              <option>武汉市</option>
              <option>黄石市</option>
              <option>宜昌市</option>
            </select>
            <select id="city7" class="select_city2">
              <option>洪山区</option>
              <option>武昌区</option>
              <option>青山区</option>
            </select>
          </div>
          <div class="lx">
            <select class="select_lx">
              <option>课程类型</option>
              <option>拳击</option>
              <option>体能</option>
            </select>
          </div>
        </div>
        <div class="date_cont">
          <div class="swiper-container swiper2">
            <div class="swiper-wrapper detail_con_tit">
              <span class="swiper-slide w det_tit_curspan">今天<br>6.16</span>
              <span class="swiper-slide w" >星期日<br>6.17</span>
              <span class="swiper-slide w" >星期一<br>6.18</span>
              <span class="swiper-slide w" >星期二<br>6.19</span>
              <span class="swiper-slide w" >星期三<br>6.20</span>
              <span class="swiper-slide w" >星期四<br>6.21</span>
              <span class="swiper-slide w" >星期五<br>6.22</span>
            </div>
          </div>
        </div>

        <div class="date_main">
          <div class="con_box_1">
            <h3 class="h3_tit">光谷会员店</h3>
            <ul>
              <li class="comment_li">
                <a href="#">
                  <div class="comment_li_lef">
                    <div class="lef_round">
                      <img src="../assets/images/pepole3.jpg">
                    </div>
                  </div>
                  <div class="comment_li_right">
                    <h3 class="comment_right_tit" >搏击体适能 </h3>
                    <p class="comment_right_text">搏击/燃脂/体能</p>
                    <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                  </div>
                  <span class="price">4/50</span>
                </a>
              </li>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole2.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >脂肪终结者 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">34/50</span>
              </li>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole1.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >搏击体适能 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">已满</span>
              </li>
            </ul>
            <h3 class="h3_tit">梁山头会员店</h3>
            <ul>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole3.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >搏击体适能 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">4/50</span>
              </li>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole2.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >脂肪终结者 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">已满</span>
              </li>
            </ul>
          </div>
          <div class="con_box_1 none">
            <h3 class="h3_tit">光谷会员店</h3>
            <ul>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole1.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >搏击体适能 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">4/50</span>
              </li>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole1.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >脂肪终结者 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">34/50</span>
              </li>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole1.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >搏击体适能 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">已满</span>
              </li>
            </ul>
            <h3 class="h3_tit">梁山头会员店</h3>
            <ul>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole1.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >搏击体适能 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">4/50</span>
              </li>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole2.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >脂肪终结者 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">已满</span>
              </li>
            </ul>
          </div>
          <div class="con_box_1 none">
            <h3 class="h3_tit">光谷会员店</h3>
            <ul>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole3.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >搏击体适能 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">4/50</span>
              </li>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole3.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >脂肪终结者 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">34/50</span>
              </li>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole3.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >搏击体适能 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">已满</span>
              </li>
            </ul>
            <h3 class="h3_tit">梁山头会员店</h3>
            <ul>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole1.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >搏击体适能 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">4/50</span>
              </li>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole1.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >脂肪终结者 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">已满</span>
              </li>
            </ul>
          </div>
          <div class="con_box_1 none">
            <h3 class="h3_tit">光谷会员店</h3>
            <ul>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole1.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >搏击体适能 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">4/50</span>
              </li>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole1.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >脂肪终结者 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">34/50</span>
              </li>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole1.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >搏击体适能 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">已满</span>
              </li>
            </ul>
            <h3 class="h3_tit">梁山头会员店</h3>
            <ul>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole3.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >搏击体适能 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">4/50</span>
              </li>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole2.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >脂肪终结者 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">已满</span>
              </li>
            </ul>
          </div>
          <div class="con_box_1 none">
            <h3 class="h3_tit">光谷会员店</h3>
            <ul>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole3.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >搏击体适能 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">4/50</span>
              </li>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole3.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >脂肪终结者 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">34/50</span>
              </li>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole3.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >搏击体适能 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">已满</span>
              </li>
            </ul>
            <h3 class="h3_tit">梁山头会员店</h3>
            <ul>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole1.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >搏击体适能 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">4/50</span>
              </li>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole2.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >脂肪终结者 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">已满</span>
              </li>
            </ul>
          </div>
          <div class="con_box_1 none">
            <h3 class="h3_tit">光谷会员店</h3>
            <ul>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole2.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >搏击体适能 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">4/50</span>
              </li>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole2.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >脂肪终结者 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">34/50</span>
              </li>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole2.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >搏击体适能 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">已满</span>
              </li>
            </ul>
            <h3 class="h3_tit">梁山头会员店</h3>
            <ul>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole3.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >搏击体适能 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">4/50</span>
              </li>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole3.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >脂肪终结者 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">已满</span>
              </li>
            </ul>
          </div>
          <div class="con_box_1 none">
            <h3 class="h3_tit">光谷会员店</h3>
            <ul>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole1.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >搏击体适能 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">4/50</span>
              </li>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole1.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >脂肪终结者 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">34/50</span>
              </li>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole3.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >搏击体适能 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">已满</span>
              </li>
            </ul>
            <h3 class="h3_tit">梁山头会员店</h3>
            <ul>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole3.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >搏击体适能 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">4/50</span>
              </li>
              <li class="comment_li">
                <div class="comment_li_lef">
                  <div class="lef_round">
                    <img src="../assets/images/pepole2.jpg">
                  </div>
                </div>
                <div class="comment_li_right">
                  <h3 class="comment_right_tit" >脂肪终结者 </h3>
                  <p class="comment_right_text">搏击/燃脂/体能</p>
                  <p class="comment_right_text">15:00-16:00 <span>¥ 99/h</span></p>
                </div>
                <span class="price">已满</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
				arrList:[]
			}
		},
		mounted(){
    this.fnSlider();
		},
		methods:{
      fnSlider(){
        $(function (){
          var swiper2 = new Swiper('.swiper2', {
            slidesPerView: 5,
            paginationClickable: true,
            freeMode: true
          });
        });

        jQuery(function () {
          function qiehuan(obj, objcur, boxone) {
            $(obj).click(function () {
              $(this).addClass(objcur).siblings().removeClass(objcur);
              var index = $(this).index();
              $(boxone).eq(index).show().siblings().hide();
            });
          }
          qiehuan(".detail_con_tit span", "det_tit_curspan", ".con_box_1");
        });
      }
		}
	}
</script>
<style scoped>
  #_centent{ }
  header{ position:relative; width: 7.5rem; height: 0.84rem;  background-color: #696969;color: #fff;}
  .rt-bk{ position:absolute; top:0.27rem; left:0.3rem; float:left;}
  .rt-bk_right {
    position:absolute; top:0.15rem; right:0.3rem; float:right;
  }
  select{outline: none;border: none;background-color: #2a2a2a;border-radius: 0.1rem;font-size: 0.24rem;color: #fff;
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    background: url("../assets/images/sj.png") no-repeat scroll right center;
    background-size: 0.15rem 0.15rem;
  }
  .back {float: left;margin-right: 0.15rem;}
  .rt-bk_right p{ float:left; font-size:0.4rem;}
  .rt-bk p{ float:left; font-size:0.24rem;}
  .top-name{ text-align:center; font-size:0.34rem; line-height:0.84rem;}
  .head{ position:relative; height: 3.43rem;width: 7.5rem;box-sizing: border-box;}
  .head-img img{ width:1.43rem; height:1.43rem;}
  .head-dsb p{ font-size:0.28rem; color:#fff;}

  .jg{ margin-bottom:1rem;}

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

  .none{
    display: none;
  }
  .det_tit_curspan {
    color: #000;
    background-color: #fff;
    width: 1rem !important;
    height: 1rem !important;
    border-radius: 50%;
  }
  .w {
    width: 1rem !important;
    height: 1rem !important;
    margin-right: 0.45rem;
  }
  .img{
    width: 100%;
  }
  .main_box {
    height: auto;width: 7.5rem; background: #1b1b1b;color: #e9e9e9;box-sizing: border-box;
  }
  .shop_cont {
    height: auto;background: #2a2a2a;border-radius: 0.1rem;position: relative;margin-bottom: 0.2rem;
  }
  .select_box {
    width: 7.5rem;height: 1rem;text-align: center;line-height: 1rem;
  }
  .city_cont {
    width: 4rem;float: left;box-sizing: border-box;padding-left: 0.6rem;padding-top: 0.3rem;
  }
  .select_city1 {
    float: left;width: 1.1rem;margin-right: 0.3rem;
  }
  .select_city2 {
    float: left;width: 1.1rem;
  }
  .lx {
    width: 3rem;float: right;
  }
  .select_lx {
    width: 1.3rem;
  }
  .shop_cont .date_cont {
    height: 1rem;background-color: #3a3a3a;padding: 0 0.25rem;
  }
  .shop_cont .date_cont .detail_con_tit {
    color: #e9e9e9;
  }
  .h3_tit {
    padding: 0.2rem 0.3rem;background-color: #2a2a2a;color: #fff;font-size: 0.24rem;
  }
  .shop_cont .date_main {
    color: #999999;background-color: #3a3a3a;
  }

  .comment_li {
    height: 1.2rem; padding: 0.3rem 0.4rem;border-bottom: 0.01rem solid #2a2a2a;position: relative;
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
  .comment_right_text {
    font-size: 0.2rem;margin-top: 0.1rem;color: #e9e9e9;width: 3rem;
    height: 0.3rem; overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .price {
    position: absolute;top: 0.6rem;right: 0.5rem;font-size: 0.24rem;border: 0.01rem solid #fff;width: 1rem;height: 0.5rem;text-align: center;line-height: 0.5rem;border-radius: 0.1rem;
  }

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

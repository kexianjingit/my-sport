// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
import Loading from './components/loading/index.js'
import stores from './store/store'
import routes from './routeConfig.js'
//import VueResource from 'vue-resource'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//import filters from './filters/index.js'
//
//Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

Vue.config.productionTip = false
//Vue.use(Swiper);
//Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Loading);
Vue.use(MintUI)

require('./assets/css/base.css');
require('./assets/css/font-style.css');
require('./assets/js/control.js');

const router=new VueRouter({
    mode: 'history', //切换路径模式，变成history模式
    scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    routes
});

//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
//
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  stores.dispatch('showLoading')
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  stores.dispatch('hideLoading')
  return response;
}, function (error) {
  return Promise.reject(error);
});

/*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
 axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*/
//axios.defaults.baseURL='http://192.168.1.107:8087/';
 Vue.prototype.$http = axios;  //其他页面在使用axios的时候直接  this.$http就可以了

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:stores,
  template: '<App/>',
  components: { App }
})

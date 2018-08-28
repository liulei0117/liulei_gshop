import Vue from 'vue'
import {Button} from 'mint-ui'
import app from './app'
import router from './router'
import store from './store'
// import axios from 'axios' //引入axios
// Vue.prototype.$ajax=axios //修改Vue的原型属性
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp);
// import './mock/mockServer' // 加载mockServer即可
import './fiters' // 加载过滤器
import directives from './plugins/directives.js'
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'
Vue.use(directives);
Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
});
import VueTouch from 'vue-touch'
Vue.use(VueTouch, { name: 'v-touch' });
Vue.component(Button.name, Button);
new Vue({
  el: '#app',
  render: h => h(app),
  router,store,
});

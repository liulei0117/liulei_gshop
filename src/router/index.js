import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import classification from '../pages/classification/Search.vue'
import Shopping_Cart from '../pages/Shopping_Cart/Order.vue'
import details from '../pages/details/details.vue'
import Profile from '../pages/Profile/Profile.vue'
import login from '../pages/login/login.vue'
import register from '../pages/register/register.vue'
import Personal_Center from '../pages/Personal_Center/Personal.vue'
Vue.use(VueRouter);

export default new VueRouter({ routes: [
    //首页
    {
      path: '/Msite/nav_1', component: Msite,
      name: "首页",
      meta: {
        showFooter: true//控制路由组件是否显示隐藏
      },
      children:[
        {
          path: "/Msite/nav_1",
          name: "首页",
          component: require("../pages/Msite/nav_1/index.vue").default,
        },{
          path: "/Msite/nav_2",
          name: "美妆个护",
          component: require("../pages/Msite/nav_2/index.vue").default,
        },{
          path: "/Msite/nav_3",
          name: "家具百货",
          component: require("../pages/Msite/nav_3/index.vue").default,
        },{
          path: "/Msite/nav_4",
          name: "服装鞋帽",
          component: require("../pages/Msite/nav_4/index.vue").default,
        },{
          path: "/Msite/nav_5",
          name: "母婴用品",
          component: require("../pages/Msite/nav_5/index.vue").default,
        },{
          path: "/Msite/nav_6",
          name: "精选美食",
          component: require("../pages/Msite/nav_6/index.vue").default,
        },
        { path: '*', redirect: "/Msite/nav_1" }]
    },{ path: '*', redirect: "/Msite/nav_1" },
    //购物分类
    {
      path: '/classification', component: classification,
      meta: {
        showFooter: true
      }
    },
    //购物详情
    {
      path: '/details', component: details,
      meta: {
        showFooter: true
      }
    },
    //购物分享
    {
      path: '/profile', component: Profile,
      meta: {
        showFooter: true
      }
    },
    // 个人中心
    {
      path: '/Personal_Center', component: Personal_Center,
      meta: {
        showFooter: true
      }
    },
    //登录
    {
      path: '/login', component: login,
      meta: {
        showFooter: true
      }
    },
    //注册
    {
      path: '/register', component: register,
      meta: {
        showFooter: true
      }
    }
  ]
})

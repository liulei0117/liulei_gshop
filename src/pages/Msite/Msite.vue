<template>
  <div class="msite">
    <!--头部导航-->
    <header>
      <!--<h3>品优堂</h3>-->
      <div class="dv_header flex sb">
        <div class="logo" @click="logo"><a href="#"><img  class="img_100" src="./images/index_03.png" alt=""></a></div>
        <nav class="nav_">
          <form action="#">
            <span></span>
            <input type="text" placeholder="搜索商品名称/品牌">
            <input type="button">
          </form>
        </nav>
        <div class="btn"><img class="img_100" src="./images/index_07.png" alt=""></div>
      </div>
      <nav class="nav_Two swiper-container" id="swiper-container2">
          <ul class="swiper-wrapper swiper_uls">
            <li class="swiper-slide" v-for="(item,index) in navname" :class="{cur:item.active==true}">
              <a @click="navClick(index,item.url)" href="javascript:;">{{item.title}}</a>
            </li>
          </ul>
      </nav>
    </header>
    <div class="Spread" :class="{cur_Sp:classname==true}">
      <div class="dv_header flex sb">
        <div class="logo" v-if="classname!=true" @click="logo"><a href="#"><img  class="img_100" src="./images/index_03.png" alt=""></a></div>
        <div class="logo_" v-else @click="logo"><a href="#"><img  class="img_100" src="./images/2_03.png" alt=""></a></div>
        <nav class="nav_">
          <form action="#">
            <span></span>
            <input type="text" placeholder="搜索商品名称/品牌">
            <input type="button">
          </form>
        </nav>
        <div class="btn" v-show="classname!=true"><img class="img_100" src="./images/index_07.png" alt=""></div>
      </div>
      <div class="spread_flex">
        <div class="Spread_left">
          <ul>
            <li class="cur_1i"><a href="javascript:;">美妆个护</a></li>
            <li><a href="javascript:;">家具百货</a></li>
            <li><a href="javascript:;">服装鞋帽</a></li>
            <li><a href="javascript:;">母婴用品</a></li>
            <li><a href="javascript:;">精选美食</a></li>
          </ul>
        </div>
        <div class="Spread_right">
          <ul>
            <li>
              <div class="png_top"><img src="./images/4_05.png" alt=""></div>
              <p class="txt_bottom">美容仪器</p>
            </li>
            <li>
              <div class="png_top"><img src="./images/5_05.png" alt=""></div>
              <p class="txt_bottom">面部护肤</p>
            </li>
            <li>
              <div class="png_top"><img src="./images/6_05.png" alt=""></div>
              <p class="txt_bottom">个人护理</p>
            </li>
            <li>
              <div class="png_top"><img src="./images/7_05.png" alt=""></div>
              <p class="txt_bottom">礼盒套装</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <transition name="slide">
      <router-view/>
    </transition>
  </div>
</template>
<script>
  export default {
    data(){
      return {
       //首页导航
        navname:[
          {
            "title":"首页",
            "active":true,
            url:"/Msite/nav_1"
          },
          {
            "title":"美妆个护",
            "active":false,
            url:"/Msite/nav_2"
          },
          {
            "title":"家居百货",
            "active":false,
            url:"/Msite/nav_3"
          },
          {
            "title":"服装鞋帽",
            "active":false,
            url:"/Msite/nav_4"
          },
          {
            "title":"母婴用品",
            "active":false,
            url:"/Msite/nav_5"
          },
          {
            "title":"精选美食",
            "active":false,
            url:"/Msite/nav_6"
          },
        ],
        classname:false
      }
    },
    mounted(){
      var swiper = new Swiper('#swiper-container2', {
        slidesPerView: 4.3,
        spaceBetween: 0,
        freeMode: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    },
    methods:{
      navClick(index,url){
        this.navname.forEach((item) =>{
          item.active=false;
        });
        this.navname[index].active = true;
        this.$router.replace({path:url})//路由
        console.log(url)
      },
      logo(){
        if(this.classname!=true){
          this.classname=true;
        }else{
          this.classname=false;
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite //首页
    width 100%
    .img_100{
      width 100%;
      height 100%
    }
    header{
      background #111111
      .dv_header{
        .logo{
          flex: 0 1 20px;
          height: 20px;
        }
        .logo_{
          flex: 0 1 12px;
          height: 20px;
        }
        a{
          width 100%
          height 100%
          display block
        }
        .btn{
          flex: 0 1 16px;
          height: 15px;
        }
        form{
          height: 25px
          border-radius: 3px;
          background: #414141;
          display flex
          line-height 25px;
          flex 0 1 30px
          span{
            width 10px;
            height 10px;
            margin 8px 10px 0 10px
            background #00b43c
          }
          input{
            font-size 15px
            outline:none;
            background none
          }
          input::placeholder { /* WebKit browsers */
            color: #a2a2a1;
          }
        }
        .nav_{
          flex:0.8 1 auto;
          align-self: center;
          margin:0 auto;
          background-size: 78px auto;
        }
        display: flex;
        height:50px;
        padding:0 10px;
        margin-bottom 10px;
        justify-content: space-around;
        align-items: center;
      }
      .nav_Two{
        width 95%;
        ul.swiper_uls{
          display flex
          width: 694px;
          li:nth-child(1){
            flex 0.04 0 45px
          }
          li.cur{
            border-bottom 3px solid #fc0;
          }
          li{
            flex 0.04 0 65px
            margin-right 10px;
            box-sizing border-box
            height 35px;
            line-height 30px;
            text-align center
           >a{
             color #e0b200eb
             font-weight bold
             font-family Arial
             font-size 13px
           }
          }
        }
      }
    }
    .Spread{
      width: 100%;
      height: 100%;
      box-sizing border-box;
      transition all .3s linear;
      position fixed;
      bottom -100%;
      background #fff;
      z-index 1000
      .dv_header{
        background black
        .logo{
          flex: 0 1 20px;
          height: 20px;
        }
        .logo_{
          flex: 0 1 12px;
          height: 20px;
        }
        a{
          width 100%
          height 100%
          display block
        }
        .btn{
          flex: 0 1 16px;
          height: 15px;
        }
        form{
          height: 25px
          border-radius: 3px;
          background: #414141;
          display flex
          line-height 25px;
          flex 0 1 30px
          span{
            width 10px;
            height 10px;
            margin 8px 10px 0 10px
            background #00b43c
          }
          input{
            font-size 15px
            outline:none;
            background none
          }
          input::placeholder { /* WebKit browsers */
                  color: #a2a2a1;
                }
        }
        .nav_{
          flex:0.8 1 auto;
          align-self: center;
          margin:0 auto;
          background-size: 78px auto;
        }
        display: flex;
        height:50px;
        padding:0 10px;
        margin-bottom 10px;
        justify-content: space-around;
        align-items: center;
      }
      .spread_flex{
        display flex;
        .Spread_left{
          width: 20%;
          height 100%;
          background #f3f4f6;
          ul>{
            .cur_1i{
              background #fff
              border none;
              a{
                color #111;
              }
            }
            li{
              width 100%;
              text-align center;
              line-height 45px;
              a{
                color #999;
                font-size 13px;
              }
            }
          }
        }
        .Spread_right{
          width 80%;
          box-sizing border-box;
          padding 10px 10px;
          >ul{
            display flex;
            justify-content space-between;
            flex-wrap wrap;
            li{
              width 30%;
              text-align center;
              display flex;
              flex-direction column;
              margin-top 15px;
              .png_top{
                margin 0 auto;
                width: 75px;
                height: 72px;
                border-radius 50%;
                img{
                  width: 100%;
                  height 100%;
                }
              }
              p{
                margin-top 8px;
                font-size 13px;
                color #777;
              }
            }
          }
        }
      }
    }
    div.cur_Sp{
      bottom 0%;
    }
</style>

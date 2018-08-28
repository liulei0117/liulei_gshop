<style lang="stylus" rel="stylesheet/stylus">
  .nav_2 { //首页
    .canvas{
      display flex;
      img{
        width 100%;
        height 100%;
      }
    }
    .nav_Three {
      background #fff
      margin-bottom 10px;
    }
    .p_top_10{
      padding-top 10px;
      padding-left 10px;
    }
    nav.nav_Three > {
      ul {
        width 100%;
        padding 10px 7px;
        display flex
        flex-direction: row;
        justify-content: space-around;
        box-sizing border-box
        li {
          flex 1 1 auto
          display flex
          flex-direction: column;
          justify-content: center;
          text-decoration: none;
          .nav_url {
            width 65px;
            height 65px;
            background #f3f4f6
            border-radius 30px;
            margin 0 auto
            margin-bottom 14px;
            order: 1;
            img{
              width 100%;
              height 100%;
            }
          }
          p {
            text-align: center;
            font-size 14px;
            order: 2;
          }
        }
      }

    }
    .sec_c1_tion {
      box-sizing border-box;
      margin-bottom 52px;
      height 100%
      overflow:hidden;
      ul{
        width 100%;
        height 100%;
        li:nth-child(2n+1){
          padding 10px 5px 10px 10px;
        }
        .figure_left {
          width 50%;
          box-sizing border-box
          padding 10px 10px 10px 5px;
          background #fff;
          float left;
          display flex
          div.figure_left_{
            width 100%;
            border 1px solid #f3f4f6;
            .lf_{
              height 160px;
              flex 1 1 auto;
              background #f3f4f6
            }
            p:nth-child(2){
              font-size 15px;
            }
            p:nth-child(3){
              color #666;
              font-size 13px;
            }
            p:nth-child(4){
              color #333;
              font-size 18px;
              span{
                font-size 13px;
                color: #e62900;
              }
            }
            .button-n{
              display flex;
              margin-top 15px;
              justify-content space-between
              a:nth-child(1){
                margin-left: 7px;
              }
              a:nth-child(2){
                margin-right: 7px;
              }
              a:nth-child(1){
                border: 1px solid rgba(1,1,1,0.4);
              }
              a{
                font-size: 13px;
                width: 37%;
                color #666;
                line-height: 25px;
                text-align: center;
                margin-bottom: 7px;
                border-radius: 3px;
              }
              a.cur{
                color #111;
                background #FFcc00;
              }
            }
          }
        }
      }
    }
    .sec_c1_tion > {
      div {
        flex 1 1 auto
      }
    }
  }
</style>
<template>
  <div class="nav_2">
    <!--轮播图-->
    <a class="canvas" href="jascript:;"><img src="../image/3_02.png" alt=""></a>
    <!--导航栏3-->
    <nav class="nav_Three">
      <ul class="">
        <li class="">
          <div class="nav_url"><img src="./images/4_05.png" alt=""></div>
          <p>美容仪器</p>
        </li>
        <li class="">
          <div class="nav_url"><img src="./images/5_05.png" alt=""></div>
          <p>面部护肤</p>
        </li>
        <li class="">
          <div class="nav_url"><img src="./images/6_05.png" alt=""></div>
          <p>礼盒套装</p>
        </li>
        <li class="">
          <div class="nav_url"><img src="./images/7_05.png" alt=""></div>
          <p>全球时尚</p>
        </li>
      </ul>
    </nav>
    <!--热门活动-->
    <div class="sec_c1_tion">
      <ul>
        <li class="figure_left">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">副标副标副标副标副标</p>
            <p class="p_top_10">￥5000 <span>/赚￥1500</span></p>
            <div class="button-n">
              <a href="javascript:;">分享</a>
              <a href="javascript:;" class="cur">立即购买</a>
            </div>
          </div>
        </li>
        <li class="figure_left">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">副标副标副标副标副标</p>
            <p class="p_top_10">￥5000 <span>/赚￥1500</span></p>
            <div class="button-n">
              <a href="javascript:;">分享</a>
              <a href="javascript:;" class="cur">立即购买</a>
            </div>
          </div>
        </li>
        <li class="figure_left">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">副标副标副标副标副标</p>
            <p class="p_top_10">￥5000 <span>/赚￥1500</span></p>
            <div class="button-n">
              <a href="javascript:;">分享</a>
              <a href="javascript:;" class="cur">立即购买</a>
            </div>
          </div>
        </li>
        <li class="figure_left">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">副标副标副标副标副标</p>
            <p class="p_top_10">￥5000 <span>/赚￥1500</span></p>
            <div class="button-n">
              <a href="javascript:;">分享</a>
              <a href="javascript:;" class="cur">立即购买</a>
            </div>
          </div>
        </li>
        <li class="figure_left">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">副标副标副标副标副标</p>
            <p class="p_top_10">￥5000 <span>/赚￥1500</span></p>
            <div class="button-n">
              <a href="javascript:;">分享</a>
              <a href="javascript:;" class="cur">立即购买</a>
            </div>
          </div>
        </li>
        <li class="figure_left">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">副标副标副标副标副标</p>
            <p class="p_top_10">￥5000 <span>/赚￥1500</span></p>
            <div class="button-n">
              <a href="javascript:;">分享</a>
              <a href="javascript:;" class="cur">立即购买</a>
            </div>
          </div>
        </li>
        <li class="figure_left">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">副标副标副标副标副标</p>
            <p class="p_top_10">￥5000 <span>/赚￥1500</span></p>
            <div class="button-n">
              <a href="javascript:;">分享</a>
              <a href="javascript:;" class="cur">立即购买</a>
            </div>
          </div>
        </li>
        <li class="figure_left">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">副标副标副标副标副标</p>
            <p class="p_top_10">￥5000 <span>/赚￥1500</span></p>
            <div class="button-n">
              <a href="javascript:;">分享</a>
              <a href="javascript:;" class="cur">立即购买</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import VuiSwiperY from "../../../components/swpir/swiper.vue"
  export default {
    data(){
      return {
        // 轮播图数据
        swiperArr: [
         {
            imgUrl: "http://p1.music.126.net/tN-BGO2bOm59xLvf7WOhCA==/18963277044745659.jpg",
          }, {
            imgUrl: "http://p1.music.126.net/QlMwys9zc4Bg3Rm5qj8fsA==/19161189137713255.jpg",
          }
        ]
      }
    },
    methods:{},
    components: {
      VuiSwiperY,
    }
  }
</script>

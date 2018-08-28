<style lang="stylus" rel="stylesheet/stylus">
  .nav_1 { //首页
    margin-top 8px;
    margin-bottom 60px;
    .img_100{
      width 100%;
      height 100%
    }
    .p_top_10{
      padding-top 10px;
    }
    .nav_Three {
      border-radius 10px;
      background #fff
      margin 10px 8px;
    }
    .swiper-container{
      border-radius 10px;
      margin 0 8px;
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
          height 70px;
          display flex
          flex-direction: column;
          justify-content: center;
          text-decoration: none;
          .nav_url {
            width 50px;
            height 50px;
            border-radius 30px;
            margin 0 auto
            margin-bottom 8px;
            /*box-shadow: 0px 3px 4px 0px #aaa*/
            order: 1;
          }
          p {
            text-align: center;
            color #666;
            font-size 14px
            order: 2;
          }
        }
      }

    }
    .sec_tion {
      min-height 175px
      box-sizing border-box;
      display: flex
      margin 0 8px;
      h5.h5s{
        font-size: 17px;
        line-height: 36px;
        text-align: center;
        font-weight 500;
        font-family Calibri
      }
      .figure_left {
        background #fff
      }
      .figure_right {
        flex 0.4 1 auto
        margin-left: 10px;
        background #fff
      }
    }
    .sec_tion > {
      div {
        border-radius 7px;
        flex 1 1 auto
      }
    }
    .c2_{
      margin 8px 0!important;
      background #fff;
      padding 10px 8px;
      display flex;
      flex-direction column;
      h6{
        text-align: center;
        font-size: 19px;
        color: #555;
        font-weight: 600;
        line-height: 30px;
        margin-bottom: 10px;
      }
      ul{
        width 100%;
        height 100%;
       // li:nth-child(2n+1){
       //   padding 10px 5px 10px 10px;
        //}
        li{
          padding: 8px 5px 5px 8px;
        }
        .figure_left {
          width 50%;
          box-sizing border-box
          padding 10px 10px 10px 5px;
          background #fff;
          margin-right 7px;
          float left;
          display flex
          div.figure_left_{
            width 100%;
            padding 10px 8px;
            border 1px solid #f3f4f6;
            .lf_{
              height 105px;
              flex 1 1 auto;
              background #f3f4f6
            }
            p{
              text-align center
            }
            p:nth-child(2){
              font-size 15px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            p:nth-child(3){
              color #fb3736;
              font-size 15px;
            }
            p:nth-child(4){
              color #a1a1a1;
              font-size 13px;
              text-decoration: line-through;
            }
          }
        }
        .null_text{
          height 198px;
          width 105px;
          border: 1px solid #f3f4f6;
        }
      }
    }
    .sec_tion_2{
      padding 0 10px 10px 10px;
      height 165px;
      max-height 170px;
      a{
        height 100%;
        background #fff;
        display flex;
        img{
          width 100%;
          max-width 55px;
          height 100%;
          flex 0.03 1 auto;
        }
      }
    }
  }
</style>
<template>
<div class="nav_1">
  <!--轮播图-->
  <vui-swiper-x :swiperArr="swiperArr"></vui-swiper-x>
  <!--导航栏3-->
  <nav class="nav_Three">
    <ul class="">
      <li class="">
        <div class="nav_url">
          <img class="img_100" src="../images/index_34.png" alt="">
        </div>
        <p>全球时尚</p>
      </li>
      <li class="">
        <div class="nav_url">
          <img class="img_100" src="../images/index_36.png" alt="">
        </div>
        <p>美妆专区</p>
      </li>
      <li class="">
        <div class="nav_url">
          <img class="img_100" src="../images/index_38.png" alt="">
        </div>
        <p>国际大师</p>
      </li>
      <li class="">
        <div class="nav_url">
          <img class="img_100" src="../images/index_40.png" alt="">
        </div>
        <p>我要分享</p>
      </li>
      <li class="">
        <div class="nav_url">
          <img class="img_100" src="../images/index_42.png" alt="">
        </div>
        <p>联系我们</p>
      </li>
    </ul>
  </nav>
  <section class="sec_tion_2">
    <a href="javascript:;"><img src="../image/1_06.png" alt=""></a>
  </section>
  <!--今日推荐-->
  <section class="sec_tion ">
    <div class="figure_left">
      <h5 class="h5s">今日推荐</h5>
    </div>
    <div class="figure_right">
      <h5 class="h5s">明日预告</h5>
    </div>
  </section>
  <!--美妆个护-->
  <section class="sec_tion c2_">
    <h6>美妆个护</h6>
    <a href="javascript:;">
      <img class="img_100" src="../images/1.jpg" alt="">
    </a>
    <div class="swiper-container" id="swiper-container3">
      <ul class="swiper-wrapper">
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="null_text">

          </div>
        </li>
      </ul>
    </div>
  </section>
  <!--母婴用品-->
  <section class="sec_tion c2_">
    <h6>母婴用品</h6>
    <a href="javascript:;">
      <img class="img_100" src="../image/2_09.png" alt="">
    </a>
    <div class="swiper-container" id="swiper-container4">
      <ul class="swiper-wrapper">
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="null_text">

          </div>
        </li>
      </ul>
    </div>
  </section>
  <!--服装鞋帽-->
  <section class="sec_tion c2_">
    <h6>服装鞋帽</h6>
    <a href="javascript:;">
      <img class="img_100" src="../image/3_09.png" alt="">
    </a>
    <div class="swiper-container" id="swiper-container5">
      <ul class="swiper-wrapper">
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="null_text">

          </div>
        </li>
      </ul>
    </div>
  </section>
  <!--家具百货-->
  <section class="sec_tion c2_">
    <h6>家具百货</h6>
    <a href="javascript:;">
      <img class="img_100" src="../image/5_09.png" alt="">
    </a>
    <div class="swiper-container" id="swiper-container6">
      <ul class="swiper-wrapper">
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="null_text">

          </div>
        </li>
      </ul>
    </div>
  </section>
  <!--精选美食-->
  <section class="sec_tion c2_">
    <h6>精选美食</h6>
    <a href="javascript:;">
      <img class="img_100" src="../image/5_09.png" alt="">
    </a>
    <div class="swiper-container" id="swiper-container7">
      <ul class="swiper-wrapper">
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="figure_left_">
            <div class="lf_"></div>
            <p class="p_top_10">标题标题标题标题</p>
            <p class="p_top_10">￥666</p>
            <p class="p_top_10">市场价 : ￥999</p>
          </div>
        </li>
        <li class="figure_left swiper-slide">
          <div class="null_text">

          </div>
        </li>
      </ul>
    </div>
  </section>
</div>
</template>
<script>
  import VuiSwiperX from "../../../components/swpir/swiper.vue"
  export default {
    data(){
      return {
        // 轮播图数据
        swiperArr: [
          {
            imgUrl: "http://p1.music.126.net/piXJCyIWqYGWEYy2AFnoBA==/19047939440081948.jpg",
          }, {
            imgUrl: "http://p1.music.126.net/-pzOigsoJj3vZehOQqj6vA==/18801648837108169.jpg",
          }
        ]
      }
    },
    mounted(){
      var swiper = new Swiper('#swiper-container3', {
        slidesPerView: 3,
        spaceBetween: 0,
        freeMode: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      swiper = new Swiper('#swiper-container4', {
        slidesPerView: 3,
        spaceBetween: 0,
        freeMode: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      swiper = new Swiper('#swiper-container5', {
        slidesPerView: 3,
        spaceBetween: 0,
        freeMode: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      swiper = new Swiper('#swiper-container6', {
        slidesPerView: 3,
        spaceBetween: 0,
        freeMode: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      swiper = new Swiper('#swiper-container7', {
        slidesPerView: 3,
        spaceBetween: 0,
        freeMode: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    },
    methods:{},
    components: {
      VuiSwiperX,
    }
  }
</script>

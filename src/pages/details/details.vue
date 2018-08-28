<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .details //详情
    .list-content
      background #fff
      .action_img{
        padding 15px 0;
        margin-bottom: 37px;
        position relative;
        box-sizing border-box
        a:nth-child(1){
          border: 1px solid #dcdcdc;
          height: 98px;
          background: url("./images/5.1.png");
          background-size: contain;
          position: absolute;
          top: -50px;
          left: 7%;
          width: 26%;
          border-radius: 5px;
          img{
            width 100%
            height 100%!important
            border-radius 5px;
          }
        }
        a:nth-child(2){
          width: 14px;
          height: 14px;
          background: url("./images/3_03.png");
          background-size contain
          position: absolute;
          right: 19px
          top: 13px;
        }
        ._money{
          position: absolute;
          left: 36%;
          top: 5px;
          .txt_ccc{
            margin-top 10px;
            font-size 15px;
            color #7b7b7b;
          }
          p:nth-child(1){
            margin-bottom 8px;
            font-size 17px
            font-family sans-serif
            span{
              font-size 13px;
              color rgba(232,0,0,0.9)
              font-family none
            }
          }
          p:nth-child(2){
            font-size 12px
            font-weight: 400;
          }
        }
      }
      .Commodity_Color{
        border-top 1px solid #ccc;
        border-bottom 1px solid #ccc;
        box-sizing border-box
        padding 13px 13px 3px 13px
        p{
          font-size: 16px;
          /* font-weight: bold; */
          margin-bottom: 10px;
          margin-top: 6px;
        }
        .Comm_Col_1{
          padding-bottom 10px;
          dl.Comm_ulr{
            display flex
            flex-wrap wrap
            align-content: flex-start
            dd:nth-child(3n+1){
              margin-left 0;
            }
            dd{
              background rgb(242,242,242);
              height 30px;
              margin-top 10px;
              margin-left 20px;
              text-align center;
              font-size 12px;
              line-height 30px;
              width 21%;
              color #666;
            }
            dd.cur{
              color black;
              background rgb(255,204,0);

            }
          }
          dl.Comm_ulr_2{
            display flex
            flex-wrap wrap
            align-content: flex-start
            dd:nth-child(4n+1){
              margin-left 0;
            }
            dd{
              background rgb(242,242,242);
              height 30px;
              margin-top 10px;
              margin-left 20px;
              text-align center;
              font-size 12px;
              line-height 30px;
              width 17%;
              color #666;
            }
            dd.cur{
              background rgb(255,204,0);
              color black;
            }
          }
        }
      }
      .Number{
        padding 15px 15px;
        display: flex;
        justify-content: space-between;
        p{
          font-size 15px;
          line-height 30px;
        }
        .bcc{
          color #a6a6a6;
        }
        .Number_right{
          display flex
          width 110px;
          height 30px;
          p{
            background #f2f2f2
            margin-right 2px;
            text-align center
          }
          p:nth-child(1){
            flex 1 1 auto;
          }
          p:nth-child(2){
            flex 2 1 auto;
          }
          p:nth-child(3){
            flex 1 1 auto;
            margin-right 0
          }
        }
      }
      .bottom{
        display flex
        height 50px;
        dd{
          flex 1 1 auto;
          font-size 16px;
          line-height 50px;
          text-align center
        }
        dd.cur{
          background rgb(40,40,40)
          color #fc0
        }
      }
    .huabu{
      position absolute;
      top 0;
      bottom 0;
      left 0;
      right 0;
      z-index 999
      background rgba(1,1,1,0.5)
    }
    width 100%
    .swiper-container img{
      height 300px!important;
    }
    .m_top{
        margin-top 10px;
      }
    .m_top_bot_10{
      margin-top 10px;
      margin-bottom 10px;
    }
    .p_t_b_10{
      padding 16px 10px !important;
    }
    .isFixed{
      position:fixed;
      top 0;
      background #222;
      z-index 999
    }
    header{
      position:fixed;
      width 100%
      padding 20px 15px;
      box-sizing border-box;
      display flex;
      justify-content space-between
      background none
      z-index 999
      .left_{
        width 10px;
        height 20px;
        background url("./images/2_03.png") no-repeat;
        background-size cover;
      }
      .right_{
        width 20px;
        height 20px;
        background url("./images/1_03.png") no-repeat;
        background-size cover;
      }
      .center{
        width 130px;
        ul{
          display flex
          align-items flex-end
          justify-content space-between
          li{
            color #fc0;
            font-size 14px;
            font-family sans-serif
            font-weight 500
          }
          li.cur{
            font-size 19px;
          }
        }
      }
    }
    section{
      margin-bottom 60px;
      .list{
        width 100%
        article{
          width 100%
          .hgroup{
            width 100%;
            box-sizing border-box;
            padding 10px 10px 0 10px;
            background #fff;
            .text_{
              margin-top 10px;
              margin-left 5px;
              h3{
                font-size 22px;
                padding-left 3px;
                color #d8bd91
                span{
                  font-size 13px;
                  color #9e9494!important
                  span{
                    text-decoration:line-through;

                  }
                }
              }
              h4{
                margin-top 10px;
                font-size 18px;
                font-weight 400;
                text-align left;
                overflow: hidden; /*自动隐藏文字*/
                text-overflow: ellipsis;/*文字隐藏后添加省略号*/
                white-space: nowrap;/*强制不换行*/
              }
              .text-Content{
                font-size 14px;
                color #888
                margin-top 10px;
                padding-left 3px;
                line-height 22px;
              }
            }
            .title_Gu{
              display flex
              justify-content:space-between
              border-top 0.1px solid rgb(226,226,226);
              padding 15px 0;
              .title_1_{
                line-height 22px;
                font-size 14px;
                color #888;
                span{
                  font-size 14px!important;
                  font-family sans-serif
                  color #564545 !important
                  text-align: left;
                  font-weight bold
                  overflow: hidden; /*自动隐藏文字*/
                  text-overflow: ellipsis;/*文字隐藏后添加省略号*/
                  white-space: nowrap;/*强制不换行*/
                  margin-left 9px;
                }
              }
              .title_2_{
                color #ccc;
                font-size 23px;
              }
            }
            ol{
              display flex
              justify-content: flex-start
              li:nth-child(1){
                margin-left 0;
              }
              li:before{
                 content:'';
                width 10px;
                height 10px;
                position absolute
                top 2px;
                left 3px;
                background red
              }
              li{
                position relative;
                margin-left 10px;
                padding-left 15px;
                font-weight: 600;
                color: #686666;
                font-size 14px;
              }
            }
            .sp_title_1_{
              padding-left 8px;
              line-height 25px;
              color: #564545 !important;
              text-align: left;
              font-weight: bold;
            }
            ._w_{
              background #ccc;
              margin-top 15px;
              width 100%
              height 1px;
            }
            .article{
              width 100%
              padding-left 15px;
              box-sizing: border-box;
              ul>li{
                font-size 14px;
                margin-top 10px;
                font-weight: 600;
                color: #454343;
                span{
                  color #666c
                  margin-left 5px;
                }
              }
            }
          }
        }
      }
      .list2{
        width 100%
        height: 400px;
        background #f9b454
      }
      .list3{
        width 100%
        height: 400px;
        background #ffa059
      }
    }
    footer{
      position fixed
      bottom -2px;
      width 100%
      background #fff;
      border-top 0.1px solid #ccc;
      /*background #fc0*/
      z-index 1000
      height 60px;
      ul{
        display flex
        li:nth-child(1){
          flex 1 1 auto;
          box-sizing border-box;
          border-right 0.3px solid #dfd9d7;
        }
        li:nth-child(3){
          a:nth-child(2){
            color rgb(208, 208, 208)
          }
        }
        li{
          height 60px;
          flex 2 1 auto;
          display flex
          flex-direction: column;
          justify-content:center
          a{
            font-size 16px
            text-align center
            color black
            margin-top 5px;
          }
          a:nth-child(2){
            color rgba(232, 0, 0, 0.9)
            font-size 14px;
          }
        }
        li:nth-child(3){
          a{
            color #f5a100;
          }
          background #111;
        }
      }
      .hou{
        width 100%;
        height 400px
        transition  all .5s!important;
        position fixed
        bottom -455px
        z-index: 1000;
        background #fff;
      }
      .hou_cur{
        bottom: -1px;
      }
    }
</style>
<template>
<div class="details">
  <div  class="searchBar" id="searchBar">
    <header :class="searchBarFixed == true ? 'isFixed' :''">
      <div class="left_"  @click=" routerGo"></div>
      <div class="center"  v-show="searchBarFixed==true">
        <ul>
          <v-touch tag="li" :class="{cur:item.click==true}" v-for="(item ,index) in navList"  @tap="Tabnav(index)">{{item.title}}</v-touch>
        </ul>
      </div>
      <div class="right_"></div>
    </header>
  </div>
  <section>
    <div v-show="tabIndex==0" class="list">
      <!--轮播图-->
      <vui-swiper-x :swiperArr="swiperArr"></vui-swiper-x>
      <article>
        <!--商品信息-->
        <div class="hgroup">
          <div class="text_">
            <h3>￥800<span> 市场零售价 <span>￥980</span></span></h3>
            <h4>【女凉鞋】莫雷关磊粗发了快干啥女凉鞋205476</h4>
            <p class="text-Content">
              凉鞋凉鞋凉鞋凉凉鞋凉鞋凉鞋凉鞋凉鞋凉鞋凉鞋凉鞋凉鞋凉鞋凉鞋凉鞋凉鞋凉鞋凉鞋凉鞋凉鞋
            </p>
          </div>
          <div class="title_Gu m_top">
            <div class="title_1_">产品规格 <span v-if="titColor!=''||titSize!=''">{{titColor}}，{{titSize}}码，{{number}}双</span><span v-else>请选择规格</span></div>
            <span class="title_2_" @click="toggleShow">···</span>
          </div>
          <div class="title_Gu ">
            <div class="title_1_">配送信息 <span>北京市-北京市-东城区</span></div>
            <span class="title_2_">···</span>
          </div>
        </div>
        <!--七天无理由退货 正品保障 全球精品-->
        <div class="hgroup m_top_bot_10 p_t_b_10">
          <ol>
            <li>七天无理由退货</li>
            <li>正品保障</li>
            <li>全球精品</li>
          </ol>
        </div>
        <!--商品信息-->
        <div class="hgroup p_t_b_10">
          <div class="sp_title_1_">商品信息</div>
          <p class="_w_"></p>
          <div class="article">
            <ul>
              <li>品牌 &nbsp; <span>莫雷冠蕾</span></li>
              <li>国家 &nbsp; <span>中国</span></li>
              <li>型号 &nbsp; <span>70126</span></li>
            </ul>
          </div>
        </div>
      </article>
    </div>
    <div v-show="tabIndex==1" class="list2">

    </div>
    <div v-show="tabIndex==2" class="list3">

    </div>
  </section>
  <footer>
    <ul>
      <li><a href="javascript:;">车</a></li>
      <li @click="toggleShow">
        <a href="javascript:;">购买省钱</a>
        <a href="javascript:;">立省￥12</a>
      </li>
      <li>
        <a href="javascript:;">分享赚钱</a>
        <a href="javascript:;">立赚￥12</a>
      </li>
    </ul>

    <transition name="slide">
    <div class="hou list-content" :class="listShow==true?'hou_cur':''">
      <div class="action_img">
        <a href="javascript:;"><img src="images/3_03.png" alt=""></a>
        <!--关闭按钮-->
        <a href="javascript:;" @click="toggleShow"><img src="images/5.1.jpg" alt=""></a>
        <div class="_money"v-if="titColor!=''||titSize!=''">
          <p>￥235 <span>/赚4.9</span></p>
          <p>已选择&nbsp;{{titColor}}，{{titSize}}码，{{number}}件</p>
        </div>
        <div class="_money" v-else>
          <p>￥235 <span>/赚4.9</span></p>
          <p class="txt_ccc">请选择规格</p>
        </div>
      </div>
      <div class="Commodity_Color">
        <p>颜色</p>
        <div class="Comm_Col_1">
          <dl class="Comm_ulr">
            <dd :class="{cur:item.click==true}" v-for="(item,index) in navColor" @click="onColor(item,index)">{{item.title}}</dd>
          </dl>
        </div>
        <p>尺码</p>
        <div class="Comm_Col_1">
          <dl class="Comm_ulr_2">
            <dd :class="{cur:item.click==true}" v-for="(item,index) in navSize" @click="onSize(item,index)">{{item.title}}</dd>
          </dl>
        </div>
      </div>
      <div class="Number">
        <p>数量</p>
        <div class="Number_right">
          <p @click="jian" :class="number<=0?'bcc':''">-</p>
          <p>{{number}}</p>
          <p @click="jia">+</p>
        </div>
      </div>
      <div class="bottom">
        <dd>加入购物车</dd>
        <dd class="cur">立即购买</dd>
      </div>
    </div>
    </transition>
  </footer>
  <div class="huabu" @click="toggleShow"  v-show="listShow">
    <!--暗画布-->
  </div>
</div>
</template>
<script>
  import { MessageBox } from 'mint-ui'
  import BScroll from 'better-scroll'
  import VuiSwiperX from "../../components/swpir/swiper.vue"

export default {
  data(){
    return{
      isShow: false,
      searchBarFixed:false,
      mapList: [],
      swiperArr: [
        {
          imgUrl: "http://p1.music.126.net/tN-BGO2bOm59xLvf7WOhCA==/18963277044745659.jpg",
        },{
          imgUrl: "http://p1.music.126.net/QlMwys9zc4Bg3Rm5qj8fsA==/19161189137713255.jpg",
        }
      ],// 轮播图数据
      navList:[
        {
          "title":"商品",
          "click":true
        },
        {
          "title":"相关",
          "click":false
        },
        {
          "title":"详情",
          "click":false
        }],
      navColor:[
        {
          "title":"红色",
          "click":false
        },
        {
          "title":"浅紫色",
          "click":false
        },
        {
          "title":"淡蓝色",
          "click":false
        }
      ],//颜色
      titColor:"",
      navSize:[
        {
          "title":35,
          "click":false
        },{
          "title":36,
          "click":false
        },{
          "title":37,
          "click":false
        },{
          "title":38,
          "click":false
        },{
          "title":40,
          "click":false
        },
      ],//尺码
      titSize:"",
      nav_title:false,
      tabIndex:0,
      number: 1//数量
    }
  },
  methods:{
    routerGo() {
      this.$router.go(-1)
    },
    title(){
      if(this.nav_title!=true){
        this.nav_title=true;
      }else{
        this.nav_title=false;
      }
    },
    toggleShow () {
        this.isShow = !this.isShow
    },
    //导航栏切换
    Tabnav(index){
      this.navList.forEach((item) =>{
        item.click=false;
      });
      this.navList[index].click = true;

      this.tabIndex = index
    },
  //导航栏吸顶
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var offsetTop = document.querySelector('#searchBar').offsetTop
      if (scrollTop > offsetTop) {
        this.searchBarFixed = true
      } else {
        this.searchBarFixed = false
      }
    },
    //颜色切换
    onColor(items,index){
      this.navColor.forEach((item)=>{
        item.click=false;
      });
      this.navColor[index].click=true;
      this.titColor=items.title;
    },
    //尺码切换
    onSize(items,index){
      this.navSize.forEach((item)=>{
        item.click=false;
      });
      this.navSize[index].click=true;
      this.titSize=items.title;
    },
    jian() {
      this.number--;
      if(this.number<=0){
        this.number=0;
      }
    },
    jia() {
      this.number++
    }
  },
  computed: {
    listShow () {
      if(this.isShow) {
        this.$nextTick(() => {
          // 实现BScroll的实例是一个单例
          //只有大于外容器高彩会有滑动效果
          if(!this.scroll) {
            this.scroll = new BScroll('.list-content', {
              click: true
            })
          } else {
            this.scroll.refresh() // 让滚动条刷新一下: 重新统计内容的高度
          }

        })
      }
      return this.isShow
    }
  },
  mounted () {
    //导航栏吸顶
    window.addEventListener('scroll', this.handleScroll)
  },

  components:{
    VuiSwiperX,
  }
}
</script>

<template>
  <section class="search">
    <div class="Spread">
      <div class="dv_header flex sb">
        <div class="logo_" @click="routerGo"><a href="#"><img  class="img_100" src="./images/2_03.png" alt=""></a></div>
        <nav class="nav_">
          <form action="#">
            <span></span>
            <input type="text" placeholder="搜索商品名称/品牌">
            <input type="button">
          </form>
        </nav>
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
  </section>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    methods:{
      routerGo() {
        this.$router.go(-1)
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .search
    .img_100{
      width 100%;
      height 100%
    }
    width 100%
    height 100%
    overflow hidden
    .Spread{
      width: 100%;
      height: 91%;
      box-sizing border-box;
      transition all .3s linear;
      position fixed;
      background #fff;
      z-index 1000
      .dv_header{
        background black
        .logo_{
          flex: 0 1 12px;
          height: 20px;
        }
        a{
          width 100%
          height 100%
          display block
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

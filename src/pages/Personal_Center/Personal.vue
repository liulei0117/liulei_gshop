<template>
  <section class="Personal">
    <header class="p_lef_rig">
      <div class="head_main">
        <div class="circular_left">
          <a href="javascript:;" class="circular"></a>
          <div class="spa">
            <span>PY697541</span>
            <span>店铺序号：654823</span>
          </div>
        </div>
        <div class="text_right">
          <p>切换买家</p>
        </div>
      </div>
      <div class="frame_money paddimg_10">
        <ul>
          <li>
            <div class="frame_left">
              <p>本月销售</p>
              <p>￥999.00</p>
            </div>
            <div class="frame_right">
              <p>提现</p>
            </div>
          </li>
          <li>
            <div class="frame_b_left"><span>余额(元)</span><span class="padd_top">999.00</span></div>
            <div class="frame_b_comter"><span>累计收益(元)</span><span class="padd_top">1999.00</span></div>
            <div class="frame_b_right"><span>代收收益(元)</span><span class="padd_top">582.00</span></div>
          </li>
        </ul>
      </div>
    </header>
    <div class="tion_1 p_lef_rig">
      <div class="sce_1">
        <ul>
          <li>
            <div class="frame_left">
              <p>订单中心</p>
            </div>
            <div class="frame_right">
              <p>查看更多订单 <span></span></p>
            </div>
          </li>
          <li>
            <dl>
              <dd>
                <div class="d_img  d_img_2"><img class="img_" src="./images/25_03.png" alt=""></div>
                <p>待付款</p>
              </dd>
              <dd>
                <div class="d_img  d_img_2"><img class="img_" src="./images/26_03.png" alt=""></div>
                <p>待发货</p>
              </dd>
              <dd>
                <div class="d_img  d_img_2"><img class="img_" src="./images/27_03.png" alt=""></div>
                <p>待收费</p>
              </dd>
              <dd>
                <div class="d_img"><img class="img_" src="./images/28_03.png" alt=""></div>
                <p>售后</p>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
    <div class="tion_2 p_lef_rig">
      <div class="sec_2">
        <ul>
          <li>
            <div class="cont_left"></div>
            <div class="cont_right"></div>
          </li>
          <li><p>业绩管理</p><span></span></li>
          <li><p>帮助与客服</p><span></span></li>
          <li><p>设置</p><span></span></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .Personal
    width: 100%;
    margin-bottom: 56px;
    .padd_top{
      padding-top 5px;
    }
    .paddimg_10{
        padding 10px;
      }
    .img_{
      width 100%;
      height 100%;
    }
    .p_lef_rig{
      padding 0 10px;
      box-sizing border-box;
    }
    .m_lef_rig{
      margin 0 10px;
    }
    header{
      width 100%;
      height 150px;
      padding-top 15px!important;
      background url("./images/25_01.png");
      background-size contain;
      .head_main{
        width 100%;
        height 70px;
        display flex;
        justify-content space-between;
        margin-bottom 15px;
        .circular_left{
          flex 1 1 auto;
          display flex;
          .circular{
            display flex;
            width: 66px;
            height: 64px;
            background url("./images/index_42.png ") no-repeat;
            background-size cover;
            border-radius 50%;
          }
          .spa{
            margin-top 15px;
            margin-left 10px;
            >span{
              display block;
              margin-top 5px;
              font-size 18px;
              color #f9c700;
            }
            span:nth-child(2){
              font-size 12px;
            }
          }
        }
        .text_right{
          flex 1 1 auto;
        }
        .text_right>p{
          color #f9c700;
          text-align right;
          font-size 14px;
          opacity 0.9
        }
      }
      .frame_money{
        width 100%;
        background #fff;
        border-radius 15px;
        box-sizing border-box;
        padding 10px 20px;
        ul{
          li:nth-child(1){
            border-bottom 1px solid #dedede;
          }
          li{
            display flex;
            justify-content space-between;
            .frame_left{
              p{
                padding-left 5px;
                font-size 14px;
                color #444
              }
              >p:nth-child(2){
                padding-left 0;
                font-size: 21px;
                margin-top: 5px;
                color red;
                font-family: -webkit-body;
                margin-bottom: 5px;
                font-weight: 600;
              }

            }
            .frame_right{
              >p{
                text-align center;
                background #f9c700;
                font-size 13px;
                color #000;
                padding 5px;
              }
            }
          }
          li:nth-child(2){
            padding 10px 0;
            display flex;
            justify-content: space-between;
            div{
              font-size 14px;
              text-align left;
              flex-wrap wrap;
              span{
                display block;
              }
              span:nth-child(2){
                font-size 18px;
                font-weight 600;
              }
            }
            .frame_b_left{
              font-size 14px;
            }
            .frame_b_left>span:nth-child(1),.frame_b_comter>span:nth-child(1),.frame_b_right>span:nth-child(1){
              color #888;
            }
          }
        }
      }
    }
    .tion_1{
     .sce_1{
       width: 100%;
       margin-top: 85px;
       background: #fff;
       border-radius: 15px;
       -webkit-box-sizing: border-box;
       box-sizing: border-box;
       padding: 10px 20px;
       > ul{
         li:nth-child(1){
           border-bottom 1px solid #dedede;
         }
         li{
           display flex;
           justify-content space-between;
           .frame_left{
             p{
               font-size 17px;
               font-weight 600;
               padding 5px 5px 8px 5px;
             }
           }
           .frame_right{
             >p{
               text-align center;
               font-size 13px;
               color #888;
               padding 2px 17px 8px 5px;
               position relative;
               span{
                 position absolute;
                 top -1px;
                 right 0;
                 width 10px;
                 height 17px;
                 display inline-block;
                 background url("./images/16_06.png") no-repeat;
                 background-size: 8px 14px;
                 background-position-y 3px;
               }
             }
           }
         }
         li:nth-child(2){
           padding 10px 0;
           dl{
             width 100%;
             display flex;
             justify-content: space-between;
             dd{
               flex 1 1 auto;
               flex-direction wrap;
               .d_img{
                 width: 28px;
                 height: 27px;
                 margin: 0 auto;
                 border-radius: 30px;
                 margin-bottom: 5px;
                 order: 1;
                }
               .d_img_2{
                 height 25px;
                 margin-bottom: 7px;
               }
               p{
                 color: #666;
                 text-align center;
                 font-size 14px;
               }
             }
           }
         }
       }
     }
    }
    .tion_2{
      .sec_2{
        width: 100%;
        margin-top 12px
        background: #fff;
        border-radius: 15px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 15px 20px;
        ul{
          li:nth-child(1){
            padding 0!important;
            border none!important;
            display flex;
            margin-bottom 10px;
            >div{
              height 70px;
              box-sizing border-box;
              flex 1 1 auto;
              background #69c9f1;
              border-radius 20px;
            }
            .cont_left{
              background url("./images/29_03.png")
              background-size cover;
            }
            .cont_right{
              background url("./images/30_03.png")
              background-size cover;
            }
            div:nth-child(1){
              border-top-right-radius 5px;
            }
            div:nth-child(2){
              border-top-left-radius 5px;
              margin-left 10px;
            }
          }
          li{
            display flex;
            justify-content space-between;
            border-bottom 1px solid #ececec;
            padding 10px 0 13px 0
            p{
              font-size 15px;
              color #666;
            }
            span{
              width: 10px;
              height: 17px;
              background: url("images/16_06.png") no-repeat;
              background-size: 8px 14px;
              background-position-y: 3px;
            }
          }
          li:nth-child(4){
            border none;
            padding-bottom 7px;
          }
        }
      }
    }
</style>

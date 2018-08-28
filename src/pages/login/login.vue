<template>
  <section class="Sign">
    <header>
      <a href="javascript:;" @click=" routerGo"></a>
      <p>登录</p>
    </header>
    <div class="form">
      <figure><p>品优堂</p></figure>
      <form>
        <label>
          <input type="text" placeholder="手机号码">
        </label>
        <label>
          <input type="text" placeholder="验证码">
          <p v-show="sendAuthCode"  @click="getAuthCode">获取验证码</p>
          <p v-show="!sendAuthCode" class="auth_text_blue"> <span>{{auth_time}}</span> 秒</p>
        </label>
        <div class="form_register">还未注册？<span @click="routerGo2('/register')">去注册</span></div>
        <div class="btn_Sign">登录</div>
      </form>
      <footer>
        <p>第三方登录</p>
        <div class="foot">
          <span>
            <img src="./images/14.1.jpg" alt="">
          </span>
          <div>微信</div>
        </div>
        <div class="foot">
          <span>
            <img src="./images/14.1.jpg" alt="">
          </span>
          <div>微信</div>
        </div>
      </footer>
    </div>
  </section>
</template>

<script>
  export default {
    data(){
        return{
          sendAuthCode:true,
          auth_time: 0
        }
    },
    methods: {
      routerGo() {
        this.$router.go(-1)
      },
      routerGo2(url) {
        this.$router.push(url);
      },
      //倒计时
      getAuthCode:function () {
        this.sendAuthCode = false;
        this.auth_time = 6;
        var auth_timetimer =  setInterval(()=>{
          this.auth_time--;
          if(this.auth_time<=0){
            this.sendAuthCode = true;
            clearInterval(auth_timetimer);
          }
        }, 1000);
      }
    }
  }
</script>

<style  lang="stylus"  rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .Sign //我的
    width 100%
    position fixed;
    top 0;
    left 0;
    bottom 0;
    right 0;
    z-index 10001
    background #fff;
    overflow hidden
    header{
      display flex;
      background #111111
      justify-content center;
      align-content: flex-start
      position relative;
      a{
        width 10px;
        height: 20px;
        position absolute;
        top 10px
        left 5px
        background #00b43c;
      }
      p{
        line-height 40px;
        font-size 17px;
        display inline-block;
        color rgb(132,102,18);
      }
    }
    .form{
      width 100%;
      height 100%;
      /*background #ccc;*/
      box-sizing border-box;
      padding 0 60px;
      figure{
        width 60px;
        height 60px;
        background #000;
        border-radius 12px;
        position absolute;
        left 50%;
        top 13%;
        transform translate(-50%,-13%);
        p{
          text-align center;
          line-height:60px;
          font-size 16px;
          color #e8c436
        }
      }
      form{
        padding-top 150px;
        display flex;
        flex-wrap wrap;
        position relative;
        label{
          width 100%;
          border-bottom 1px solid #ededed;
          height 35px;
          input{
            outline: none;
            width 100%;
            height 100%;
            font-size 14px;
            border none;
            background:none;
          }
        }
        label:nth-child(2){
          margin-top 30px;
          display flex;
          input{
            flex 1 1 auto
          }
          .auth_text_blue{
            flex 1 1 70px;
            background none;
            border 1px solid #e4e4e4;
            font-size 13px;
            color #bebebe;
          }
          p{
            flex: 1 1 130px;
            background: #fbc422;
            line-height: 23px;
            text-align: center;
            height: 25px;
            border-radius: 18px;
            font-size: 13px;
          }
        }
        .form_register{
          font-size 14px;
          color #999999;
          position absolute;
          right 0
          top 260px;
          span{
            color #e6c342;
          }
        }
        .btn_Sign{
          width 100%;
          height 40px;
          color #fff;
          font-size 16px;
          text-align center;
          line-height 40px;
          border-radius 30px;
          background #111111;
          margin-top 70px;
        }
      }
      footer{
        margin-top 70px;
        width 100%;
        position relative;
        display flex;
        justify-content space-around;
        p{
          font-size 14px;
          color #999999;
          text-align center;
          position absolute;
          right 0
          left 0
          top 0;
        }
        .foot{
          width 20%;
          display flex;
          flex-direction column
          div{
            margin-top 9px;
            text-align center;
            font-size 14px;
          }
          span{
            margin-top 50px;
            display flex
            width 100%;
            img{
              width 100%;
              height 100%;
            }
          }
        }
      }
    }
</style>

<template>
  <section class="register">
    <header>
      <a href="javascript:;" @click=" routerGo"></a>
      <p>注册会员</p>
    </header>
    <div class="form">
      <figure><p>品优堂</p></figure>
      <form>
        <label>
          <input type="text" placeholder="昵称">
        </label>
        <label>
          <input type="text" placeholder="请输入手机号">
        </label>
        <label class="lab">
          <input type="text" placeholder="发送手机验证码">
          <p v-show="sendAuthCode"  @click="getAuthCode">获取验证码</p>
          <p v-show="!sendAuthCode" class="auth_text_blue"> <span>{{auth_time}}</span> 秒</p>
        </label>
        <label>
          <input type="text" placeholder="请输入推荐码">
        </label>
        <div class="form_register">已注册？<span>去登录</span></div>
        <div class="box box_">
          <input type="checkbox" checked  id="checkbox1"/>
          <label for="checkbox1">同意并注册 <span>《查看协议》</span></label>
        </div>
        <div class="btn_Sign">登录</div>
      </form>
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
      },
    },
    mounted:function(){
      this.$jsonp('http://192.168.1.223/mobile/pv/goods.htm',
        {
          // "mobile":"18519123199",
          // "password":"123456"
          "goods_id":98499
        }
      ).then(json => {
        json.header("Access-Control-Allow-Origin:*");
        console.log("aaa");
        // 返回数据 json， 返回的数据就是json格式
      }).catch(err => {
        console.log(err)
      })

    }
  }
</script>

<style  lang="stylus"  rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .register //我的
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
        .box_ label{
          border-bottom none;
        }
        label{
          width 100%;
          margin-bottom: 25px;
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
        label.lab{
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
          top 380px;
          span{
            color #e6c342;
          }
        }
        .box{
          font-size 13px;
          margin 0 auto;
          margin-top 70px;
          input{
            outline: none;
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
          margin-top 10px;
        }
      }
    }
</style>

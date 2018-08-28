<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #111;
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 0px
      color: rgba(255, 250, 250, 0.6);
      &.on
        color rgb(226,181,2)
      span
        font-size 12px
        margin-top 4px
        margin-bottom 0
        .iconfont
          font-size 22px
        .iconname{
          display flex;
          width: 20px;
          height: 22px;
          .img_{
            width 100%;
            height 100%;
          }
        }
      .item_icon{
        margin-top 7px;
      }
</style>

<template>
  <div class="footer_guide">
    <span class="guide_item" :class="{on: '/Msite/nav_1'===$route.path}" @click="goTo('/Msite/nav_1')">
      <span class="item_icon">
        <i class="iconname">
          <img v-if="'/Msite/nav_1'===$route.path" class="img_" src="./images/index_178.png" alt="">
          <img v-else class="img_" src="./image/index_8.png" alt="">
        </i>
      </span>
      <span>首页</span>
    </span>
    <a href="javascript:;" class="guide_item" :class="{on: '/classification'===$route.path}" @click="goTo('/classification')">
      <span class="item_icon">
        <i class="iconname">
          <img v-if="'/classification'===$route.path" class="img_" src="./images/index_182.png" alt="">
          <img v-else class="img_" src="./image/index_9.png" alt="">
        </i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/details'===$route.path}" @click="goTo('/details')">
      <!--Shopping_Cart-->
      <span class="item_icon">
        <i class="iconname">
          <img v-if="'/details'===$route.path" class="img_" src="./images/index_186.png" alt="">
          <img v-else class="img_" src="./image/index_10.png" alt="">
        </i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/profile'===$route.path}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconname">
          <img v-if="'/profile'===$route.path" class="img_" src="./images/index_190.png" alt="">
          <img v-else class="img_" src="./image/index_11.png" alt="">
        </i>
      </span>
      <span>购物分享</span>
    </a>
    <!--<a href="javascript:;" class="guide_item" :class="{on: '/Personal_Center'===$route.path}" @click="goTo('/Personal_Center')">-->
    <a href="javascript:;" class="guide_item" :class="{on: '/Personal_Center'===$route.path}" @click="goTo('/Personal_Center')">
      <span class="item_icon">
        <i class="iconname">
          <img v-if="'/Personal_Center'===$route.path" class="img_" src="./images/index_195.png" alt="">
          <img v-else class="img_" src="./image/index_12.png" alt="">
        </i>
      </span>
      <span>个人中心</span>
    </a>
  </div>
</template>

<script>
  export default {
    methods: {
      goTo (path) {
        this.$router.replace(path);
      }
    }
  }
</script>

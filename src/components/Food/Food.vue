<template>
  <div class="food">
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
      <div class="hou list-content" v-show="listShow">
        <div class="action_img">
          <a href="javascript:;"><img src="images/5_06.png" alt=""></a>
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
    </footer>
    <div class="huabu" @click="toggleShow"  v-show="listShow">
      <!--暗画布-->
    </div>
  </div>
</template>
<script>

  export default {
    props: {
      food: Object
    },
    data () {
      return {
        isShow: false
      }
    },

    methods: {
      toggleShow () {
        this.isShow = !this.isShow
      }
    },
    components: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .food

</style>

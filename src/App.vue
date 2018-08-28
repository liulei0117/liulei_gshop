<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    background #f5f5f5
</style>

<template>
  <div id="app">
    <FooterGuide></FooterGuide>
    <router-view></router-view>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import {mapActions} from 'vuex'
  export default {
    mounted () {
      // this.$store.dispatch('getAddress')
      this.getAddress();
      this.getUserInfo()
    },
    methods: {
      ...mapActions(['getAddress', 'getUserInfo'])  //把vuex的东西全部引入 并添加getAddress方法
    },
    components: {
      FooterGuide
    }
    // ,   测试数据回来没有
    // async mounted(){
    //   const resulut =  await  reqFoodCategorys()
    //   console.log(resulut)
    // }
  }
</script>

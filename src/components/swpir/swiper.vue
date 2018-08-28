<style scoped lang='stylus'>
	.swiper-container{
		img{
			width: 100%;
      height 100%;
		}
	}

</style>
<template>
    <div>
        <div class="swiper-container" id="swiper-container1">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in swiperArr">
					          <img :src="item.imgUrl" alt="">
               	</div>
            </div>
            <!-- 如果需要分页器 -->
          <div class="swiper-pagination swiper-pagination-white " id="swiper_f"></div>
        </div>
    </div>
</template>
<script>
  import Swiper from "../../../resource/js/swiper-3.4.2.min.js"
  import 'swiper/dist/css/swiper.min.css'
export default {
	props:["swiperArr"],
    data() {
        return {}
    },
    mounted() {
        var mySwiper = new Swiper('#swiper-container1', {
          loop: true,
          autoplay:1000,
          autoplayDisableOnInteraction : false,  /* 注意此参数，默认为true */
          // 如果需要分页器
          pagination: '.swiper-pagination'
        });
    },
}

</script>

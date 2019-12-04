<template>
  <div class="gallery">
      <div class="gridWrap">
          <div class="w12">
              gallery
              <swiper :options="gallerySwiperOptions" ref="galleryswiper">
                  <!-- slides -->
                  <swiper-slide>I'm Slide 1</swiper-slide>
                  <swiper-slide>I'm Slide 2</swiper-slide>
                  <swiper-slide>I'm Slide 3</swiper-slide>
                  <swiper-slide>I'm Slide 4</swiper-slide>
                  <swiper-slide>I'm Slide 5</swiper-slide>
                  <swiper-slide>I'm Slide 6</swiper-slide>
                  <swiper-slide>I'm Slide 7</swiper-slide>
                  <!-- Optional controls -->
                  <div class="swiper-pagination"  slot="pagination"></div>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
              </swiper>
          </div>
      </div>
  </div>
</template>

<script>
export default {
     props: [],
    data(){
         return {
             gallerySwiperOptions: {
                 navigation: {
                     nextEl: '.swiper-button-next',
                     prevEl: '.swiper-button-prev'
                 },
                 pagination: {
                     el: '.swiper-pagination',
                     type: 'bullets'
                 }
             }
         }
    },
     methods: {
    }
}
</script>
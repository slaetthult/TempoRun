<template>
  <div class="gallery">
      <div class="gridWrap">
          <div class="w12">

              <h2>Gallery Example</h2>
              <swiper :options="gallerySwiperOptions" ref="galleryswiper">
                  <swiper-slide>
                      <picture>
                          <source media="(min-width: 650px)" srcset="https://via.placeholder.com/1920x300">
                          <source media="(min-width: 465px)" srcset="https://via.placeholder.com/1920x300">
                          <img src="https://via.placeholder.com/1920x300" alt="alt">
                      </picture>
                  </swiper-slide>
                  <swiper-slide>
                      <picture>
                          <source media="(min-width: 650px)" srcset="https://via.placeholder.com/1920x300">
                          <source media="(min-width: 465px)" srcset="https://via.placeholder.com/1920x300">
                          <img src="https://via.placeholder.com/1920x300" alt="alt">
                      </picture>
                  </swiper-slide>
                  <swiper-slide>
                      <picture>
                          <source media="(min-width: 650px)" srcset="https://via.placeholder.com/1920x300">
                          <source media="(min-width: 465px)" srcset="https://via.placeholder.com/1920x300">
                          <img src="https://via.placeholder.com/1920x300" alt="alt">
                      </picture>
                  </swiper-slide>
                  <div class="swiper-pagination"  slot="pagination"></div>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
              </swiper>

              <a href="javascript:void(0);" data-modalbox-trigger @click="showModalbox(0)">Modalbox Trigger</a>
              <portal to="portaldestination">
                  <div class="modalbox" data-modalbox="0" v-click-outside="closeModalbox">
                      I am a modalbox!
                      <a href="javascript:void(0);" @click="closeModalbox()">close Modalbox</a>
                  </div>
              </portal>

          </div>
      </div>
  </div>
</template>

<script>
    import modalbox from "../../mixins/modalbox";

    export default {
        props: [],
        mixins: [modalbox],
        data(){
             return {
                 gallerySwiperOptions: {
                     slidesPerView: 1,
                     loop: true,
                     navigation: {
                         nextEl: '.swiper-button-next',
                         prevEl: '.swiper-button-prev'
                     },
                     pagination: {
                         el: '.swiper-pagination',
                         type: 'bullets' /* 'fraction' if you want numbers instead */
                     },
                     breakpoints: {
                         1024: {
                             slidesPerView: 2
                         },
                         640: {
                             slidesPerView: 1
                         }
                     }
                 }
             }
        }
    }
</script>
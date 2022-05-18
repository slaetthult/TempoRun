<template>
  <div class="gallery">
      <div class="grid-wrap">
          <div class="w12">

              <h2>Gallery Example</h2>
              <client-only>

                  <swiper :options="gallerySwiperOptions" ref="galleryswiper">
                      <swiper-slide>
                          <picture>
                              <source media="(min-width: 768px)" srcset="https://via.placeholder.com/480x144">
                              <source srcset="https://via.placeholder.com/480x144">
                              <img src="https://via.placeholder.com/480x144" alt="alt">
                          </picture>
                      </swiper-slide>
                      <swiper-slide>
                          <picture>
                              <source media="(min-width: 768px)" srcset="https://via.placeholder.com/480x144">
                              <source srcset="https://via.placeholder.com/480x144">
                              <img src="https://via.placeholder.com/480x144" alt="alt">
                          </picture>
                      </swiper-slide>
                      <swiper-slide>
                          <picture>
                              <source media="(min-width: 768px)" srcset="https://via.placeholder.com/480x144">
                              <source srcset="https://via.placeholder.com/480x144">
                              <img src="https://via.placeholder.com/480x144" alt="alt">
                          </picture>
                      </swiper-slide>
                      <div class="swiper-pagination"  slot="pagination"></div>
                      <div class="swiper-button-prev" slot="button-prev"></div>
                      <div class="swiper-button-next" slot="button-next"></div>
                  </swiper>

                  <a href="javascript:void(0);" data-modalbox-trigger @click="showModalbox(0)">Modalbox Trigger</a>

                  <client-only>
                      <portal to="portal-destination">
                          <div class="modalbox" data-modalbox="0" v-click-outside="closeModalbox">
                              I am a modalbox!
                              <a href="javascript:void(0);" @click="closeModalbox()">close Modalbox</a>
                          </div>
                      </portal>
                  </client-only>

              </client-only>

          </div>
      </div>
  </div>
</template>

<script>
    import modalbox from "~/mixins/modalbox";
    import mediaQueries from "~/mixins/mediaqueries";

    export default {
        props: [],
        mixins: [modalbox, mediaQueries],
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
        },
      mounted(){
          console.log(this.mediaQueries['lw']);
      }
    }
</script>

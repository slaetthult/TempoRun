<template>

    <div v-if="showCookieBanner" class="cookie-banner">
      <div class="cookie-banner__layer">
        <div class="grid-wrap">
          <div class="cookie-banner__layer__text w12 mw6 lw6">
            <p>
              This website is using cookies.
            </p>
          </div>
          <div class="cookie-banner__layer__actions w12 mw6 lw6">
            <button @click="acceptAll()" class="cookie-banner__layer__actions__accept-all">Accept all cookies</button>
            <button @click="acceptFunctionals()" class="cookie-banner__layer__actions__accept-functionals">Accept technical cookies</button>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import {getCookieValueOf, setCookie, deleteCookie} from '~/utils/cookies';

export default {
    props: [],
    data(){
        return {

          showCookieBanner: false

        }
    },
    mounted(){

      this.showInitially();

    },
    methods: {

      showInitially(){

        const _this = this;
        this.showCookieBanner = !getCookieValueOf('cookiesAcceptedAll') && !getCookieValueOf('cookiesAcceptedFunctionals');

        this.$nextTick(() => {

          if(_this.showCookieBanner){

            _this.ensureVisibleFooter();

          }

        });

      },

      acceptAll(){

        setCookie('cookiesAcceptedAll', 'true');
        this.showCookieBanner = false;

      },

      acceptFunctionals(){

        setCookie('cookiesAcceptedFunctionals', 'true');
        this.showCookieBanner = false;

      },

      ensureVisibleFooter(){

        const cookieBannerLayerHeight = this.$el.querySelectorAll(".cookie-banner__layer")[0].offsetHeight;

        this.$el.style.height = cookieBannerLayerHeight + 'px';

      }

    }
}
</script>

<style lang="scss" scoped>

  .cookie-banner__layer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px 0;
    background: $color-white;
    z-index: $z-index-10;
    border-top: 1px solid $color-lightgrey;
  }

</style>

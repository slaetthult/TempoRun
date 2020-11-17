<template>

    <div v-if="showCookieBanner" class="cookiebanner" data-js="cookiebanner">
      <div class="gridWrap">
        <div class="cookiebanner-text w12 mw6 lw6">
          <p>
            This website is using cookies.
          </p>
        </div>
        <div class="cookiebanner-actions w12 mw6 lw6">
          <button @click="acceptAll()" class="cookiebanner-actions-accept-all">Accept all cookies</button>
          <button @click="acceptFunctionals()" class="cookiebanner-actions-accept-functionals">Accept technical cookies</button>
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

          showCookieBanner : false

        }
    },
    mounted(){

      this.showInitially();

    },
    methods: {

      showInitially(){

        this.showCookieBanner = !getCookieValueOf('cookiesAcceptedAll') && !getCookieValueOf('cookiesAcceptedFunctionals');

      },

      acceptAll(){

        setCookie('cookiesAcceptedAll', 'true');
        this.showCookieBanner = false;

      },

      acceptFunctionals(){

        setCookie('cookiesAcceptedFunctionals', 'true');
        this.showCookieBanner = false;

      }

    }
}
</script>

<style lang="scss" scoped>

  .cookiebanner {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px 0;
    background: $color-white;
    z-index: 999;
    border-top: 1px solid $color-lightgrey;
  }

</style>

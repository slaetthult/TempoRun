<template>
  <header class="site-header">
      <div class="grid-wrap">
          <div class="w12">
              <span class="h2">{{ $t('siteHeader.headline') }}</span>
              <label>
                <input class="site-header__search" type="search">
              </label>
              <button v-focus-input="'.site-header__search'">Focus search input</button>
              <site-navigation/>
          </div>
      </div>
  </header>
</template>

<script>
    export default {
      props: [],
        data(){
             return {

             }
        }
    }
</script>

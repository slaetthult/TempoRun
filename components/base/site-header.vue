<template>
  <header class="site-header">
      <div class="grid-wrap">
          <div class="w12">
              <span class="h2">{{ $t('siteHeader.headline') }}</span>
              <input class="site-header__search" type="search">
              <button v-focus-input="'.siteheader-search'">Focus search input</button>
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

<template>
  <header class="siteheader">
      <div class="gridWrap">
          <div class="w12">
              <span class="h2">{{ $t('siteheader.headline') }}</span>
              <input class="siteheader-search" type="search">
              <button v-focus-input="'.siteheader-search'">Focus search input</button>
              <sitenavigation/>
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

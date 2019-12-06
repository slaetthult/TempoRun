<template>
  <header class="siteheader">
      <div class="gridWrap">
          <div class="w12">
              <h1 class="h2">Header Area with Navigation</h1>
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
<template>
  <header class="siteheader">
      <div class="gridWrap">
          <div class="w12">
              <h1 class="h2">Header Area with Navigation</h1>
              <input class="siteheader-search" type="search">
              <button @click="focusInput('.siteheader-search')">Focus search input</button>
              <sitenavigation/>
          </div>
      </div>
  </header>
</template>

<script>
    import focusInput from "../../mixins/focus-input";

    export default {
        props: [],
        mixins: [focusInput],
        data(){
             return {

             }
        }
    }
</script>
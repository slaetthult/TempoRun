<template>
  <header class="siteheader">
      <div class="gridWrap">
          <div class="w12">
              <h1 class="h2">Header Area with Navigation</h1>
              <input class="siteheader-search" type="search">
              <button @click="focusSearchField()">Focus search input</button>
              <sitenavigation/>
          </div>
      </div>
  </header>
</template>

<script>
    import { focusAndOpenKeyboard } from "../../mixins/focus-and-open-keyboard";

    export default {
         props: [],
        data(){
             return {

             }
        },
         methods: {
            focusSearchField(){
                focusAndOpenKeyboard(this.$el.querySelector(".siteheader-search"));
            }
        }
    }
</script>
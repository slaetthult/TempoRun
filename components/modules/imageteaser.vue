<template>
  <div class="imageteaser">
      <div class="gridWrap">

          <div class="w12 mw12 lw12">

              <h2>ImageTeaser with lazyload Example</h2>

              <figure>
                  <picture>
                      <source media="(min-width: 650px)" data-srcset="https://via.placeholder.com/1920x300">
                      <source media="(min-width: 465px)" data-srcset="https://via.placeholder.com/1920x300">
                      <img data-src="https://via.placeholder.com/1920x300" alt="alt" class="lazyload">
                  </picture>
              </figure>

          </div>

      </div>
  </div>
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
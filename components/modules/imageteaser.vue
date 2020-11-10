<template>
  <div class="imageteaser">
      <div class="gridWrap">

          <div class="w12 mw12 lw12">

              <h2>ImageTeaser with lazyload Example</h2>

              <figure>
                <v-lazy-image
                  src="https://via.placeholder.com/1920x300"
                  alt="Fallback"
                  use-picture
                >
                  <source media="(min-width: 1000px)" srcset="https://via.placeholder.com/1920x300" />
                  <source srcset="https://via.placeholder.com/1000x300" />
                </v-lazy-image>
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

<template>
  <div class="image-teaser">
      <div class="grid-wrap">

          <div class="w12 mw12 lw12">

              <h2>ImageTeaser with lazyload Example</h2>

              <figure>
                <v-lazy-image
                  src="https://via.placeholder.com/960x150"
                  alt="Fallback"
                  use-picture
                >
                  <source media="(min-width: 1000px)" srcset="https://via.placeholder.com/960x150" />
                  <source srcset="https://via.placeholder.com/480x100" />
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

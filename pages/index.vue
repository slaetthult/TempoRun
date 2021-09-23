<template>

  <div>

    <div class="grid-example">
      <div class="grid-wrap">
        <h1 class="w12">Start your projects with Nuxt Run!</h1>
        <h2 class="w12">Grid Example</h2>
        <div class="w12" style="background: lightgrey;margin-top:5px;">w12</div>
        <div class="w4" style="background: lightgrey;margin-top:5px;">w4</div>
        <div class="w8" style="background: lightgrey;margin-top:5px;">w8</div>
        <div class="w4 w-left-4" style="background: lightgrey;margin-top:5px;">w4 w-left-4</div>
        <div class="w4" style="background: lightgrey;margin-top:5px;">w4</div>
      </div>
    </div>

    <faqAccordion/>

    <formExample/>

    <gallery/>

  </div>

</template>

<script>

export default {
    head() {
        return {
            title: this.$t("headData.index.title"),
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.$t("headData.index.description")
                }
            ]
        }
    }
}
</script>

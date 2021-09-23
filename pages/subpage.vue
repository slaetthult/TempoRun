<template>

  <div>

    <div class="text">
      <div class="grid-wrap">
        <div class="w12">
          <h1>Unterseite</h1>
        </div>
      </div>
    </div>

    <gmap/>

    <lazy-street-map/>

  </div>

</template>

<script>

export default {
    head() {
        return {
            title: this.$t("headData.subpage.title"),
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.$t("headData.subpage.description")
                }
            ]
        }
    }
}
</script>

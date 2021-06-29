<template>

  <div>

    <div class="text">
      <div class="gridWrap">
        <div class="w12">
          <h1>Unterseite</h1>
        </div>
      </div>
    </div>

    <gmap/>

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

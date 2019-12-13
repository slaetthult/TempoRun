<template>
  <div>
    <siteheader/>
    <main class="sitemain">
      <nuxt/>
    </main>
    <sitefooter/>
    <portal-target name="portaldestination" class="siteportaldestination"></portal-target>
  </div>
</template>
<script>
export default {
    head() {
        return {
            htmlAttrs: {
                lang: this.$i18n.locale
            }
        }
    }
}
</script>
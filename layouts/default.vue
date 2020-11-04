<template>
  <div onclick="void(0);">
    <siteheader/>
    <main class="sitemain">
      <nuxt/>
    </main>
    <sitefooter/>

    <client-only>
      <portal-target name="portaldestination" class="siteportaldestination"></portal-target>
    </client-only>

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

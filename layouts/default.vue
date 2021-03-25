<template>

  <div onclick="void(0);">

    <SiteHeader/>

    <main class="site-main">

      <nuxt/>

    </main>

    <LazySiteFooter/>

    <LazyCookieBanner/>

    <client-only>
      <portal-target name="portal-destination" class="site-portal-destination" multiple></portal-target>
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

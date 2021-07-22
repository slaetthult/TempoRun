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

    <script v-html="jsonld" type="application/ld+json"></script>

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
    },
  data () {
    const jsonld = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Nuxt Run",
      "legalName" : "Nuxt Run"
    }
    return {
      jsonld
    }
  }
}
</script>

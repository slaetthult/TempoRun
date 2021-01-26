<template>
  <nav class="sitenavigation">
    <ul>
      <li>
        <nuxt-link :to="localePath('index')">Index</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('subpage')">Subpage</nuxt-link>
      </li>
    </ul>
    <span class="h2">Lang navigation</span>
    <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
    <nuxt-link :to="switchLocalePath('de')">Deutsch</nuxt-link>
  </nav>
</template>

<script>
export default {
     props: [],
     methods: {

    }
}
</script>

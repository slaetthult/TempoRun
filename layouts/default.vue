<script setup>
	useJsonld({
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Nuxt-Run-3"
	});
</script>

<template>
  <SiteHeader/>
  <main class="site-main">
    <slot />
  </main>
  <SiteFooter/>
	<PortalTarget name="portal-target" />
</template>

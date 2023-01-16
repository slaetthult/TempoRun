<script setup>

</script>

<template>
	<div class="grid-test">
		<div class="grid-wrap">
			<div class="w12 lw24">
				<h1>Welcome to Nuxt-Run with Nuxt-3!</h1>
				<h2>Grid Example</h2>
			</div>
			<div class="w12 lw24" style="margin-bottom: 10px;border:1px solid grey;">w12 lw24</div>
			<div class="w12 lw12" style="margin-bottom: 10px;border:1px solid grey;">w12 lw12</div>
			<div class="w12 lw12" style="margin-bottom: 10px;border:1px solid grey;">w12 lw12</div>
			<div class="w12 lw6 lw-start-7" style="margin-bottom: 10px;border:1px solid grey;">w12 lw6 lw-start-7</div>
			<div class="w12 lw12" style="margin-bottom: 10px;border:1px solid grey;">w12 lw12</div>
			<div class="w12 lw6" style="margin-bottom: 10px;border:1px solid grey;">w12 lw6</div>
			<div class="w12">
				<a href="#" v-scroll-to="{
				 el: '.site-footer',
				 duration: 500,
				 lazy: false,
				 easing: 'linear',
				 offset: -200,
				 force: true,
				 cancelable: true,
				 x: false,
				 y: true
			 }">
					Scroll to site footer
				</a>
			</div>
		</div>
	</div>

</template>

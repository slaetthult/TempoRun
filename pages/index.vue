<script setup>
	const counter = useCookie('counter');
	counter.value = counter.value || Math.round(Math.random() * 1000);
</script>

<template>
  <div>
	  <div class="grid-wrap">
		  <div class="w12">
			  <a href="#" v-scroll-to="{ el: '#map', offset: -170 }">
				  Scroll to map
			  </a>
		  </div>
	  </div>
	  <LazyContentText/>
	  <ContentForm/>
	  <LazyFaqAccordion/>
	  <LazyGallery/>
	  <LazyGMap/>
	  <div class="grid-wrap">
		  <div class="w12 lw24">
			  <a href="javascript:void(0);" data-modalbox-trigger @click="showModalbox(0)">Modalbox 1 Trigger</a><br>
			  <a href="javascript:void(0);" data-modalbox-trigger @click="showModalbox(1)">Modalbox 2 Trigger</a>
			  <Portal to="portal-target">
				  <Modalbox id="0">
					  Modalbox 1 content
				  </Modalbox>
				  <Modalbox id="1">
					  Modalbox 2 content
				  </Modalbox>
			  </Portal>
			  <h1>Counter: {{ counter || '-' }}</h1>
			  <button @click="counter = null">reset</button>
			  <button @click="counter--">-</button>
			  <button @click="counter++">+</button>
		  </div>
	  </div>
  </div>
</template>

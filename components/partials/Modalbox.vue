<script setup>
	const props = defineProps({ id: String });
</script>

<template>
	<div class="modalbox" :data-modalbox="id" v-click-outside="closeModalbox">
		<slot/>
		<a href="javascript:void(0);" @click="closeModalbox()">close Modalbox</a>
	</div>
</template>

<script setup>
	import { useVuelidate } from '@vuelidate/core'
	import { required, email } from '@vuelidate/validators'


	const state = ref({
		name: '',
		color: ''
	})

	const rules = {
		name: { required },
		color: { required }
	}

	const formValidation = useVuelidate(rules, state)


</script>

<template>
	<div class="content-form">
		<div class="grid-wrap">
			<div class="form w12 lw24">
				<h2>Form example</h2>
				<div :class="{ error: formValidation.name.$errors.length }">
					<input type="text" v-model="state.name" @input="formValidation.name.$touch">
					<small>Required</small>
				</div>
				<div :class="{ error: formValidation.color.$errors.length }">
					<input type="text" v-model="state.color" @input="formValidation.color.$touch">
					<small>Required</small>
				</div>
			</div>
		</div>
	</div>
</template>


<script setup>
	import { useVuelidate } from '@vuelidate/core';
	import { required, email, minLength, sameAs } from '@vuelidate/validators';

	const state = ref({
		country: '',
		gender: '',
		firstName: '',
		lastName: '',
		email: '',
		message: '',
		password: '',
		confirmPassword: '',
		privacyPolicy: ''
	});

	const rules = {
		country: { required },
		gender: { required },
		firstName: { required },
		lastName: { required },
		email: { required, email },
		message: { minLength: minLength(20) },
		password: { required, minLength: minLength(6) },
		confirmPassword: {
			required,
			sameAs : sameAs( computed(() => state.value.password) )
		},
		privacyPolicy: { sameAs: sameAs(true) },
	};

	const formValidation = useVuelidate(rules, state);

</script>

<template>
	<div class="content-form">
		<div class="grid-wrap">
			<div class="w12 lw24">
				<h2>Form example</h2>
				<div class="form grid-wrap">

					<div class="select w12 lw24" :class="{ 'form__error': formValidation.country.$errors.length }">
						<label>
							<select class="selectbox" name="country" v-model="state.country" @change="formValidation.country.$touch">
								<option disabled selected value="">Choose country</option>
								<option value="england">England</option>
								<option value="germany">Germany</option>
							</select>
							<small>Pflichtfeld!</small>
						</label>
					</div>

					<div class="radiobox w12 lw24" :class="{ 'form__error': formValidation.gender.$errors.length }">
						<label>
							<input type="radio" name="gender" value="male" v-model="state.gender" @input="formValidation.gender.$touch">
							<span>Male</span>
						</label>
					</div>
					<div class="radiobox w12 lw24" :class="{ 'form__error': formValidation.gender.$errors.length }">
						<label>
							<input type="radio" name="gender" value="female" v-model="state.gender" @input="formValidation.gender.$touch">
							<span>Female</span>
							<small>Required</small>
						</label>
					</div>
					<div class="input w12" :class="{ 'form__error': formValidation.firstName.$errors.length }">
						<label>
							First Name:
							<input type="text" v-model="state.firstName" @input="formValidation.firstName.$touch">
							<small>Required</small>
						</label>
					</div>
					<div class="input w12" :class="{ 'form__error': formValidation.lastName.$errors.length }">
						<label>
							Last name:
							<input type="text" v-model="state.lastName" @input="formValidation.lastName.$touch">
							<small>Required</small>
						</label>
					</div>
					<div class="input w12 lw8" :class="{ 'form__error': formValidation.email.$errors.length }">
						<label>
							Email:
							<input type="email" v-model="state.email" @input="formValidation.email.$touch">
							<small>Required</small>
						</label>
					</div>
					<div class="textarea w12 form__w-start-new-row" :class="{ 'form__error': formValidation.message.$errors.length }">
						<label>
							Message:
							<textarea v-model="state.message" @input="formValidation.message.$touch"></textarea>
							<small>Required</small>
						</label>
					</div>
					<div class="input w12 form__w-start-new-row" :class="{ 'form__error': formValidation.password.$errors.length }">
						<label>
							Password:
							<input type="password" v-model="state.password" @input="formValidation.password.$touch">
							<small>Required</small>
						</label>
					</div>
					<div class="input w12" :class="{ 'form__error': formValidation.confirmPassword.$errors.length }">
						<label>
							Confirm password:
							<input type="password" v-model="state.confirmPassword" @input="formValidation.confirmPassword.$touch">
							<small>Required</small>
						</label>
					</div>
					<div class="checkbox w12 lw24" :class="{ 'form__error': formValidation.privacyPolicy.$errors.length }">
						<label>
							<input type="checkbox" v-model="state.privacyPolicy" @input="formValidation.privacyPolicy.$touch">
							<span>A beautiful checkbox with a <nuxt-link to="/">link</nuxt-link></span>
							<small>Pflichtfeld!</small>
						</label>
					</div>
					<div class="w12 lw24">
						<button @click="formValidation.$touch">Send</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


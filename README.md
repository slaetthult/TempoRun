# Nuxt Run vue3
  
> Starter kit for nuxt projects with usefull features for fast development.

## Requirements
node at least v16.19.1 and npm v8.19.3


## Build Setup

``` bash
# install dependencies
$ npm install

For detailed explanation on how things work in nuxt, check out [Nuxt.js docs](https://nuxt.com/docs).
```

## Demo

https://nuxt-run.netlify.app/

## Essential Elements
### The grid (css-grid)

The grid class contains the shortname of the viewport (defined in config.scss) and the amount of grids:<br>
{viewport}{gridamount} -> "w12".<br>
If you want to move certain grid-elements, use "w-start-4" {viewport}-start-{gridamount}. In this case
the element will be positioned at the fourth column.
Grid-Elements are directly wrapped by the class "grid-wrap".
``` bash
<div class="grid-wrap">
    <h1 class="w12">Start your projects with Nuxt Run!</h1>
    <h2 class="w12">Grid Example</h2>
    <div class="w12" style="background: lightgrey;">w12</div>
    <div class="w4" style="background: lightgrey;">w4</div>
    <div class="w6 w-start-7" style="background: lightgrey;">w6 w-start-7</div>
    <div class="w4 w-start-5 lw8" style="background: lightgrey;">w4 w-start-5 lw8</div>
    <div class="w4 w-start-5 lw-start-auto" style="background: lightgrey;">w4 w-start-5 lw-start-auto</div>
    <div class="w4" style="background: lightgrey;">w4</div>
</div>
```

### Accordion
You can use the accordioans right away.
For more information: https://github.com/dafcoe/vue-collapsible-panel

```
<vue-collapsible-panel-group accordion>
    <vue-collapsible-panel :expanded="false">
        <template #title>
            Accordion title 1
        </template>
        <template #content>
            <div>
                Accordion text 1
            </div>
        </template>
    </vue-collapsible-panel>
    <vue-collapsible-panel :expanded="false">
        <template #title>
            Accordion title 1
        </template>
        <template #content>
            <div>
                Accordion text 1
            </div>
        </template>
    </vue-collapsible-panel>
    <vue-collapsible-panel :expanded="false">
        <template #title>
            Accordion title 1
        </template>
        <template #content>
            <div>
                Accordion text 1
            </div>
        </template>
    </vue-collapsible-panel>
</vue-collapsible-panel-group>
```
### Modalbox
You can use the modal function right away. It works with portal function and the modalbox composable.
The content inside the modalbox will be moved to the end of the HTML-Body.
``` bash
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
```


### Swiper/Slider
For detailed explaination (for example settings ect.), checkout https://swiperjs.com/vue
``` bash
<ClientOnly>
    <swiper
            :class="'swiper'"
            :slides-per-view="1"
            :space-between="0"
            :modules="modules"
            :navigation="true"
            :pagination="{clickable:true}"
            :breakpoints="{
          '768': {
            slidesPerView: 2,
            spaceBetween: 30
          },
          '1440': {
            slidesPerView: 3,
            spaceBetween: 88
          }
        }"
    >
        <swiper-slide>
            <div class="gallery-slider__element">
                Text
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="gallery-slider__element">
                Text
            </div>
        </swiper-slide>
    </swiper>
</ClientOnly>
```
### Google Maps
For detailed explaination (for example settings ect.), checkout https://github.com/xkjyeah/vue-google-maps
```
<GmapMap :center="{lat: 50.582734, lng: 10.027333}" :zoom="16" :options="{styles: mapStyles, scrollwheel: false, disableDefaultUI: true}" map-type-id="roadmap">
  <GmapMarker :position="{lat: 50.582734, lng: 10.027333}" :icon="markerStyles" @click="toggleInfoWindow(m,index)" />

  <gmap-info-window
          :options="infoOptions"
          :position="infoWindowPos"
          :opened="infoWinOpen"
          @closeclick="infoWinOpen=false"
  >
      <div v-html="infoContent"></div>
  </gmap-info-window>

</GmapMap>
```

### Notification Messages
If you want to show messages to the user (for example for a login or form validation) use Toast:
For more information: https://vue3-toastify.js-bridge.com/get-started/introduction.html
```
await formValidation.value.$touch();

if(formValidation.value.$error){
    useNuxtApp().$toast.error('fill all required fields!');
} else {
    useNuxtApp().$toast.success('form successfully send!');
}
```

### Form Fields Validation
This validation checks the form field values while typing. For more information: https://vuelidate-next.netlify.app/validators.html .
Example:
``` bash
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

	async function handleSubmit(){

		await formValidation.value.$touch();

		if(formValidation.value.$error){
			useNuxtApp().$toast.error('fill all required fields!');
		} else {
			useNuxtApp().$toast.success('form successfully send!');
		}

	}

</script>

<template>

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
        <button @click="handleSubmit">Send</button>
    </div>

</template>

```
### Usefull Stuff

#### Click Outside
Vue Directive to call a method function if the user clicks outside that element.
Append this to your wished HTML-element: (For more information: https://www.npmjs.com/package/click-outside-vue3)
``` bash
v-click-outside="yourFunction"
```

#### Scroll To Element
https://github.com/rigor789/vue-scrollto <br>
Have a nice smooth scroll to any element you want. <br>
You can use it in your method functions:
``` bash

import * as VueScrollTo from "vue-scrollto";
VueScrollTo.scrollTo('.site-footer', {offset:-70});
```
or as clickable element for users:
``` bash
<a href="#" v-scroll-to="'#element'">Scroll to #element</a>
 
<div id="element">
    Hi. I'm #element.
</div>
```

#### Set, delete or get value of cookie
Check out: https://nuxt.com/docs/api/composables/use-cookie

### Browser Support
**iOS** 10 and higher  
**Android** 6 and higher  
**Safari** 11 and higher   
**IE** Not supported    
**Edge** 79 and higher  
**Firefox** 52 and higher  
**Chrome** 57 and higher

# Open Do-To's:

#### Robots
#### Sitemap
#### Focus inputs

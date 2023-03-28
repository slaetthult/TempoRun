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

# Old documentation following:

### Form Fields Validation
This validation checks the form field values while typing. Just import the validations-mixin.
``` bash
import validation from "~/mixins/validation";

export default {
    mixins: [validation],
}
```
and apply the following data-attributes to you wished fom fields for example:
``` bash
<input type="password" v-model="newsletterData.password" data-validate data-validate-minlength="8" data-validate-maxlength="30">
<small class="validation-error-message">Please enter a password with 8 to 30 characters!</small>
```
<b>data-validate</b> checks if the form field is not empty and not unchecked <br>
<b>data-validate-minlength</b> defines the required min length of the form field's value <br>
<b>data-validate-maxlength</b> defines the max length of the form field's value <br>
<b>data-validate-optional</b> validates the form field only if it is not empty <br>
<b>class="validation-error-message"</b> shows your defined error message. Just place it after the specific form field<br><br>
<b>Note that the correct form field type is very important for the validation!</b><br>

``` bash
this.validationSuccessfully
```
returns true in your component, if the validation is successfully

You can trigger the form validation manually, if you call this method:
``` bash
<button @click="validateFormFields()">Submit</button>
```
or
``` bash
this.validateFormFields();
```
### Multi language
Nuxt-Run has integrated nuxt-i18n for multi language. <br>
For detailed explaination, checkout https://github.com/nuxt-community/nuxt-i18n

1. change/add/remove languages in nuxt.config.js
2. define the translation in /lang/text-translation.js
3. place language vars into your components, for example {{ $t('siteheader.headline') }}
4. if you also want to translate the url paths, change it in /lang/url-translation.js

#### Language Switcher
``` bash
<nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
<nuxt-link :to="switchLocalePath('de')">Deutsch</nuxt-link>
```

#### The Nuxt-Link
If you decide to use nuxt-i18n, you have to modify the nuxt-link as shown here:
``` bash
<nuxt-link :to="localePath('subpage')">Subpage</nuxt-link>
```
instead of:
``` bash
<nuxt-link to="/subpage">Subpage</nuxt-link>
```

### Usefull Stuff
#### Robots
is integrated (https://www.npmjs.com/package/@nuxtjs/robots)
#### Sitemap
is integrated (https://www.npmjs.com/package/@nuxtjs/sitemap)
#### Focus inputs
This Vue Directive also solves issues with focussing inputs on mobile devices!
``` bash
<button v-focus-input="'.site-header__search'">Focus search input</button>
```
#### Click Outside
Vue Directive to call a method function if the user clicks outside that element.
Append this to your wished HTML-element:
``` bash
v-click-outside="yourFunction"
```
#### Scroll To Element
https://www.npmjs.com/package/vue-scrollto <br>
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
Just import the utils/cookie file. So you can use the functions wherever you need it (plugin-files as well).
``` bash
import {getCookieValueOf, setCookie, deleteCookie} from '~/utils/cookies';

getCookieValueOf('yourCookieName');
setCookie('yourCookieName', 'your value', days);
deleteCookie('yourCookieName');
```

#### Get CSS Viewport information via JS
You can get the CSS Viewport information in Javascript. For example, if you want to trigger a method function only if 
the browser window is wider than a certain defined viewport.
``` bash
import mediaQueries from "~/mixins/mediaQueries";

export default {
    mixins: [mediaQueries],
}

console.log(this.mediaQueries['lw'])
```

#### Format seconds to HHMMSS (for example: 00:05:00)
Just import the utils/toHHMMSS file. So you can use the functions wherever you need it (plugin-files as well).
``` bash
import {toHHMMSS} from '~/utils/toHHMMSS';

toHHMMSS(300, true, true, true);
```
 
### Browser Support
**iOS** 10 and higher  
**Android** 6 and higher  
**Safari** 11 and higher   
**IE** Not supported    
**Edge** 79 and higher  
**Firefox** 52 and higher  
**Chrome** 57 and higher

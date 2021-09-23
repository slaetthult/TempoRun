# Nuxt Run

> Starter kit for nuxt projects with usefull features for fast development.

## Build Setup

``` bash
# install dependencies
$ npm install

For detailed explanation on how things work in nuxt, check out [Nuxt.js docs](https://nuxtjs.org).
```

## Demo

https://nifty-curie-944faf.netlify.app/

## Essential Elements
### The grid (flexbox)

The grid class contains the shortname of the viewport (defined in config.scss) and the amount of grids:<br>
{viewport}{gridamount} -> "w12".<br>
If you want to push or pull grid-elements, use "w-left-4" {viewport}-{direction}-{gridamount}.
Grid-Elements are wrapped by the class "grid-wrap".
``` bash
<div class="grid-wrap">
    <h2 class="w12">Grid Example</h2>
    <div class="w12" style="background: lightgrey;margin-top:5px;">w12</div>
    <div class="w4" style="background: lightgrey;margin-top:5px;">w4</div>
    <div class="w8" style="background: lightgrey;margin-top:5px;">w8</div>
    <div class="w4 w-left-4" style="background: lightgrey;margin-top:5px;">w4 w-left-4</div>
    <div class="w4" style="background: lightgrey;margin-top:5px;">w4</div>
</div>
```

### Accordion
To use accordions import the mixin to the wished component.

```bash
import accordion from "~/mixins/accordion";
export default {
    mixins: [accordion]
}
```
``` bash
<div class="accordion" data-accordion :class="{'active' : currentActiveAccordionId === 0}">
  <button class="accordion__trigger" @click="toggleAccordion($event, 0)">Accordion 1</button>
  <div class="accordion__content" data-accordion-content>
      <div class="accordion__content__wrapper">
          Accordion Text 1
      </div>
  </div>
</div>
```
<b>Additional settings:</b><br>
set ``` this.openCertainAccordion(2); ``` (in mounted()) to open a certain accordion by index-id.

### Modalbox
To use the modalbox import the mixin to the wished component.
``` bash
import modalbox from "~/mixins/modalbox";

export default {
    mixins: [modalbox]
}
```
The content inside the modalbox will be moved to the end of the HTML-Body.<br>
``` bash
<a href="javascript:void(0);" data-modalbox-trigger @click="showModalbox(0)">Modalbox Trigger</a>
<client-only>
    <portal to="portaldestination">
          <div class="modalbox" data-modalbox="0" v-click-outside="closeModalbox">
               I am a modalbox!
               <a href="javascript:void(0);" @click="closeModalbox()">close Modalbox</a>
          </div>
    </portal>
</client-only>
```
If you want to close a specific modalbox via id (fo example a modalbox with the id "0"), use this:
``` bash
this.closeModalbox(null,0);
```
### Swiper/Slider
For detailed explaination (for example settings ect.), checkout https://github.com/surmon-china/vue-awesome-swiper
``` bash
<swiper :options="gallerySwiperOptions" ref="galleryswiper">
  <swiper-slide>
      <picture>
          <source media="(min-width: 650px)" srcset="https://via.placeholder.com/1920x300">
          <source media="(min-width: 465px)" srcset="https://via.placeholder.com/1920x300">
          <img src="https://via.placeholder.com/1920x300" alt="alt">
      </picture>
  </swiper-slide>
  <swiper-slide>
      <picture>
          <source media="(min-width: 650px)" srcset="https://via.placeholder.com/1920x300">
          <source media="(min-width: 465px)" srcset="https://via.placeholder.com/1920x300">
          <img src="https://via.placeholder.com/1920x300" alt="alt">
      </picture>
  </swiper-slide>
</swiper>
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

### In case you don't want to use Google Maps: Open Street Maps
For detailed explaination (for example settings ect.), checkout https://vuelayers.github.io/#/?id=vuelayers
If you want to change the map style check out this page http://alexurquhart.github.io/free-tiles/ and
define it like this:
```
            <vl-source-xyz
              url="http://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
            >
            </vl-source-xyz>
```
```
<template>
        <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
                data-projection="EPSG:4326">
          <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

          <vl-geoloc :tracking="false">
            <template slot-scope="geoloc">
              <vl-feature>
                <vl-geom-point :coordinates="markerPositions[0]"></vl-geom-point>
                <vl-style-box>
                  <vl-style-icon
                    src="/icons/map-marker.png"
                    :scale="1"
                    :anchor="[0.5, 1]"
                  ></vl-style-icon>
                </vl-style-box>
              </vl-feature>
              <vl-feature>
                <vl-geom-point :coordinates="markerPositions[1]"></vl-geom-point>
                <vl-style-box>
                  <vl-style-icon
                    src="/icons/map-marker.png"
                    :scale="1"
                    :anchor="[0.5, 1]"
                  ></vl-style-icon>
                </vl-style-box>
              </vl-feature>
            </template>
          </vl-geoloc>


          <vl-layer-tile>
            <vl-source-xyz
              url="http://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
            >
            </vl-source-xyz>
          </vl-layer-tile>
        </vl-map>
</template>

<script>
export default {
  data () {
    return {
      zoom: 15,
      center: [	6.783333, 51.233334],
      rotation: 0,
      markerPositions: {
        0: [	6.783333, 51.233334],
        1: [	6.883333, 51.333334]
      }
    }
  },
}
</script>
```

### Notification Messages
If you want to show messages to the user (for example for a login or form validation) use Toast:
```
if(this.validationSuccessfully){

    this.$toast.success('Validation is successfull!');

} else {

    this.$toast.error('Validation error!');

}
```

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
this.$scrollTo(this.$el);
this.$scrollTo(document.querySelector('.sitefooter'));
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
**Android** 5 and higher  
**Safari** 10.1 and higher   
**IE** 11    
**Edge** 13 and higher  
**Firefox** 51 and higher  
**Chrome** 56 and higher

# Nuxt Run

> Starter kit for nuxt projects with usefull features for fast development.

## Build Setup

``` bash
# install dependencies
$ npm install

For detailed explanation on how things work in nuxt, check out [Nuxt.js docs](https://nuxtjs.org).
```

## Essential Elements
### The grid (flexbox)

The grid class contains the shortname of the viewport (defined in config.scss) and the amount of grids:<br>
{viewport}{gridamount} -> "w12".<br>
If you want to push or pull grid-elements, use "w-left-4".
Grid-Elements are wrapped by the class "gridWrap".
``` bash
<div class="gridWrap">
    <h2 class="w12 mw8">Grid Example</h2>
    <div class="w12" style="background: lightgrey;margin-top:5px;">w12</div>
    <div class="w6" style="background: lightgrey;margin-top:5px;">w6</div>
    <div class="w6" style="background: lightgrey;margin-top:5px;">w6</div>
    <div class="w4 w-left-4" style="background: lightgrey;margin-top:5px;">w4</div>
    <div class="w4" style="background: lightgrey;margin-top:5px;">w4</div>
</div>
```

### Accordion
To use accordions import the mixin to the wished component.

```bash
import accordion from "../../mixins/accordion";
export default {
    mixins: [accordion]
}
```
``` bash
<div class="accordion" data-accordion :class="{'active' : currentActiveAccordionId === 0}">
  <button class="accordion-trigger" @click="toggleAccordion($event, 0)">Accordion 1</button>
  <div class="accordion-content" data-accordion-content>
      <div class="accordion-content-wrapper">
          Accordion Text 1
      </div>
  </div>
</div>
```
### Modalbox
To use the modalbox import the mixin to the wished component.
``` bash
import modalbox from "../../mixins/modalbox";

export default {
    mixins: [modalbox]
}
```
The content inside the modalbox will be moved to the end of the HTML-Body.<br>
``` bash
<a href="javascript:void(0);" data-modalbox-trigger @click="showModalbox(0)">Modalbox Trigger</a>
<portal to="portaldestination">
  <div class="modalbox" data-modalbox="0" v-click-outside="closeModalbox">
      I am a modalbox!
      <a href="javascript:void(0);" @click="closeModalbox()">close Modalbox</a>
  </div>
</portal>
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
### Multi language
Nuxt-Run has integrated nuxt-i18n for multi language. <br>
For detailed explaination, checkout https://github.com/nuxt-community/nuxt-i18n

1. change/add/remove languages in nuxt.config.js
2. place language vars into your components, for example {{ $t('siteheader.headline') }}
3. define the translation in /lang/text-translation.js
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
#### Focus inputs
This Vue Directive also solves issues with focussing inputs on mobile devices!
``` bash
<button v-focus-input="'.siteheader-search'">Focus search input</button>
```
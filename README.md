# Astro 4 Starter Kit: TempoRun

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

#### For more info about Astro checkout https://docs.astro.build/en/getting-started/

## Developing Requirements

#### node at least v18.15.0 (npm v9.5.0)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## TempoRun Basics:

<b>The fastest performing starter template with extraordinary high Google Pagespeed score!</b>
![Tempo Run Astro Google Pagespeed Score](https://i.postimg.cc/d3kcYvf7/Bildschirmfoto-2023-10-18-um-13-47-05.png)
### Demo:
https://tempo-run-astro3.netlify.app/

### Grid (Flexbox)

The grid class contains the shortname of the viewport (defined in config.scss) and the amount of grids:
{viewport}{gridamount} -> "w12".
If you want to push or pull grid-elements, use "w-left-4" {viewport}-{direction}-{gridamount}. Grid-Elements are directly wrapped by the class "grid-wrap".

```
<div class="grid-wrap">
    <div class="w12">
        <h2>Grid example</h2>
    </div>
    <div class="w12 mw12">w12 mw12</div>
    <div class="w12 mw6">w12 mw6</div>
    <div class="w12 mw6 mw-left-6">w12 mw6 mw-left-6</div>
    <div class="w6 mw4">w6 mw4</div>
    <div class="w6 mw4">w6 mw4</div>
    <div class="w6 mw4">w6 mw4</div>
</div>

```

### Form and validation

Please note: <br>
Inputs need the empty <b>value</b>-attribute.
Inputs type checkbox and radiobox and textareas need the emtpy <b>data-value</b>-attribute.<br>
Otherwise the form validation won't work properly.<br>
Set <b>data-validation-required</b> on form fields if they are required.
If you just need optional validation, just leave it away.

```
---
import Selectbox from "@components/partials/Selectbox.astro";

if (Astro.request.method === "POST") {
    try {
        console.error("form sent");
    } catch (error) {
        if (error instanceof Error) {
            console.error("form not sent");
        }
    }
}
---

<form method="POST" id="form-example" class="form" data-js="form-validation">

    <Selectbox maxSelectable="2" dataValidationRequired classes="w12">
        <option value="">Select a person...</option>
        <option value="4">Thomas Edison</option>
        <option value="1">Nikola</option>
        <option value="3">Nikola Tesla</option>
        <option value="5">Arnold Schwarzenegger</option>
    </Selectbox>

    <div class="input w6">
        <label>
            First Name:
            <input type="text" value="" data-validation-required minlength="4">
            <small>Required</small>
        </label>
    </div>
    <div class="input w6">
        <label>
            Last Name:
            <input type="text" value="" minlength="4">
            <small>Required</small>
        </label>
    </div>
    <div class="input w12">
        <label>
            E-mail:
            <input type="email" value="" data-validation-required>
            <small>Required</small>
        </label>
    </div>
    <div class="input w12">
        <label>
            Phone:
            <input type="tel" value="" data-validation-required>
            <small>Required</small>
        </label>
    </div>
    <div class="input w12">
        <label>
            Password:
            <input type="password" value="" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,8}$" data-validation-required>
            <small>Must contain at least one number and one letter, and at least 8 or more characters</small>
        </label>
    </div>
    <div class="input w12">
        <label>
            Confirm password:
            <input type="password" value="" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,8}$" data-validation-required>
        </label>
    </div>
    <div class="textarea w12">
        <label>
            Message:
            <textarea data-value="" minlength="4" maxlength="10"></textarea>
            <small>Please type in at least 4 and maximum 10 letters</small>
        </label>
    </div>
    <div class="checkbox w12">
        <label>
            <input type="checkbox" name="tos" value="checkbox2" data-validation-required>
            <span>I accept</span>
            <small>Required</small>
        </label>
    </div>
    <button type="submit">Submit</button>
    
</form>

<script>
    import { formValidation } from "@utils/formValidation";

    formValidation.init();
    
    /**
     The following code is only required, if you want to submit the form via js without page reload. 
     In this case remove Astro.request.method part inside 
     --- 
     
     ---
    */
    
    const $form = document.querySelector('#form-example');

    const submitHandler = () => {

        alert('Your form submit function via js!');

    }

    formValidation.manualSubmit($form, submitHandler);
</script>
```
### Modalboxes

Just import the Modalbox component. Modalbox ids have to be unique. <br>
You can use as many closing buttons as you like inside a Modalbox. <br>
All Modalboxes are moved to HTML-Body to prevent any styling issues.

```
---
import Modalbox from "@components/partials/Modalbox.astro";
---

<button data-open-modal="test1">Modalbox 1</button>
<Modalbox id="test1" classes="my-modal">
    <h1>I am Modalbox 1</h1>
    <button data-close-modal>close it</button>
</Modalbox>

<button data-open-modal="test2" classes="my-modal">Modalbox 2</button>
<Modalbox id="test2">
    <h1>Modalbox 2</h1>
    <button data-close-modal>close it</button>
</Modalbox>

```

### Accordions

Just import the accordions components.<br>
If you want the first accordion of be open, set openFirstAccordionInitially to "true".
```
---
import Accordion from '@components/partials/Accordion.astro';
import AccordionGroup from '@components/partials/AccordionGroup.astro';
---

<AccordionGroup openFirstAccordionInitially="true">
    <Accordion title="1. Title">
        <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <figure>
            <picture>
                <source srcset="https://placehold.co/978x489">
                <img src="https://placehold.co/978x489" alt="alt" loading="lazy">
            </picture>
        </figure>
    </Accordion>
    <Accordion title="2. Title">
        <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
    </Accordion>
</AccordionGroup>

```

### Slider/Swiper

Just import the Slider component. <br>
In order to adjust specific slider/swiper settings, just change the sliderSettings object.

```
---
import Slider from "@components/partials/Slider.astro";

const sliderSettings = {
    loop: true,
    speed: 500,
    slidesPerView: 1,
    autoplay: {
        delay: 6000
    },
    breakpoints: {
        // when window width is >= 768px
        768: {
            slidesPerView: 2
        }
    }
}

const sliderSettingsJSON = JSON.stringify(sliderSettings);
---

<Slider sliderSettings={sliderSettingsJSON}>
    <div class="swiper-slide">
        <figure>
            <picture>
                <source srcset="https://placehold.co/978x489">
                <img src="https://placehold.co/978x489" alt="alt" loading="lazy">
            </picture>
        </figure>
    </div>
    <div class="swiper-slide">
        <figure>
            <picture>
                <source srcset="https://placehold.co/978x489">
                <img src="https://placehold.co/978x489" alt="alt" loading="lazy">
            </picture>
        </figure>
    </div>
    <div class="swiper-slide">
        <figure>
            <picture>
                <source srcset="https://placehold.co/978x489">
                <img src="https://placehold.co/978x489" alt="alt" loading="lazy">
            </picture>
        </figure>
    </div>
</Slider>

```

## Used libraries:

### Swiper
The Most Modern Mobile Touch Slider.<br>
https://swiperjs.com/swiper-api

### Accordion
With the module you can create accordion on your website, useful especially for creating FAQ lists. <br>
https://github.com/michu2k/Accordion

### Select
Tom Select is a dynamic, framework agnostic, and lightweight (~16kb gzipped) select UI control.<br>
https://tom-select.js.org/

### Google Maps

https://developers.google.com/maps/documentation/javascript/overview

### AlpineJs
Alpine is a rugged, minimal tool for composing behavior directly in your markup. <br>
https://alpinejs.dev/

### Partytown
If you’re using third-party scripts for things like analytics or ads, Partytown is a great way to make sure that they don’t slow down your site. <br>
https://docs.astro.build/de/guides/integrations-guide/partytown/

## Browser Support

| Browser | Version         |
|:--------|:----------------|
| IE      | Not supported   |
| Edge    | 80 and higher   |
| Firefox | 65 and higher   |
| Safari  | 13.1 and higher |
| Chrome  | 70 and higher   |
| iOS     | 13 and higher   |
| Android | 8 and higher    |

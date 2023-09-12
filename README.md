# Astro Starter Kit: TempoRun

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

<b>The fastest performing starter template with high Google Pagespeed score!</b>

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
import Selectbox from "../partials/Selectbox.astro";

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

<form method="POST" class="form" data-js="form-validation">

    <Selectbox maxSelectable="2" classes="w12">
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
    <div class="textarea w12">
        <label>
            Message:
            <textarea data-value="" minlength="4" maxlength="10"></textarea>
            <small>Required</small>
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
    import { formValidation } from "../../utils/formValidation";

    formValidation.init();
</script>
```
### Modalboxes

Just import the Modalbox component. Modalbox ids have to be unique. <br>
You can use as many closing buttons as you like inside a Modalbox. <br>
All Modalboxes are moved to HTML-Body to prevent any styling issues.

```
---
import Modalbox from "../partials/Modalbox.astro";
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

## Used libraries:

### Swiper

https://swiperjs.com/swiper-api

### Accordion

https://github.com/michu2k/Accordion

### Select

https://tom-select.js.org/

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

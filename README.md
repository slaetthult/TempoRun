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

## Used libraries:

### Swiper

https://swiperjs.com/swiper-api

### Accordion

https://github.com/michu2k/Accordion

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

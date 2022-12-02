import VueScrollTo from "vue-scrollto";
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueScrollTo, {
        container: "body",
        duration: 500,
        easing: "ease",
        offset: -100,
        lazy: false,
        force: true,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true
    });
});

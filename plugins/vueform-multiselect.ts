import Multiselect from '@vueform/multiselect'
import '@vueform/multiselect/themes/default.css'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("Multiselect", Multiselect)
})

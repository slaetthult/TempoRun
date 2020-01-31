import Vue from 'vue'
import * as VueGoogleMaps from "~/node_modules/vue2-google-maps";

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyC67wjhe_8-dbLf1ynUBNdyvSrOujxhYcQ', /* specific key! */
        libraries: 'places'
    }
});
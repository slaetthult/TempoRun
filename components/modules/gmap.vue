<template>
  <div class="gmap">
      <div class="grid-wrap">

          <div class="gmap w12 mw12 lw12">

            <h2>Google Maps Example</h2>

              <client-only>
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
              </client-only>

          </div>

      </div>
  </div>
</template>

<script>
    export default {
        props: [],
        data(){
             return {
                 infoContent: '',
                 infoWindowPos: {
                     lat: 0,
                     lng: 0
                 },
                 infoWinOpen: false,
                 currentMidx: null,
                 infoOptions: {
                     pixelOffset: {
                         width: 0,
                         height: -35
                     }
                 }
             }
        },
        computed: {
            mapStyles(){
                return [
                    {
                        "featureType": "poi.attraction",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.business",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.government",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.medical",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.place_of_worship",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.school",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.sports_complex",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    }
                ]
            },
            markerStyles () {
                return  {
                    url: require('static/icons/map-marker.png'),
                    scale: 1
                };
            }
        },
        mounted(){

        },
         methods: {

             toggleInfoWindow: function (marker, index) {

                 this.infoWindowPos = {lat: 53.582734, lng: 10.027333};
                 this.infoContent = this.getInfoWindowContent(marker);
                 this.infoWinOpen = !this.infoWinOpen;

             },

             getInfoWindowContent: function (marker) {
                 return (`<div class="card">
                      custom info window content
                    </div>`);
             }

        }
    }
</script>

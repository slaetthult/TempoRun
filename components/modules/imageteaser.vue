<template>
  <div class="imageteaser">
      <div class="gridWrap">

          <div class="w12 mw12 lw12">

              <h2>ImageTeaser with lazyload Example</h2>

              <figure>
                  <picture>
                      <source media="(min-width: 650px)" data-srcset="https://via.placeholder.com/1920x300">
                      <source media="(min-width: 465px)" data-srcset="https://via.placeholder.com/1920x300">
                      <img data-src="https://via.placeholder.com/1920x300" alt="alt" class="lazyload">
                  </picture>
              </figure>

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
                    url: require('~/static/icons/gmapsmarker.png'),
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
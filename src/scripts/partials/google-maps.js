import { Loader } from '@googlemaps/js-api-loader';

export const googleMaps = {

    vars: {

        moduleQuery:            '*[data-js=google-maps]',

        key:                    'your_api_key',

        options: {
            center: {
                lat: -34.397, lng: 150.644
            },
            zoom: 8,
        },

        markers: [
            {
                title: 'Aksa Beach',
                lat: -34.397,
                lng: 150.644,
                description: 'Aksa Beach is a popular beach and a vacation spot in Aksa village at Malad, Mumbai.'
            },
            {
                title: 'Juhu Beach',
                lat: -34.397,
                lng: 147.644,
                description: 'Juhu Beach is one of favourite tourist attractions situated in Mumbai.'
            }
        ],

        requiredCookieName:         'cookiesAcceptedAll',

        showClass:                  'google-maps--show'

    },

    init(){

        googleMaps.find();

    },

    find(){

        const $maps = document.querySelectorAll(googleMaps.vars.moduleQuery);

        for(const $map of $maps){

            googleMaps.bind($map);

        }

    },

    bind($map){

        $map.classList.add(googleMaps.vars.showClass);

        const loader = new Loader({
            apiKey: googleMaps.vars.key,
            version: "weekly"
        });

        loader.importLibrary('maps')
        .then(({Map}) => {
            const theMap = new Map($map, googleMaps.vars.options);
            googleMaps.setMarkers(theMap);
        })
        .catch((error) => {});

    },

    setMarkers(map){

        const infoWindow = new google.maps.InfoWindow();

        for(const markerData of googleMaps.vars.markers){

            const latlng = new google.maps.LatLng(markerData.lat, markerData.lng);
            let marker = new google.maps.Marker({
                position: latlng,
                map: map,
                title: markerData.title
            });

            ( (marker, markerData) => {
                google.maps.event.addListener(marker, 'click',  (event) => {
                    infoWindow.setContent('<div style = "width:200px;min-height:40px">' + markerData.description + '</div>');
                    infoWindow.open(map, marker);
                });
            })(marker, markerData);

        }

    }
}
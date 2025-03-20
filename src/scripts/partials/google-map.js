import { Loader } from '@googlemaps/js-api-loader';

export const googleMap = {

    vars: {

        queries: {
            module:             '*[data-js=google-map]',
        },

        attributes: {
            geoLocation:        'data-google-map-geo-location',
            markerHTML:         'data-google-marker-html',
            zoomFactor:         'data-google-zoom-factor',
        },

        classes: {
            show:               'google-map--show'
        },

        keys: {
            googleMaps:         import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY
        },

        options: {
            center: {
                lat: 51.5167, lng: 9.9167
            },
            zoom: 8
        },

        markers: []

    },

    init(){

        googleMap.find();

    },

    find(){

        const $maps = document.querySelectorAll(googleMap.vars.queries.module);

        for(const $map of $maps){

            googleMap.bind($map);

        }

    },

    bind($map){

        $map.classList.add(googleMap.vars.classes.show);

        const geoLocation = JSON.parse($map.getAttribute(googleMap.vars.attributes.geoLocation));
        const markerHTML = JSON.parse($map.getAttribute(googleMap.vars.attributes.markerHTML));
        const zoomFactor = parseInt(JSON.parse($map.getAttribute(googleMap.vars.attributes.zoomFactor)));

        googleMap.vars.options.center = {
            lat: geoLocation.lat,
            lng: geoLocation.lng
        }

        googleMap.vars.options.zoom = zoomFactor;

        googleMap.vars.markers.push(
            {
                lat: geoLocation.lat,
                lng: geoLocation.lng,
                description: markerHTML
            },
        );

        const loader = new Loader({
            apiKey: googleMap.vars.keys.googleMaps,
            version: "weekly"
        });

        loader.importLibrary('maps')
        .then(({Map}) => {
            const theMap = new Map($map, googleMap.vars.options);
            googleMap.setMarkers(theMap);
        })
        .catch((error) => {});

    },

    setMarkers(map){

        const infoWindow = new google.maps.InfoWindow();

        for(const markerData of googleMap.vars.markers){

            const latlng = new google.maps.LatLng(markerData.lat, markerData.lng);
            let marker = new google.maps.Marker({
                position: latlng,
                map: map,
                title: markerData.title,
                icon: '/images/icons/pin.svg'
            });

            if(markerData?.description?.length > 0){
                ( (marker, markerData) => {
                    google.maps.event.addListener(marker, 'click',  (event) => {
                        infoWindow.setContent(`
                            <div class="event-info-window" style="width:200px;min-height:40px">
                                <div class="event-info-window__description">
                                    ${markerData.description}
                                </div>
                            </div>
                        `);
                        infoWindow.open(map, marker);
                    });
                })(marker, markerData);
            }

        }

    }
}
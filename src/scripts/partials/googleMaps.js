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

        googleMaps.startScript();
        googleMaps.find();

    },

    startScript() {

        (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
        ({key: googleMaps.vars.key, v: "weekly"});

    },

    find(){

        const $maps = document.querySelectorAll(googleMaps.vars.moduleQuery);

        for(const $map of $maps){

            googleMaps.bind($map);

        }

    },

    bind($map){

        $map.classList.add(googleMaps.vars.showClass);

        let map;

        async function initMap() {
            //@ts-ignore
            const { Map } = await google.maps.importLibrary("maps");

            map = new Map($map, googleMaps.vars.options);

            googleMaps.setMarkers(map);

        }

        initMap();

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
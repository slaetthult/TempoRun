import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/modules';

export const slider = {

    vars: {

        queries: {
            swiper:             '*[data-js=slider]',
        },

        attributes: {
            settings:           'data-slider-settings',
        },

        mainOptions: {
            modules: [Navigation, Pagination, Autoplay, Scrollbar],
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
                enabled: true,
                draggable: true
            }
        }

    },

    init(){

        slider.find();

    },

    find(){

        const $sliders = document.querySelectorAll(slider.vars.queries.swiper);

        if($sliders.length === 0){
            return false;
        }

        for(const $slider of $sliders){

            slider.bind($slider);

        }

    },

    bind($slider){

        let additionalOptions = $slider.getAttribute(slider.vars.attributes.settings);
        additionalOptions = additionalOptions && additionalOptions.length > 0 ? JSON.parse(additionalOptions) : null;
        const options = slider.vars.mainOptions;

        Object.assign(options, additionalOptions);

        const swiper = new Swiper($slider, options);

    }

}
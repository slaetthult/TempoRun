import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/modules';
import { isInViewport } from '@scripts/utils/is-in-viewport.js';

export const slider = {

    vars: {

        swiperQuery:            '*[data-js=slider]',

        settingsAttribute:      'data-slider-settings',

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

        const $sliders = document.querySelectorAll(slider.vars.swiperQuery);

        for(const $slider of $sliders){

            slider.checkIfInViewport($slider);

        }

    },

    checkIfInViewport($slider){

        if(isInViewport($slider)){
            slider.bind($slider);
        }

    },

    bind($slider){

        let additionalOptions = $slider.getAttribute(slider.vars.settingsAttribute);
        additionalOptions = additionalOptions && additionalOptions.length > 0 ? JSON.parse(additionalOptions) : null;
        const options = slider.vars.mainOptions;

        Object.assign(options, additionalOptions);

        const swiper = new Swiper($slider, options);

    }

}
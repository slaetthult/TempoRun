import Accordion from 'accordion-js';
import {getOffsetPosition} from '@scripts/utils/get-offset-position.js';

export const accordionGroup = {

    vars: {

        settingsAttribute:                          'data-accordion-settings',

        additionalGeneralOptions: {

            onOpen: function($currentElement){
                window.scrollTo({
                    top: getOffsetPosition($currentElement),
                    behavior: 'smooth'
                });
            }

        }

    },

    init($accordionGroup){

        accordionGroup.startScript($accordionGroup);

    },

    startScript($accordionGroup){

        let accordionOptions = $accordionGroup.getAttribute(accordionGroup.vars.settingsAttribute);
        accordionOptions = JSON.parse(decodeURIComponent(accordionOptions));

        if(!accordionOptions.disableAdditionalGeneralOptions){
            accordionOptions = {...accordionOptions, ...accordionGroup.vars.additionalGeneralOptions}
        }

        const theAccordionGroup = new Accordion($accordionGroup, accordionOptions);

    }
}
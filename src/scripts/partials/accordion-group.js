import Accordion from 'accordion-js';
import {getOffsetPosition} from '@scripts/utils/get-offset-position.js';

export const accordionGroup = {

    vars: {

        queries: {
            module:                                 '*[data-js=accordion-group]',
        },

        attributes: {
            settings:                               'data-accordion-settings',
        },

        additionalGeneralOptions: {

            onOpen: function($currentElement){
                window.scrollTo({
                    top: getOffsetPosition($currentElement),
                    behavior: 'smooth'
                });
            }

        }

    },

    init(){

        accordionGroup.startScript();

    },

    startScript(){

        const $accordionGroups = document.querySelectorAll(accordionGroup.vars.queries.module);

        for(const $accordionGroup of $accordionGroups){

            let accordionOptions = $accordionGroup.getAttribute(accordionGroup.vars.attributes.settings);
            accordionOptions = JSON.parse(decodeURIComponent(accordionOptions));

            if(!accordionOptions.disableAdditionalGeneralOptions){
                accordionOptions = {...accordionOptions, ...accordionGroup.vars.additionalGeneralOptions}
            }

            const theAccordionGroup = new Accordion($accordionGroup, accordionOptions);

        }

    }
}
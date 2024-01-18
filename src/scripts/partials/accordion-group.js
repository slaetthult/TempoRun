import Accordion from 'accordion-js';
import {getOffsetPosition} from '@scripts/utils/get-offset-position.js';

export const accordionGroup = {

    vars: {

        moduleQuery:                                '*[data-js=accordion-group]',

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

    init(){

        accordionGroup.startScript();

    },

    startScript(){

        const $accordionGroups = document.querySelectorAll(accordionGroup.vars.moduleQuery);

        for(const $accordionGroup of $accordionGroups){

            let accordionOptions = $accordionGroup.getAttribute(accordionGroup.vars.settingsAttribute);
            accordionOptions = JSON.parse(accordionOptions);
            accordionOptions = {...accordionOptions, ...accordionGroup.vars.additionalGeneralOptions}

            const theAccordionGroup = new Accordion($accordionGroup, accordionOptions);

        }

    }
}
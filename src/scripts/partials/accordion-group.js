import Accordion from 'accordion-js';

export const accordionGroup = {

    vars: {

        moduleQuery:                                '*[data-js=accordion-group]',
        settingsAttribute:                          'data-accordion-settings'

    },

    init(){

        accordionGroup.startScript();

    },

    startScript(){

        const $accordionGroups = document.querySelectorAll(accordionGroup.vars.moduleQuery);

        for(const $accordionGroup of $accordionGroups){

            let accordionOptions = $accordionGroup.getAttribute(accordionGroup.vars.settingsAttribute);
            accordionOptions = JSON.parse(accordionOptions);

            const theAccordionGroup = new Accordion($accordionGroup, accordionOptions);

            if(accordionOptions.openFirstAccordionInitially){
                theAccordionGroup.open(0);
            }


        }

    }
}
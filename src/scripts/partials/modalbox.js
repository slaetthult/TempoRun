export const modalbox = {

    vars: {

        parentQuery:        '*[data-js=modalbox]',
        wrapperQuery:       '.modalbox__wrapper',
        triggerQuery:       '*[data-open-modal]',
        closeTriggerQuery:  '*[data-close-modal]',

        triggerAttribute:   'data-open-modal',

        showClass:          'show'

    },

    init(){

        modalbox.find();
        modalbox.addEventTriggers.open();
        modalbox.addEventTriggers.clickOutside();
        modalbox.addEventTriggers.close();

    },

    find(){

        const $modalboxes = document.querySelectorAll((modalbox.vars.parentQuery));

        for(const $modalbox of $modalboxes){

            modalbox.moveToBody($modalbox);

        }

    },

    moveToBody($modalbox){

        document.body.appendChild($modalbox.cloneNode(true));
        $modalbox.remove();

    },

    addEventTriggers: {

        open(){

            const $openTriggers = document.querySelectorAll(modalbox.vars.triggerQuery);

            for(const $openTrigger of $openTriggers){

                $openTrigger.addEventListener('click', () => {

                    const modalQuery = '.' + $openTrigger.getAttribute(modalbox.vars.triggerAttribute);
                    const $modalbox = document.querySelector(modalQuery);

                    modalbox.show($modalbox);

                });

            }

        },

        clickOutside(){

            const $modalboxes = document.querySelectorAll(modalbox.vars.parentQuery);

            for(const $modalbox of $modalboxes){

                $modalbox.addEventListener('click', (event) => {

                    const $target = event.target;

                    if(!$target.closest(modalbox.vars.wrapperQuery)){

                        modalbox.hide($modalbox);

                    }

                });

            }

        },

        close(){

            const $closeTriggers = document.querySelectorAll(modalbox.vars.closeTriggerQuery);

            for(const $closeTrigger of $closeTriggers){

                $closeTrigger.addEventListener('click', (event) => {

                    const $modalbox = (event.target).closest(modalbox.vars.parentQuery);

                    modalbox.hide($modalbox);

                });

            }

        }

    },

    show($modalbox){

        $modalbox.classList.add(modalbox.vars.showClass);

    },

    hide($modalbox){

        $modalbox.classList.remove(modalbox.vars.showClass);

    }

}
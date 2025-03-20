export const modalbox = {

    vars: {

        queries: {
            parent:             '*[data-js=modalbox]',
            wrapper:            '.modalbox__wrapper',
            trigger:            '*[data-open-modal]',
            closeTrigger:       '*[data-close-modal]',
        },

        attributes: {
            trigger:            'data-open-modal',
        },

        classes: {
            show:               'modalbox--show'
        }

    },

    init(){

        modalbox.find();
        modalbox.addEventTriggers.open();
        modalbox.addEventTriggers.clickOutside();
        modalbox.addEventTriggers.close();

    },

    find(){

        const $modalboxes = document.querySelectorAll((modalbox.vars.queries.parent));

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

            const $openTriggers = document.querySelectorAll(modalbox.vars.queries.trigger);

            for(const $openTrigger of $openTriggers){

                $openTrigger.addEventListener('click', (event) => {

                    event.preventDefault();

                    const modalQuery = '.' + $openTrigger.getAttribute(modalbox.vars.attributes.trigger);
                    const $modalbox = document.querySelector(modalQuery);

                    modalbox.show($modalbox);

                });

            }

        },

        clickOutside(){

            const $modalboxes = document.querySelectorAll(modalbox.vars.queries.parent);

            for(const $modalbox of $modalboxes){

                $modalbox.addEventListener('click', (event) => {

                    const $target = event.target;

                    if(!$target.closest(modalbox.vars.queries.wrapper)){

                        modalbox.hide($modalbox);

                    }

                });

            }

        },

        close(){

            const $closeTriggers = document.querySelectorAll(modalbox.vars.queries.closeTrigger);

            for(const $closeTrigger of $closeTriggers){

                $closeTrigger.addEventListener('click', (event) => {

                    const $modalbox = (event.target).closest(modalbox.vars.queries.parent);

                    modalbox.hide($modalbox);

                });

            }

        }

    },

    show($modalbox){

        $modalbox.classList.add(modalbox.vars.classes.show);

    },

    hide($modalbox){

        $modalbox.classList.remove(modalbox.vars.classes.show);

    }

}
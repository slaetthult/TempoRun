import {observeDOM} from '@scripts/utils/observe-dom.js';
export const offcanvas = {

    vars: {

        componentQuery:                         '*[data-js=offcanvas]',
        bodyQuery:                              '*[data-offcanvas-body]',
        closeQuery:                             '*[data-offcanvas-close]',

        idAttribute:                            'data-offcanvas-id',
        triggerOpenIdAttribute:                 'data-offcanvas-trigger-open-id',
        scrollToTopAttribute:                   'data-offcanvas-scroll-top-on-change',
        openInitially:                          'data-offcanvas-open-initially',

        showClass:                              'offcanvas--show'

    },

    init(){

        offcanvas.addEventTrigger();

    },

    addEventTrigger(){

        const $body = document.body;

        $body.addEventListener('click', (event)=> {

            if(event.pointerId === -1){
                return false;
            }

            const $clickTarget = event.target || event.currentTarget;

            offcanvas.clickOutside($clickTarget);

        });

        const $openOffcanvasTriggers = document.querySelectorAll(`*[${offcanvas.vars.triggerOpenIdAttribute}]`);

        if($openOffcanvasTriggers.length === 0){
            return false;
        }

        for(const $openOffcanvasTrigger of $openOffcanvasTriggers){

            $openOffcanvasTrigger.addEventListener('click', (event)=> {

                event.preventDefault();

                const offcanvasId = $openOffcanvasTrigger.getAttribute(offcanvas.vars.triggerOpenIdAttribute)

                offcanvas.closeAll();
                offcanvas.open(offcanvasId);

            });

        }

        const $closeOffcanvasTriggers = document.querySelectorAll(offcanvas.vars.closeQuery);

        if($closeOffcanvasTriggers.length === 0){
            return false;
        }

        for(const $closeOffcanvasTrigger of $closeOffcanvasTriggers){

            $closeOffcanvasTrigger.addEventListener('click', () => {

                offcanvas.closeAll();

            });

        }

        const $offcanvasElements = document.querySelectorAll(offcanvas.vars.componentQuery);

        for(const $offcanvasElement of $offcanvasElements){

            let executed = 1;
            const shouldScrollToTop = $offcanvasElement.getAttribute(offcanvas.vars.scrollToTopAttribute);

            if(shouldScrollToTop === 'true'){
                observeDOM( $offcanvasElement, () => {
                    if(executed % 2 === 0 && $offcanvasElement.classList.contains(offcanvas.vars.showClass)){
                        window.scroll({top: 0, behavior: "smooth"});
                    }
                    executed++;
                });
            }

            if($offcanvasElement.hasAttribute(offcanvas.vars.openInitially)){
                const offcanvasId = $offcanvasElement.getAttribute(offcanvas.vars.idAttribute);
                offcanvas.open(offcanvasId);
            }

        }

    },

    clickOutside($clickTarget){

        const $clickedOffcanvas = $clickTarget.closest(offcanvas.vars.componentQuery);
        const $clickedOpenOffcanvasTrigger = $clickTarget.closest(`*[${offcanvas.vars.triggerOpenIdAttribute}]`);

        if(!$clickedOffcanvas && !$clickedOpenOffcanvasTrigger){

            offcanvas.closeAll();

        }

    },

    closeAll(){

        const $offcanvasLayers = document.querySelectorAll(offcanvas.vars.componentQuery);

        if($offcanvasLayers.length === 0){
            return false;
        }

        for(const $offcanvas of $offcanvasLayers){

            $offcanvas.classList.remove(offcanvas.vars.showClass);

        }

    },

    open(id = ''){

        const $offcanvas = document.querySelector(`*[${offcanvas.vars.idAttribute}="${id}"]`);

        if(!$offcanvas){
            return false;
        }

        $offcanvas.classList.add(offcanvas.vars.showClass);

    }

}
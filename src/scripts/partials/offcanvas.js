import {observeDOM} from '@scripts/utils/observe-dom.js';
export const offcanvas = {

    vars: {

        queries: {
            component:                         '*[data-js=offcanvas]',
            body:                              '*[data-offcanvas-body]',
            close:                             '*[data-offcanvas-close]',
        },

        attributes: {
            id:                                 'data-offcanvas-id',
            triggerOpenId:                      'data-offcanvas-trigger-open-id',
            scrollToTop:                        'data-offcanvas-scroll-top-on-change',
            openInitially:                      'data-offcanvas-open-initially',
        },

        classes: {
            show:                               'offcanvas--show'
        }

    },

    init(){

        offcanvas.find();

    },

    find(){

        const $offcanvasElements = document.querySelectorAll(offcanvas.vars.queries.component);

        if($offcanvasElements.length === 0){
            return false;
        }

        for(const $offcanvasElement of $offcanvasElements) {

            offcanvas.moveToBody($offcanvasElement);

        }

        offcanvas.addEventTrigger($offcanvasElements);

    },

    addEventTrigger($offcanvasElements){

        const $body = document.body;

        $body.addEventListener('click', (event)=> {

            if(event.pointerId === -1){
                return false;
            }

            const $clickTarget = event.target || event.currentTarget;

            offcanvas.clickOutside($clickTarget);

        });

        const $openOffcanvasTriggers = document.querySelectorAll(`*[${offcanvas.vars.attributes.triggerOpenId}]`);

        if($openOffcanvasTriggers.length === 0){
            return false;
        }

        for(const $openOffcanvasTrigger of $openOffcanvasTriggers){

            $openOffcanvasTrigger.addEventListener('click', (event)=> {

                event.preventDefault();

                const offcanvasId = $openOffcanvasTrigger.getAttribute(offcanvas.vars.attributes.triggerOpenId)

                offcanvas.closeAll();
                offcanvas.open(offcanvasId);

            });

        }

        const $closeOffcanvasTriggers = document.querySelectorAll(offcanvas.vars.queries.close);

        if($closeOffcanvasTriggers.length === 0){
            return false;
        }

        for(const $closeOffcanvasTrigger of $closeOffcanvasTriggers){

            $closeOffcanvasTrigger.addEventListener('click', () => {

                offcanvas.closeAll();

            });

        }

        for(const $offcanvasElement of $offcanvasElements){

            let executed = 1;
            const shouldScrollToTop = $offcanvasElement.getAttribute(offcanvas.vars.attributes.scrollToTop);

            if(shouldScrollToTop === 'true'){
                observeDOM( $offcanvasElement, () => {
                    if(executed % 2 === 0 && $offcanvasElement.classList.contains(offcanvas.vars.classes.show)){
                        window.scroll({top: 0, behavior: "smooth"});
                    }
                    executed++;
                });
            }

            if($offcanvasElement.getAttribute(offcanvas.vars.attributes.openInitially) === 'true'){
                const offcanvasId = $offcanvasElement.getAttribute(offcanvas.vars.attributes.id);
                offcanvas.open(offcanvasId);
            }

        }

    },

    clickOutside($clickTarget){

        const $clickedOffcanvas = $clickTarget.closest(offcanvas.vars.queries.component);
        const $clickedOpenOffcanvasTrigger = $clickTarget.closest(`*[${offcanvas.vars.attributes.triggerOpenId}]`);

        if(!$clickedOffcanvas && !$clickedOpenOffcanvasTrigger){

            offcanvas.closeAll();

        }

    },

    closeAll(){

        const $offcanvasLayers = document.querySelectorAll(offcanvas.vars.queries.component);

        if($offcanvasLayers.length === 0){
            return false;
        }

        for(const $offcanvas of $offcanvasLayers){

            $offcanvas.classList.remove(offcanvas.vars.classes.show);

        }

    },

    open(id = ''){

        const $offcanvas = document.querySelector(`*[${offcanvas.vars.attributes.id}="${id}"]`);

        if(!$offcanvas){
            return false;
        }

        $offcanvas.classList.add(offcanvas.vars.classes.show);

    },

    moveToBody($offcanvasElement){

        document.body.appendChild($offcanvasElement.cloneNode(true));
        $offcanvasElement.remove();

    },

}
export const toTopButton = {
    vars: {

        queries: {
            component:                      '*[data-js=to-top-button]',
        },

        classes: {
            show:                           'to-top-button--show',
        },

        values: {
            requiredViewportWidth:          '1280',
            minScrolledPosition:            '100'
        }

    },
    init(){

        toTopButton.addEventTrigger();

    },
    addEventTrigger(){

        let lastKnownScrollPosition = 0;
        let ticking = false;
        const $toTopButton = document.querySelector(toTopButton.vars.queries.component);

        if(!$toTopButton){
            return false;
        }

        document.addEventListener('scroll', (event) => {

            lastKnownScrollPosition = window.scrollY;

            if (!ticking && window.innerWidth >= toTopButton.vars.values.requiredViewportWidth) {
                window.requestAnimationFrame(() => {

                    toTopButton.eventHandler($toTopButton, lastKnownScrollPosition);

                    ticking = false;
                });

                ticking = true;
            }
            
        });

        $toTopButton.addEventListener('click', (event) => {
            window.scroll({top: 0, behavior: "smooth"});
        });

    },

    eventHandler($toTopButton, lastKnownScrollPosition){

        if(lastKnownScrollPosition > toTopButton.vars.values.minScrolledPosition){

            toTopButton.show($toTopButton);

        } else {

            toTopButton.hide($toTopButton);

        }

    },

    show($toTopButton){
        $toTopButton.classList.add(toTopButton.vars.classes.show);
    },

    hide($toTopButton){
        $toTopButton.classList.remove(toTopButton.vars.classes.show);
    }
}
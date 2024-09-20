export const toTopButton = {
    vars: {
        componentQuery:             '*[data-js=to-top-button]',

        showClass:                  'to-top-button--show',

        requiredViewportWidth:      '1280',

        minScrolledPosition:        '100'
    },
    init($toTopButton){

        toTopButton.addEventTrigger($toTopButton);

    },
    addEventTrigger($toTopButton){

        let lastKnownScrollPosition = 0;
        let ticking = false;

        document.addEventListener('scroll', (event) => {

            lastKnownScrollPosition = window.scrollY;

            if (!ticking && window.innerWidth >= toTopButton.vars.requiredViewportWidth) {
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

        if(lastKnownScrollPosition > toTopButton.vars.minScrolledPosition){

            toTopButton.show($toTopButton);

        } else {

            toTopButton.hide($toTopButton);

        }

    },

    show($toTopButton){
        $toTopButton.classList.add(toTopButton.vars.showClass);
    },

    hide($toTopButton){
        $toTopButton.classList.remove(toTopButton.vars.showClass);
    }
}
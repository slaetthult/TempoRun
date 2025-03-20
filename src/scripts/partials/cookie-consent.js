import { getCookieValueOf, setCookie, deleteCookie } from "@scripts/utils/cookies";

export const cookieConsent = {
    vars: {

        queries: {
            parent:                     '*[data-js=cookie-consent]',
            acceptAll:                  '*[data-cookie-consent-accept-all]',
            acceptTechnical:            '*[data-cookie-consent-accept-technical]',
            rejectSettings:             '*[data-reject-cookie-settings]',
        },

        names: {
            acceptAllCookie:            'cookiesAcceptedAll',
            acceptTechnicalCookie:      'cookiesAcceptedTechnical',
        },

        classes: {
            show:                       'cookie-consent--show'
        }

    },

    init(){

        cookieConsent.addEventTrigger();
        cookieConsent.toggleLayer();

    },

    toggleLayer(){

        const $cookieLayer = document.querySelector(cookieConsent.vars.queries.parent);

        if(!getCookieValueOf('cookiesAcceptedAll') && !getCookieValueOf('cookiesAcceptedTechnical')){

            $cookieLayer.classList.add(cookieConsent.vars.classes.show);

        } else {

            $cookieLayer.classList.remove(cookieConsent.vars.classes.show);

        }

    },

    addEventTrigger(){

        const $acceptAllButton = document.querySelector(cookieConsent.vars.queries.acceptAll);
        const $acceptTechnicalButton = document.querySelector(cookieConsent.vars.queries.acceptTechnical);
        const $rejectSettingsButtons = document.querySelectorAll(cookieConsent.vars.queries.rejectSettings);

        $acceptAllButton.addEventListener('click', (event) => {

            cookieConsent.acceptAll();

        });

        $acceptTechnicalButton.addEventListener('click', (event) => {

            cookieConsent.acceptTechnical();

        });

        for(const $rejectSettingsButton of $rejectSettingsButtons){

            $rejectSettingsButton.addEventListener('click', (event) => {

                cookieConsent.reset();

            });

        }

    },

    acceptAll(){

        deleteCookie(cookieConsent.vars.names.acceptTechnicalCookie);
        setCookie(cookieConsent.vars.names.acceptAllCookie, 'true');
        cookieConsent.toggleLayer();
        document.location.reload();

    },

    acceptTechnical(){

        deleteCookie(cookieConsent.vars.names.acceptAllCookie);
        setCookie(cookieConsent.vars.names.acceptTechnicalCookie, 'true');
        cookieConsent.toggleLayer();
        document.location.reload();

    },

    reset(){

        deleteCookie(cookieConsent.vars.names.acceptAllCookie);
        deleteCookie(cookieConsent.vars.names.acceptTechnicalCookie);
        cookieConsent.toggleLayer();

    }

}
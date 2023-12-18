import { getCookieValueOf, setCookie, deleteCookie } from "@scripts/utils/cookies";

export const cookieConsent = {
    vars: {

        parentQuery:                    '*[data-js=cookie-consent]',
        acceptAllQuery:                 '*[data-cookie-consent-accept-all]',
        acceptTechnicalQuery:           '*[data-cookie-consent-accept-technical]',
        rejectSettingsQuery:            '*[data-reject-cookie-settings]',

        acceptAllCookieName:            'cookiesAcceptedAll',
        acceptTechnicalCookieName:      'cookiesAcceptedTechnical',

        showClass:                      'cookie-consent--show'

    },

    init(){

        cookieConsent.addEventTrigger();
        cookieConsent.toggleLayer();

    },

    toggleLayer(){

        const $cookieLayer = document.querySelector(cookieConsent.vars.parentQuery);

        if(!getCookieValueOf('cookiesAcceptedAll') && !getCookieValueOf('cookiesAcceptedTechnical')){

            $cookieLayer.classList.add(cookieConsent.vars.showClass);

        } else {

            $cookieLayer.classList.remove(cookieConsent.vars.showClass);

        }

    },

    addEventTrigger(){

        const $acceptAllButton = document.querySelector(cookieConsent.vars.acceptAllQuery);
        const $acceptTechnicalButton = document.querySelector(cookieConsent.vars.acceptTechnicalQuery);
        const $rejectSettingsButtons = document.querySelectorAll(cookieConsent.vars.rejectSettingsQuery);

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

        deleteCookie(cookieConsent.vars.acceptTechnicalCookieName);
        setCookie(cookieConsent.vars.acceptAllCookieName, 'true');
        cookieConsent.toggleLayer();
        document.location.reload();

    },

    acceptTechnical(){

        deleteCookie(cookieConsent.vars.acceptAllCookieName);
        setCookie(cookieConsent.vars.acceptTechnicalCookieName, 'true');
        cookieConsent.toggleLayer();
        document.location.reload();

    },

    reset(){

        deleteCookie(cookieConsent.vars.acceptAllCookieName);
        deleteCookie(cookieConsent.vars.acceptTechnicalCookieName);
        cookieConsent.toggleLayer();

    }

}
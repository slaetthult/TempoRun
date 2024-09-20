import { getCookieValueOf, setCookie, deleteCookie } from "@scripts/utils/cookies";

export const cookieConsent = {
    vars: {

        acceptAllQuery:                 '*[data-cookie-consent-accept-all]',
        acceptTechnicalQuery:           '*[data-cookie-consent-accept-technical]',
        rejectSettingsQuery:            '*[data-reject-cookie-settings]',

        acceptAllCookieName:            'cookiesAcceptedAll',
        acceptTechnicalCookieName:      'cookiesAcceptedTechnical',

        showClass:                      'cookie-consent--show'

    },

    init($cookieLayer){

        cookieConsent.addEventTrigger($cookieLayer);
        cookieConsent.toggleLayer($cookieLayer);

    },

    toggleLayer($cookieLayer){

        if(!getCookieValueOf('cookiesAcceptedAll') && !getCookieValueOf('cookiesAcceptedTechnical')){

            $cookieLayer.classList.add(cookieConsent.vars.showClass);

        } else {

            $cookieLayer.classList.remove(cookieConsent.vars.showClass);

        }

    },

    addEventTrigger($cookieLayer){

        const $acceptAllButton = document.querySelector(cookieConsent.vars.acceptAllQuery);
        const $acceptTechnicalButton = document.querySelector(cookieConsent.vars.acceptTechnicalQuery);
        const $rejectSettingsButtons = document.querySelectorAll(cookieConsent.vars.rejectSettingsQuery);

        $acceptAllButton.addEventListener('click', (event) => {

            cookieConsent.acceptAll($cookieLayer);

        });

        $acceptTechnicalButton.addEventListener('click', (event) => {

            cookieConsent.acceptTechnical($cookieLayer);

        });

        for(const $rejectSettingsButton of $rejectSettingsButtons){

            $rejectSettingsButton.addEventListener('click', (event) => {

                cookieConsent.reset($cookieLayer);

            });

        }

    },

    acceptAll($cookieLayer){

        deleteCookie(cookieConsent.vars.acceptTechnicalCookieName);
        setCookie(cookieConsent.vars.acceptAllCookieName, 'true');
        cookieConsent.toggleLayer($cookieLayer);
        document.location.reload();

    },

    acceptTechnical($cookieLayer){

        deleteCookie(cookieConsent.vars.acceptAllCookieName);
        setCookie(cookieConsent.vars.acceptTechnicalCookieName, 'true');
        cookieConsent.toggleLayer($cookieLayer);
        document.location.reload();

    },

    reset($cookieLayer){

        deleteCookie(cookieConsent.vars.acceptAllCookieName);
        deleteCookie(cookieConsent.vars.acceptTechnicalCookieName);
        cookieConsent.toggleLayer($cookieLayer);

    }

}
import TomSelect from "tom-select";

export const selectbox = {

    vars: {
        wrapperQuery:                   '*[data-js=selectbox]',
        selectQuery:                    'select',

        maxSelectableAttribute:         'data-select-max-selectable',
        redirectToValueAttribute:       'data-redirect-to-value',

        config: {
            maxItems: 1
        }
    },

    init(){

        selectbox.find();

    },

    find(){

        const $selects = document.querySelectorAll(selectbox.vars.wrapperQuery);

        for(const $select of $selects){

            selectbox.vars.config.maxItems = parseInt($select.getAttribute(selectbox.vars.maxSelectableAttribute));
            const redirectToValue = $select.getAttribute(selectbox.vars.redirectToValueAttribute);

            selectbox.bind($select.querySelector(selectbox.vars.selectQuery), redirectToValue);

        }

    },

    bind($select, redirectToValue){

        const $tomSelect = new TomSelect($select, selectbox.vars.config);

        if(redirectToValue){
            selectbox.addEvents.redirectToValue($tomSelect);
        }

    },

    addEvents: {

        redirectToValue($tomSelect){

            $tomSelect.on('change', (value) => {

                window.location.href = value;

            });

        }
    }
}
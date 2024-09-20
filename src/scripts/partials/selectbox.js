import TomSelect from "tom-select";

export const selectbox = {

    vars: {
        wrapperQuery:                   '*[data-js=selectbox]',
        selectQuery:                    'select',

        maxSelectableAttribute:         'data-select-max-selectable',
        redirectToValueAttribute:       'data-redirect-to-value',

        config: {
            maxItems: 1,
            searchField: null
        }
    },

    init($selectbox){

        selectbox.bind($selectbox);

    },

    bind($selectbox){

        const config = selectbox.vars.config;

        config.maxItems = parseInt($selectbox.getAttribute(selectbox.vars.maxSelectableAttribute));

        const $input = $selectbox.querySelector('input');

        if($input){
            $selectbox.querySelector('input').readOnly = true;
        }

        const $select = $selectbox.querySelector(selectbox.vars.selectQuery);

        const $tomSelect = new TomSelect($select, config);

        const redirectToValue = $selectbox.getAttribute(selectbox.vars.redirectToValueAttribute);
        if(redirectToValue){
            selectbox.addEvents.redirectToValue($tomSelect);
        }

    },

    addEvents: {

        redirectToValue($tomSelect){

            $tomSelect.on('change', (value, event) => {

                //event.preventDefault();

                window.location.href = value;

            });

        }
    }
}
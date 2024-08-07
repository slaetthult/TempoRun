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

    init(){

        selectbox.find();

    },

    find(){

        const $selects = document.querySelectorAll(selectbox.vars.wrapperQuery);

        if($selects.length === 0){
            return false;
        }

        for(const $select of $selects){

            selectbox.vars.config.maxItems = parseInt($select.getAttribute(selectbox.vars.maxSelectableAttribute));
            const redirectToValue = $select.getAttribute(selectbox.vars.redirectToValueAttribute);

            selectbox.bind($select.querySelector(selectbox.vars.selectQuery), redirectToValue);

            const $input = $select.querySelector('input');

            if($input){
                $select.querySelector('input').readOnly = true;
            }

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

            $tomSelect.on('change', (value, event) => {

                //event.preventDefault();

                window.location.href = value;

            });

        }
    }
}
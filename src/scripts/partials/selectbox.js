import TomSelect from "tom-select";

export const selectbox = {

    vars: {

        queries: {
            wrapper:                   '*[data-js=selectbox]',
            select:                    'select',
        },

        attributes: {
            maxSelectable:         'data-select-max-selectable',
            redirectToValue:       'data-redirect-to-value',
        },

        config: {
            maxItems: 1,
            plugins: ['clear_button']
        }
    },

    init(){

        selectbox.find();

    },

    find(){

        const $selects = document.querySelectorAll(selectbox.vars.queries.wrapper);

        if($selects.length === 0){
            return false;
        }

        for(const $select of $selects){

            selectbox.vars.config.maxItems = parseInt($select.getAttribute(selectbox.vars.attributes.maxSelectable));
            const redirectToValue = $select.getAttribute(selectbox.vars.attributes.redirectToValue);

            selectbox.bind($select.querySelector(selectbox.vars.queries.select), redirectToValue);

            const $input = $select.querySelector('input');

            if($input){
                $select.querySelector('input').readOnly = false;
            }

        }

    },

    bind($select, redirectToValue){

        if($select.classList.contains('tomselected')){
            return false;
        }

        const $tomSelect = new TomSelect($select, selectbox.vars.config);

        if(redirectToValue ==  true){
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
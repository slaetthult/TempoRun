import TomSelect from "tom-select";

export const selectbox = {

    vars: {
        wrapperQuery:           '*[data-js=selectbox]',
        selectQuery:            'select',

        maxSelectableAttribute: 'data-select-max-selectable',

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

            selectbox.bind($select.querySelector(selectbox.vars.selectQuery));

        }

    },

    bind($select){

        new TomSelect($select, selectbox.vars.config);

    }
}
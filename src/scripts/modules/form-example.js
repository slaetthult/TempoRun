import { formValidation } from "@scripts/utils/form-validation.js";

export const formExample = {
    vars: {
        formQuery:          '#form-example'
    },
    init(){

        formValidation.init();

        /**
         The following code is only required, if you want to submit the form via js without html-form-element and page reload
         */
        formExample.formSubmit();

    },
    formSubmit(){

        const $form = document.querySelector(formExample.vars.formQuery);

        const submitHandler = (event) => {

            alert('Your form submit function via js!');

        }

        formValidation.manualSubmit($form, submitHandler);

    }
}
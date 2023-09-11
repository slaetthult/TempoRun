import TomSelect from "tom-select";

export const formValidation = {

    vars: {

        formQuery:              '*[data-js=form-validation]',
        requiredAttribute:      'data-validation-required',

        validationEvents:       ['keyup', 'change', 'input']

    },

    init(){

        formValidation.addEventTrigger();

    },

    addEventTrigger(){

        const $forms = document.querySelectorAll(formValidation.vars.formQuery);

        for(const $form of $forms){

            const $formFields = new Set([
                ...$form.querySelectorAll("input"),
                ...$form.querySelectorAll("select"),
                ...$form.querySelectorAll("textarea")
            ]);

            for(const $formField of $formFields){

                for(const eventName of formValidation.vars.validationEvents){

                    $formField.addEventListener(eventName, (event) => {

                        formValidation.addEventHandler($formField);

                    });

                }

            }

            $form.addEventListener("submit", (event) => {

                for(const $formField of $formFields){

                    formValidation.addEventHandler($formField);

                }

                if(!$form.checkValidity()){

                    event.preventDefault();

                }

            });

        }

    },

    addEventHandler($formField){

        if($formField.hasAttribute(formValidation.vars.requiredAttribute)){

            $formField.setAttribute('required', "");

        }

        $formField.setAttribute('value', $formField.value);
        $formField.setAttribute('data-value', $formField.value);

    }

}
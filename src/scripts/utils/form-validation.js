export const formValidation = {

    vars: {

        formQuery:                          '*[data-js=form-validation]',
        passwordQuery:                      '*[type=password]',

        validationRequiredAttribute:        'data-validation-required',
        submitMessageAttribute:             'data-validation-submit-message',

        submitMessageClass:                 'form__submit-message w12',

        validationEvents:                   ['keyup', 'change', 'input'],
        submitEvent:                        'submit',

        passwordErrorText:                  'Passwords are not matching!',

        initialized:                        false

    },

    init(){

        if(!formValidation.vars.initialized){

            formValidation.addEventTrigger();
            formValidation.vars.initialized = true;

        }

    },

    addEventTrigger(){

        const $forms = document.querySelectorAll(formValidation.vars.formQuery);

        if($forms.length === 0){
            return false;
        }

        for(const $form of $forms){

            const $passwordFields = $form.querySelectorAll(formValidation.vars.passwordQuery);

            const $formFields = new Set([
                ...$form.querySelectorAll('input'),
                ...$form.querySelectorAll('select'),
                ...$form.querySelectorAll('textarea')
            ]);

            for(const $formField of $formFields){

                for(const eventName of formValidation.vars.validationEvents){

                    $formField.addEventListener(eventName, (event) => {

                        formValidation.addEventHandler($formField, $passwordFields);

                    });

                }

            }

            $form.addEventListener(formValidation.vars.submitEvent, (event) => {

                for(const $formField of $formFields){

                    formValidation.addEventHandler($formField, $passwordFields);

                }

                if(!$form.checkValidity()){

                    $form.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                    event.preventDefault();

                } else {

                    setTimeout(() => {

                        formValidation.showSubmitMessage($form);

                    }, 100);

                }

            });

        }

    },

    addEventHandler($formField, $passwordFields = null){

        formValidation.setRequiredAttribute($formField);
        formValidation.setValueAttribute($formField);
        formValidation.checkForMatchingPasswords($passwordFields);

    },

    setRequiredAttribute($formField){

        if($formField.hasAttribute(formValidation.vars.validationRequiredAttribute)){

            $formField.setAttribute('required', '');

        }

    },

    setValueAttribute($formField){

        $formField.setAttribute('value', $formField.value);
        $formField.setAttribute('data-value', $formField.value);

    },

    checkForMatchingPasswords($passwordFields){

        if($passwordFields && $passwordFields.length === 2){

            const $password = $passwordFields[0];
            const $passwordConfirm = $passwordFields[1];

            if($password.value !== $passwordConfirm.value){

                $passwordConfirm.setCustomValidity(formValidation.vars.passwordErrorText);

            } else {

                $passwordConfirm.setCustomValidity('');

            }

        }

    },

    showSubmitMessage($form){

        const submitMessage = $form.getAttribute(formValidation.vars.submitMessageAttribute);

        if(submitMessage && submitMessage.length > 0){
            $form.innerHTML = `<p class="${formValidation.vars.submitMessageClass}">${submitMessage}</p>`;
        }

        $form.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });

    },

    manualSubmit($form = null, submitHandler){

        if(!$form){
            return false;
        }

        $form.addEventListener(formValidation.vars.submitEvent, (event) => {

            if($form.checkValidity()){

                submitHandler(event);

            }

            event.preventDefault();

        });

    }

}
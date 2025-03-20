export const formValidation = {

    vars: {

        queries: {
            form:                           '*[data-js=form-validation]',
            password:                       '*[type=password]',
        },

        attributes: {
            validationRequired:             'data-validation-required',
            submitMessage:                  'data-validation-submit-message',
        },

        classes: {
            submitMessage:                  'form__submit-message w12',
        },

        events: {
            validation:                     ['keyup', 'change', 'input'],
            submit:                         'submit',
        },

        texts: {
            passwordError:                  'Passwords are not matching!',
            passwordRegexError:             'Passwords is not valid!',
        },

        regexes: {
            password:                       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{9,}$/,
        },

        states: {
            initialized:                    false
        }

    },

    init(){

        if(!formValidation.vars.states.initialized){

            formValidation.addEventTrigger();
            formValidation.vars.states.initialized = true;

        }

    },

    addEventTrigger(){

        const $forms = document.querySelectorAll(formValidation.vars.queries.form);

        if($forms.length === 0){
            return false;
        }

        for(const $form of $forms){

            const $passwordFields = $form.querySelectorAll(formValidation.vars.queries.password);

            const $formFields = new Set([
                ...$form.querySelectorAll('input'),
                ...$form.querySelectorAll('select'),
                ...$form.querySelectorAll('textarea')
            ]);

            for(const $formField of $formFields){

                for(const eventName of formValidation.vars.events.validation){

                    $formField.addEventListener(eventName, (event) => {

                        formValidation.addEventHandler($formField, $passwordFields);

                    });

                }

            }

            $form.addEventListener(formValidation.vars.events.submit, (event) => {

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

        if($formField.hasAttribute(formValidation.vars.attributes.validationRequired)){

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
            const regex = formValidation.vars.regexes.password;

            if(!regex.test($password.value)){
                $password.setCustomValidity(formValidation.vars.texts.passwordRegexError);
            } else {
                $password.setCustomValidity('');
            }

            if($password.value !== $passwordConfirm.value){

                $passwordConfirm.setCustomValidity(formValidation.vars.texts.passwordError);

            } else {

                $passwordConfirm.setCustomValidity('');

            }

        }

    },

    showSubmitMessage($form){

        const submitMessage = $form.getAttribute(formValidation.vars.attributes.submitMessage);

        if(submitMessage && submitMessage.length > 0){
            $form.innerHTML = `<p class="${formValidation.vars.classes.submitMessage}">${submitMessage}</p>`;
        }

        $form.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });

    },

    manualSubmit($form = null, submitHandler){

        if(!$form){
            return false;
        }

        $form.addEventListener(formValidation.vars.events.submit, (event) => {

            if($form.checkValidity()){

                submitHandler(event);

            }

            event.preventDefault();

        });

    }

}
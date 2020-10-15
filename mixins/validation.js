export default {

    data(){
        return {
            validationSuccessfully: false,
            validationIndicatorAttribute: "data-validate",
            cssErrorClass: 'error',
            cssSuccessClass: 'success',
            scrollToErrorFormFieldOffset: -220
        }
    },

    mounted(){

        this.validationEventTrigger();

    },

    methods: {

        validationEventTrigger(){

            const _this = this;
            const $component = this.$el;

            ['keyup', 'change'].forEach( eventName =>

                $component.addEventListener(eventName, (event)=>{

                    const $element = event.target;

                    if($element.getAttribute(_this.validationIndicatorAttribute) !== null){

                        _this.handleValidation(_this.getFormFieldData($element));

                    }

                })

            );

        },

        getFormFieldData($element){

            const formField = {};

            formField.$element = $element;
            formField.type = formField.$element.type;
            formField.value = formField.$element.value;
            formField.minLength = formField.$element.getAttribute("data-validate-minlength") ? parseInt(formField.$element.getAttribute("data-validate-minlength")) : 1;
            formField.maxLength = formField.$element.getAttribute("data-validate-maxlength") ? parseInt(formField.$element.getAttribute("data-validate-maxlength")) : -1;
            formField.isNotRequired = formField.$element.getAttribute("data-validate-not-required") !== null ? true : false;

            return formField;

        },

        handleValidation(formField){

            const formFieldType = formField.type;

            if(formFieldType === 'email'){

                this.checkEmail(formField);

            } else if(formFieldType === 'select-one'){

                this.checkSelect(formField);

            } else if(formFieldType === 'checkbox'){

                this.checkCheckbox(formField);

            } else if(formFieldType === 'radio'){

                this.checkRadiobox(formField);

            } else if(formFieldType === 'text' || formFieldType === 'textarea' || formFieldType === 'search' || formFieldType === 'number' || formFieldType === 'tel' || formFieldType === 'url'){

                this.checkNotEmpty(formField);

            } else if(formFieldType === 'password'){

                this.checkNotEmpty(formField);

                this.checkConfirmedPassword();

            }

        },

        checkEmail(formField){

            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const correctEmail = regex.test(String(formField.value).toLowerCase());

            if(!correctEmail){

                this.addCssErrorClass(formField);

            } else {

                this.addCssSuccessClass(formField);

            }

        },

        checkNotEmpty(formField){

            const formFieldValue = formField.value.trim();

            if(formField.isNotRequired && formFieldValue.length === 0){

                this.removeCssValidationClasses(formField);

            }else if(formFieldValue.length < formField.minLength){

                this.addCssErrorClass(formField);

            } else if(formField.maxLength !== -1 && formFieldValue.length > formField.maxLength){

                this.addCssErrorClass(formField);

            } else {

                this.addCssSuccessClass(formField);

            }

        },

        checkCheckbox(formField){

            if(!formField.$element.checked){

                this.addCssErrorClass(formField);

            } else {

                this.addCssSuccessClass(formField);

            }

        },

        checkRadiobox(formField){

            const radioGroupName = formField.$element.getAttribute("name");
            const $radioGroupFormFields = this.$el.querySelectorAll("input[type=radio][name="+ radioGroupName +"]");
            let error = true;

            for(const $radioGroupFormField of $radioGroupFormFields){

                if($radioGroupFormField.checked){

                    error = false;

                }

            }

            for(const $radioGroupFormField of $radioGroupFormFields){

                formField.$element = $radioGroupFormField;

                if(error){

                    this.addCssErrorClass(formField);

                } else {

                    this.removeCssValidationClasses(formField);

                    if($radioGroupFormField.checked){

                        this.addCssSuccessClass(formField);

                    }

                }

            }

        },

        checkSelect(formField){

            if(!formField.value || formField.value === ''){

                this.addCssErrorClass(formField);

            } else {

                this.addCssSuccessClass(formField);

            }

        },

        checkConfirmedPassword(){

            const formField = {};
            const $formFieldPassword = this.$el.querySelectorAll("*[type=password]")[0];
            const $formFieldPasswordConfirm = this.$el.querySelectorAll("*[type=password]")[1];

            if($formFieldPassword && $formFieldPasswordConfirm){

                formField.$element = $formFieldPasswordConfirm;
                const formFieldPasswordValue = $formFieldPassword.value;
                const formFieldPasswordConfirmValue = $formFieldPasswordConfirm.value;

                if(formFieldPasswordValue !== formFieldPasswordConfirmValue || formFieldPasswordConfirmValue === ''){

                   this.addCssErrorClass(formField);

                } else {

                    this.addCssSuccessClass(formField);

                }

            }

        },

        addCssSuccessClass(formField){

            formField.$element.classList.add(this.cssSuccessClass);
            formField.$element.classList.remove(this.cssErrorClass);

        },

        addCssErrorClass(formField){

            formField.$element.classList.add(this.cssErrorClass);
            formField.$element.classList.remove(this.cssSuccessClass);

        },

        removeCssValidationClasses(formField){

            formField.$element.classList.remove(this.cssErrorClass);
            formField.$element.classList.remove(this.cssSuccessClass);

        },

        validateFormFields(){

            const $formFields = this.$el.querySelectorAll("[data-validate]");
            let $firstFormFieldError = null;

            for(const $formField of $formFields){

                this.handleValidation(this.getFormFieldData($formField));

                if($formField.classList.contains(this.cssErrorClass) && !$firstFormFieldError){

                  $firstFormFieldError = $formField;

                }

            }

            if($firstFormFieldError){

                const $errorFormElement = ($firstFormFieldError.type && ($firstFormFieldError.type === 'checkbox' || $firstFormFieldError.type === 'radio')) ? $firstFormFieldError.closest("div") : $firstFormFieldError;
                this.$scrollTo($errorFormElement, {offset: this.scrollToErrorFormFieldOffset});

            }

            this.validationSuccessfully = !$firstFormFieldError;

        }

    }

}

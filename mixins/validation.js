export default {

    data(){
        return {
            validationSuccessfully: false,
            cssErrorClass: 'error',
            cssSuccessClass: 'success'
        }
    },

    methods: {

        validate(event, options){

            const formField = {};
            formField.condition = {};

            formField.$element = event.currentTarget;
            formField.type = formField.$element.type;
            formField.value = formField.$element.value;
            formField.classList = formField.$element.classList;
            formField.condition.type = options.condition;
            formField.condition.minLength = options.minLength ? parseInt(options.minLength) : 1;

            this.handleValidation(formField);
            this.checkIfReadyForSubmit();

        },

        handleValidation(formField){

            if(formField.condition.type === 'required'){

                if(formField.type === 'checkbox' || formField.type === 'radiobox'){

                    this.checkRadioCheckbox(formField);

                } else {

                    this.checkNotEmpty(formField);

                }

            } else if(formField.condition.type === 'email'){

                this.checkEmail(formField);

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

            if(formFieldValue.length < formField.condition.minLength){

                this.addCssErrorClass(formField);

            } else {

                this.addCssSuccessClass(formField);

            }

        },

        checkRadioCheckbox(formField){

            if(!formField.$element.checked){

                this.addCssErrorClass(formField);

            } else {

                this.addCssSuccessClass(formField);

            }

        },

        addCssSuccessClass(formField){

            formField.classList.add(this.cssSuccessClass);
            formField.classList.remove(this.cssErrorClass);

        },

        addCssErrorClass(formField){

            formField.classList.add(this.cssErrorClass);
            formField.classList.remove(this.cssSuccessClass);

        },

        checkIfReadyForSubmit(){

            const formFields = this.$el.querySelectorAll("input:not([type=hidden])");

            for(const formField of formFields){

                if (!formField.classList.contains(this.cssSuccessClass)){

                    this.validationSuccessfully = false;
                    return false;

                }

            }

            this.validationSuccessfully = true;

        }

    }

}
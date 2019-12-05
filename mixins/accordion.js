export default {
    data (){
        return {

            currentActiveAccordionId: null

        }
    },
    mounted(){

        let _this = this;

        _this.calcAccordionHeight();

        window.addEventListener("resize", () => {
            _this.calcAccordionHeight();
        });

    },
    methods:{

        toggleAccordion(event, id = null){

            if(id === null){

                console.log("Accordion id is missing!");
                return false;

            }

            this.currentActiveAccordionId = id === this.currentActiveAccordionId ? -1 : id;

        },

        calcAccordionHeight(){

            let $accordions = this.$el.querySelectorAll('*[data-accordion]');

            if($accordions.length === 0){

                console.log("No accordions fond!");
                return false;

            }

            for (let $accordion of $accordions){

                let $accordionContentWrapper = $accordion.querySelector('*[data-accordion-content]');

                $accordionContentWrapper.style.height = '';
                $accordionContentWrapper.style.height = $accordionContentWrapper.scrollHeight + 'px';

            }

        }
    }
};
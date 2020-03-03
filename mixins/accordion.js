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

            this.currentActiveAccordionId = id === this.currentActiveAccordionId ? -1 : id;

        },

        calcAccordionHeight(){

            let $accordions = this.$el.querySelectorAll('*[data-accordion]');

            if($accordions.length === 0){

                console.log("No accordions found!");
                return false;

            }

            for (let $accordion of $accordions){

                let $accordionContentWrapper = $accordion.querySelector('*[data-accordion-content]');

                $accordionContentWrapper.style.height = '';
                $accordionContentWrapper.style.height = $accordionContentWrapper.scrollHeight + 'px';

            }

        },

        openCertainAccordion(id){
            this.currentActiveAccordionId = id;
        }

    }
};
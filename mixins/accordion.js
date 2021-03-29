export default {

    data (){

        return {

            currentActiveAccordionId: null,
            listenToAccordionDOMChanges: true

        }

    },

    mounted(){

        this.accordionEventTrigger();

    },

    methods:{

        accordionEventTrigger(){

            const _this = this;

            _this.calcAccordionHeight();

            window.addEventListener("resize", () => {

                _this.calcAccordionHeight();

            });

            this.$nextTick(() => {

                _this.openAccordionByAnchor();

                if(_this.listenToAccordionDOMChanges){

                    const targetNode = _this.$el;
                    const config = { attributes: false, childList: true, subtree: true };

                    const callback = function(mutationsList, observer) {

                        for(const mutation of mutationsList) {
                            if (mutation.type === 'childList') {

                                _this.calcAccordionHeight();

                            }
                        }

                    };

                    const observer = new MutationObserver(callback);
                    observer.observe(targetNode, config);

                }

            });

        },

        toggleAccordion(event, id = null){

            this.currentActiveAccordionId = id === this.currentActiveAccordionId ? -1 : id;

        },

        calcAccordionHeight(){

            const $accordions = this.$el.querySelectorAll('*[data-accordion]');

            if($accordions.length === 0){

                console.log("No accordions found!");
                return false;

            }

            for (const $accordion of $accordions){

                let $accordionContentWrapper = $accordion.querySelector('*[data-accordion-content]');

                $accordionContentWrapper.style.height = '';
                $accordionContentWrapper.style.height = $accordionContentWrapper.scrollHeight + 'px';

            }

        },

        openCertainAccordion(id){

            this.currentActiveAccordionId = id;

        },

        openAccordionByAnchor(){

            const _this = this;
            const anchorHashtag = $nuxt.$route.hash.replace(/#/g,'');
            const $accordions = this.$el.querySelectorAll('*[data-accordion]');

            if(anchorHashtag.length > 0 && $accordions.length > 0){

                $accordions.forEach(($accordion, index) => {

                    if($accordion.id === anchorHashtag){

                        _this.openCertainAccordion(index);

                    }

                });

            }

        }

    }

};

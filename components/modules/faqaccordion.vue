<template>
  <div class="faqaccordion">
      <div class="gridWrap">

          <div class="w12">
              <h2>Accordion Example</h2>

              <div class="accordion" data-accordion :class="{'active' : currentActiveAccordionId === 0}">
                  <a href="javascript:void(0);" class="accordion-trigger button" @click="toggleAccordion($event, 0)">Accordion 1</a>
                  <div class="accordion-content" data-accordion-content>
                      <div class="accordion-content-wrapper">
                          Accordion Text 1
                      </div>
                  </div>
              </div>
              <div class="accordion" data-accordion :class="{'active' : currentActiveAccordionId === 1}">
                  <a href="javascript:void(0);" class="accordion-trigger button" @click="toggleAccordion($event, 1)">Accordion 2</a>
                  <div class="accordion-content" data-accordion-content>
                      <div class="accordion-content-wrapper">
                          Accordion Text 2
                      </div>
                  </div>
              </div>
              <div class="accordion" data-accordion :class="{'active' : currentActiveAccordionId === 2}">
                  <a href="javascript:void(0);" class="accordion-trigger button" @click="toggleAccordion($event, 2)">Accordion 3</a>
                  <div class="accordion-content" data-accordion-content>
                      <div class="accordion-content-wrapper">
                          Accordion Text 3
                      </div>
                  </div>
              </div>
          </div>

      </div>
  </div>
</template>

<script>
    import accordion from "~/mixins/accordion";

    export default {
        props: [],
        mixins: [accordion],
        data(){
             return {
             }
        },
        mounted(){
            this.openCertainAccordion(0);
        }
    }
</script>

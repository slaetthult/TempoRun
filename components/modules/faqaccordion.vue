<template>
  <div class="faqaccordion">
      <div class="gridWrap">
          <div class="w12">
              <h1>Accordion-Modul</h1>

              <div class="accordion" data-accordion :class="{'active' : currentActiveAccordionId === 0}">
                  <button class="accordion-trigger" @click="toggleAccordion($event, 0)">Wie mache ich das?</button>
                  <div class="accordion-content" data-accordion-content>
                      <div class="accordion-content-wrapper">
                          Text1
                      </div>
                  </div>
              </div>
              <div class="accordion" data-accordion :class="{'active' : currentActiveAccordionId === 1}">
                  <button class="accordion-trigger" @click="toggleAccordion($event, 1)">Was mache ich?</button>
                  <div class="accordion-content" data-accordion-content>
                      <div class="accordion-content-wrapper">
                          Text2
                      </div>
                  </div>
              </div>
              <div class="accordion" data-accordion :class="{'active' : currentActiveAccordionId === 2}">
                  <button class="accordion-trigger" @click="toggleAccordion($event, 2)">Wo finde ich das?</button>
                  <div class="accordion-content" data-accordion-content>
                      <div class="accordion-content-wrapper">
                          Text3
                      </div>
                  </div>
              </div>

          </div>
      </div>
  </div>
</template>

<script>

    import myMixin from "../../mixins/accordion";

export default {
     props: [],
    mixins: [myMixin],
    data(){
         return {
             gallerySwiperOptions: {
                 navigation: {
                     nextEl: '.swiper-button-next',
                     prevEl: '.swiper-button-prev'
                 },
                 pagination: {
                     el: '.swiper-pagination',
                     type: 'bullets'
                 }
             }
         }
    },
     methods: {
    }
}
</script>
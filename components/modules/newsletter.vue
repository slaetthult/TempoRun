<template>
  <div class="newsletter">
      <div class="gridWrap">

          <div class="w12">

              <h2>Validation Example</h2>

              <div class="select">
                  <select class="selectbox" @change="validate($event, {condition: 'required'})" data-validate>
                      <option disabled selected>Choose gender</option>
                      <option>male</option>
                      <option>female</option>
                  </select>
              </div>

              <div class="input">
                  Name:
                  <label>
                      <input type="text" v-model="newsletterData.name" @keyup="validate($event, {condition: 'required'})" data-validate>
                  </label>
              </div>

              <div class="input">
                  2. Name:
                  <label>
                      <input type="text" v-model="newsletterData.name2">
                  </label>
              </div>

              <div class="input">
                  E-Mail:
                  <label>
                      <input type="email" v-model="newsletterData.email" @keyup="validate($event, {condition: 'email'})" data-validate>
                  </label>
              </div>

              <div class="textarea">
                  <label>
                      Message:
                      <textarea v-model="newsletterData.message" @keyup="validate($event, {condition:'required', minLength:20})" data-validate></textarea>
                  </label>
              </div>

              <div class="checkbox">
                  <label>
                      <input type="checkbox" v-model="newsletterData.privacyPolicy" @change="validate($event, {condition: 'required'})" data-validate>
                      <span>A beautiful checkbox with a <nuxt-link to="/">link</nuxt-link></span>
                  </label>
              </div>

              <button :disabled="!validationSuccessfully">Submit</button>

          </div>

      </div>
  </div>
</template>

<script>
import validation from "~/mixins/validation";

    export default {
        props: [],
        mixins: [validation],
        data(){
             return {
                 newsletterData: {
                     name: '',
                     name2: '',
                     email: '',
                     privacyPolicy: false,
                     message: ''
                 }
             }
        }
    }
</script>
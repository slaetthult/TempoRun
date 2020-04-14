<template>
  <div class="newsletter">
      <div class="gridWrap">

          <div class="w12">

              <h2>Validation Example</h2>

              <div class="select">
                  <select class="selectbox" v-model="newsletterData.gender" data-validate>
                      <option disabled selected value="">Choose gender</option>
                      <option>male</option>
                      <option>female</option>
                  </select>
              </div>

              <div class="radiobox">
                  <label>
                      <input type="radio" v-model="newsletterData.gender2" name="gender" value="male" data-validate>
                      <span>Male</span>
                  </label>
              </div>

              <div class="radiobox">
                  <label>
                      <input type="radio" v-model="newsletterData.gender2" name="gender" value="female" data-validate>
                      <span>Female</span>
                  </label>
              </div>

              <div class="input">
                  Name:
                  <label>
                      <input type="text" v-model="newsletterData.name" data-validate>
                  </label>
              </div>

              <div class="input">
                  2. Name:
                  <label>
                      <input type="text" v-model="newsletterData.name2">
                  </label>
              </div>

              <div class="input">
                  Password:
                  <label>
                      <input type="password" v-model="newsletterData.password" data-validate data-validate-minlength="8">
                  </label>
              </div>

              <div class="input">
                  Confirm password:
                  <label>
                      <input type="password" data-validate data-validate-minlength="8">
                  </label>
              </div>

              <div class="input">
                  E-Mail:
                  <label>
                      <input type="email" v-model="newsletterData.email" data-validate>
                  </label>
              </div>

              <div class="textarea">
                  <label>
                      Message:
                      <textarea v-model="newsletterData.message" data-validate data-validate-minlength="20"></textarea>
                  </label>
              </div>

              <div class="checkbox">
                  <label>
                      <input type="checkbox" v-model="newsletterData.privacyPolicy" value="checkbox1" data-validate>
                      <span>A beautiful checkbox with a <nuxt-link to="/">link</nuxt-link></span>
                  </label>
              </div>
              <div class="checkbox">
                  <label>
                      <input type="checkbox" v-model="newsletterData.privacyPolicy2" value="checkbox2" data-validate>
                      <span>A beautiful checkbox with a <nuxt-link to="/">link</nuxt-link></span>
                  </label>
              </div>

              <button @click="checkFormFields()">Submit</button>

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
                     privacyPolicy2: false,
                     message: '',
                     password: '',
                     gender: '',
                     gender2: false,
                 }
             }
        }
    }
</script>
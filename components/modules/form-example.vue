<template>
  <div class="form-example">
      <div class="grid-wrap">

          <div class="w12">

              <h2>Validation Example</h2>

              <div class="select">
                <label>
                  <select class="selectbox" v-model="formData.gender" data-validate>
                    <option disabled selected value="">Choose gender</option>
                    <option>male</option>
                    <option>female</option>
                  </select>
                </label>
              </div>

              <div class="radiobox">
                  <label>
                      <input type="radio" v-model="formData.gender2" name="gender" value="male" data-validate>
                      <span>Male</span>
                  </label>
              </div>

              <div class="radiobox">
                  <label>
                      <input type="radio" v-model="formData.gender2" name="gender" value="female" data-validate>
                      <span>Female</span>
                  </label>
              </div>

              <div class="input">
                  <label>
                      Name:
                      <input type="text" v-model="formData.name" data-validate>
                  </label>
              </div>

              <div class="input">
                  <label>
                      2. Name:
                      <input type="text" v-model="formData.name2">
                  </label>
              </div>

              <div class="input">
                  <label>
                      ZIP:
                      <input type="text" v-model="formData.zip" data-validate data-validate-optional data-validate-minlength="5" data-validate-maxlength="5">
                  </label>
              </div>

              <div class="input">
                  <label>
                      Password:
                      <input type="password" v-model="formData.password" data-validate data-validate-minlength="8">
                      <span class="validation-error-message">Please choose a password with at least 8 characters!</span>
                  </label>
              </div>

              <div class="input">
                  <label>
                      Confirm password:
                      <input type="password" data-validate data-validate-minlength="8">
                      <span class="validation-error-message">Passwords are different!</span>
                  </label>
              </div>

              <div class="input">
                  <label>
                      E-Mail:
                      <input type="email" v-model="formData.email" data-validate>
                  </label>
              </div>

              <div class="textarea">
                  <label>
                      Message:
                      <textarea v-model="formData.message" data-validate data-validate-minlength="20"></textarea>
                  </label>
              </div>

              <div class="checkbox">
                  <label>
                      <input type="checkbox" v-model="formData.privacyPolicy" value="checkbox1" data-validate>
                      <span>A beautiful checkbox with a <nuxt-link to="/">link</nuxt-link></span>
                  </label>
              </div>
              <div class="checkbox">
                  <label>
                      <input type="checkbox" v-model="formData.privacyPolicy2" value="checkbox2" data-validate>
                      <span>A beautiful checkbox with a <nuxt-link to="/">link</nuxt-link></span>
                  </label>
              </div>

              <button @click="submitForm()">Submit</button>

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
                 formData: {
                     name: '',
                     name2: '',
                     email: '',
                     privacyPolicy: false,
                     privacyPolicy2: false,
                     message: '',
                     password: '',
                     gender: '',
                     gender2: false,
                     zip: ''
                 }
             }
        },

        methods: {

            submitForm(){

                this.validateFormFields();

                if(this.validationSuccessfully){

                    this.$toast.success('Validation is successfull!');

                } else {

                    this.$toast.error('Validation error!');

                }

            }

        }
    }
</script>

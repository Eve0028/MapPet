<script setup>
import ReportButtons from '../components/ReportButtons.vue'
import * as yup from "yup";
import { ref } from "vue";
import { useAuthStore } from "../stores/auth.js";
import { Form, Field, ErrorMessage } from "vee-validate";
import { useRouter } from 'vue-router'
import { storeToRefs } from "pinia";

const router = useRouter()

const schema = yup.object().shape({
  username: yup
      .string().required("Username is required!")
      .min(3, "Must be at least 3 characters!")
      .max(20, "Must be maximum 20 characters!"),
  email: yup.string().required("Email is required!")
      .email(),
  password: yup.string().required("Password is required!")
      .min(8, 'Password must be 8 characters long')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[A-Z]/, 'Password requires an uppercase letter')
      .matches(/[^\w]/, 'Password requires a symbol'),
  passwordConfirmation: yup.string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
});

const authStore = useAuthStore()
const {register} = authStore
const {user} = storeToRefs(authStore)

if (user.value) {
  router.push('/account');
}

const successful = ref(false)
const loading = ref(false)
const message = ref("")


function handleRegister(userData) {
  message.value = "";
  successful.value = false;
  loading.value = true;

  register(userData).then(
      (data) => {
        message.value = data.message;
        successful.value = true;
        loading.value = false;
      },
      (error) => {
        message.value =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        successful.value = false;
        loading.value = false;
      }
  );
}

</script>

<template>
  <ReportButtons/>

  <h1 class="signup-header">Sign up</h1>
  <main class="signup-container">
    <Form @submit="handleRegister" v-if="!successful" :validation-schema="schema" class="signup form-vertical">
        <div class="form-group">
          <Field name="username" type="text" class="form-control" placeholder="username"/>
          <ErrorMessage name="username" class="error-feedback"/>
        </div>
        <div class="form-group">
          <Field name="email" type="email" class="form-control" placeholder="email address"/>
          <ErrorMessage name="email" class="error-feedback"/>
        </div>
        <div class="form-group">
          <Field name="password" type="password" class="form-control" placeholder="password"/>
          <ErrorMessage name="password" class="error-feedback"/>
        </div>
        <div class="form-group">
          <Field name="passwordConfirmation" type="password" class="form-control" placeholder="repeat password"/>
          <ErrorMessage name="passwordConfirmation" class="error-feedback"/>
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block btn-submit" :disabled="loading">
            <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
            ></span>
            <span>Sign Up</span>
          </button>
        </div>
    </Form>

    <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
    >
      {{ message }}
    </div>

    <router-link active-class="active"
                 exact
                 to="/login">
      <a class="sign-up">Log in</a>
    </router-link>
  </main>
</template>

<style lang="scss" scoped>

h1.signup-header {
  margin-top: 1.2em;
  margin-bottom: 0.7em;
}

.signup-container {
  text-align: center;

  .signup {
    margin: 0 auto;
    padding-bottom: 1em;
    width: 20em;

    .signup-button:hover {
      color: #ffffff;
      background-color: $primary-color;
    }
  }
}

</style>
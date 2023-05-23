<script setup>
import ReportButtons from '../components/ReportButtons.vue'
import { useAuthStore } from '../stores/auth'
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { ref } from "vue";
import { useRouter } from 'vue-router'
import { storeToRefs } from "pinia";

const router = useRouter()

const schema = yup.object().shape({
  email: yup.string().required("Email is required!")
      .email(),
  password: yup.string().required("Password is required!")
});

const authStore = useAuthStore()
const {login} = authStore
const {user} = storeToRefs(authStore)

if (user.value) {
  router.push('/account');
}

const loading = ref(false)
const message = ref("")

function handleLogin(userData) {
  loading.value = true;

  login(userData).then(
      () => {
        router.push('/account');
      },
      (error) => {
        loading.value = false;
        message.value =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
      }
  );
}
</script>

<template>
  <ReportButtons/>
  <h1 class="login-header">Log in</h1>
  <main class="login-container">
    <Form @submit="handleLogin" :validation-schema="schema" class="login form-vertical">
      <div class="form-group">
        <Field name="email" type="email" placeholder="email address" class="form-control"/>
        <ErrorMessage name="email" class="error-feedback"/>
      </div>
      <div class="form-group">
        <Field name="password" type="password" placeholder="password" class="form-control"/>
        <ErrorMessage name="password" class="error-feedback"/>
      </div>

      <div class="form-group">
        <button class="btn btn-primary btn-block btn-submit" :disabled="loading">
            <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
            ></span>
          <span>Login</span>
        </button>
      </div>
      <div class="form-group">
        <div v-if="message" class="alert alert-danger" role="alert">
          {{ message }}
        </div>
      </div>
    </Form>
    <router-link active-class="active"
                 exact
                 to="/register">
      <a class="sign-up">Sign up</a>
    </router-link>
  </main>
</template>

<style lang="scss" scoped>

h1.login-header {
  margin-top: 1.2em;
  margin-bottom: 0.7em;
}

.login-container {
  text-align: center;

  .login {
    margin: 0 auto;
    padding-bottom: 1em;
    width: 20em;

    .form-control{
      width: 100%;
    }
  }
}

</style>
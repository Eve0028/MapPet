<script setup>
import ReportButtons from '../components/ReportButtons.vue'
</script>

<template>
  <ReportButtons/>

  <h1 class="login-header">Log in</h1>
  <main class="login-container">
    <form class="login form-vertical">
      <input name="email" type="email" required placeholder="email address">
      <input name="password" type="password" required placeholder="password">
      <button class="login-button">Log in</button>
    </form>
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

    .login-button:hover {
      color: #ffffff;
      background-color: $primary-color;
    }
  }
}

</style>
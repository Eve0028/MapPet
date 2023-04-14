<script setup>
import ReportButtons from '../components/ReportButtons.vue'
</script>

<template>
  <ReportButtons/>

  <h1 class="signup-header">Sign up</h1>
  <main class="signup-container">
    <form class="signup form-vertical">
      <input name="email" type="email" required placeholder="email address">
      <input name="password" type="password" required placeholder="password">
      <input name="repeat-password" type="password" required placeholder="repeat password">
      <button class="signup-button">Sign up</button>
    </form>
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
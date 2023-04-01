<script setup>

</script>

<template>
  <main class="login-container">
    <form class="login form-vertical" action="login" method="POST">
      <input name="email" type="email" required placeholder="email address">
      <input name="password" type="password" required placeholder="password">
      <button type="submit">Login</button>
    </form>
  </main>
  <a href="signup" class="sign-up">Sign up</a>
</template>

<style lang="scss" scoped>

header {
  text-align: left;
}

h2 {
  text-align: left;
  border-bottom: 1px black solid;
  margin-bottom: 0.4em;
}

a.login{
  text-align: center;
}

</style>
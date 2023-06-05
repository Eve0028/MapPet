<script setup>

</script>

<template>
  <div class="logo-app">
    <router-link active-class="active"
                 exact
                 :to="{ name: 'home' }"
                 class="nav-link">
      <h1 class="logo">Map<b>Pet</b></h1>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
h1.logo {
  font-family: $logo-font;
}

h1.logo > b {
  color: $main-color-found;
}

.logo-app .nav-link{
  display: block;
  margin: auto;
  width: max-content;
}
</style>
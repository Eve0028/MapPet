<script setup>

</script>

<template>
  <section class="background">
    <slot></slot>
  </section>
</template>

<style scoped>
.background {
  background: #FFFFFF;
  box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.25);
  padding: 2.2rem 2rem;
  margin: 1em;
  text-align: center;
}

@media screen and (min-width: 600px) {
  .background {
    text-align: left;
  }
}
</style>
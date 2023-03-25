<script setup>

</script>

<template>
  <section class="background">
    <slot></slot>
  </section>
</template>

<style scoped>
  .background{
    background: #FFFFFF;
    box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.25);
    padding: 2em 3em;
    margin: 2em;
  }
</style>
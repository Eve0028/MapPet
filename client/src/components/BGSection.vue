<script setup>

</script>

<template>
  <section class="background">
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
.background {
  background: #ffffff;
  box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.25);
  padding: 2.2rem 2rem;
  margin: 1em;
}

@include respond-to(small) {
  .background {
    //margin: 0;
  }
}
</style>
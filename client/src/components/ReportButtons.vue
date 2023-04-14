<script setup>
import LostButton from '../components/buttons/LostButton.vue'
import FindButton from '../components/buttons/FindButton.vue'

</script>

<template>
  <section class="home-buttons">
    <LostButton class="home-button"/>
    <FindButton class="home-button"/>
  </section>
</template>

<style lang="scss" scoped>
.home-buttons{
  display: flex;
  justify-content: center;
  column-gap: 2.2em;
  row-gap: 0.5em;
  flex-wrap: wrap;
}

.home-button{
  flex-grow: 1;
}
</style>
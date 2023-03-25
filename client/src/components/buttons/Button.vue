<script setup>
const props = defineProps(['buttonText'])
</script>

<template>
  <button class="button">{{ props.buttonText }}</button>
</template>

<style scoped>
.button {
  padding: 0.8em 1.5em;
  font-family: 'Fira Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2em;
  text-transform: uppercase;
}
</style>
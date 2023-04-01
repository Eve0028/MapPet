<script setup>
import Button from './Button.vue'

const buttonText = 'view mappet'

</script>

<template>
  <Button class="mappet-button" :button-text=buttonText />
</template>

<style scoped>
.mappet-button {
  border: 2px solid var(--main-color-found);
  background-color: #ffffff;
  color: var(--main-color-found);
}

.mappet-button:hover {
  background-color: var(--main-color-found);
  color: #ffffff;
}
</style>
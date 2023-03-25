<script setup>
import Button from './Button.vue'

const buttonText = 'view mappet'
</script>

<template>
  <Button class="mappet-button" :button-text=buttonText />
</template>

<style scoped>
.mappet-button {
  border: 2px solid rgba(151, 175, 0, 1);
  background-color: #ffffff;
  color: rgba(151, 175, 0, 1);
}
</style>
<script setup>
import Button from './Button.vue'

const props = defineProps({
  buttonText: {type: String, default: 'report a found pet'}
})
</script>

<template>
  <Button class="find-button" :button-text=props.buttonText />
</template>

<style scoped>
.find-button {
  background-color: rgba(151, 175, 0, 0.9);
  color: #ffffff;
}
</style>
<script setup>
import Button from './Button.vue'

const props = defineProps({
  buttonText: {type: String, default: 'report a missing pet'}
})
</script>

<template>
  <Button class="lost-button" :button-text=props.buttonText />
</template>

<style scoped>
.lost-button {
  background-color: rgba(255, 48, 48, 0.9);
  color: #ffffff;
}
</style>
<script setup>
import Button from './Button.vue'

const props = defineProps({
  buttonText: {type: String, default: 'report a found pet'}
})
</script>

<template>
  <Button @click="$router.push('/report-found')" class="find-button" :button-text=props.buttonText />
</template>

<style lang="scss" scoped>
.find-button {
  background-color: $main-color-found;
  color: #ffffff;
}
</style>
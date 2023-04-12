<script setup>
import Button from './Button.vue'

const props = defineProps({
  buttonText: {type: String, default: 'report a missing pet'}
})
</script>

<template>
  <Button @click="$router.push('/report-lost')" class="lost-button" :button-text=props.buttonText />
</template>

<style lang="scss" scoped>
.lost-button {
  background-color: $main-color-lost;
  color: #ffffff;
}
</style>
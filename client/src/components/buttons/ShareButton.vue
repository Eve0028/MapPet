<script setup>
import Button from './Button.vue'

const buttonText = 'report on social media'

</script>

<template>
  <Button @click="$router.push('/mappet')" class="mappet-button" :button-text=buttonText />
</template>

<style lang="scss" scoped>
.mappet-button {
  border: 2px solid $font-input-color;
  background-color: #ffffff;
  color: $font-input-color;
}

.mappet-button:hover {
  background-color: $font-input-color;
  color: #ffffff;
}
</style>
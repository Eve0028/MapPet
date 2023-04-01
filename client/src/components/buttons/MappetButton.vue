<script setup>
import Button from './Button.vue'

const buttonText = 'view mappet'

</script>

<template>
  <Button @click="$router.push('/mappet')" class="mappet-button" :button-text=buttonText />
</template>

<style lang="scss" scoped>
.mappet-button {
  border: 2px solid $main-color-found;
  background-color: #ffffff;
  color: $main-color-found;
}

.mappet-button:hover {
  background-color: $main-color-found;
  color: #ffffff;
}
</style>
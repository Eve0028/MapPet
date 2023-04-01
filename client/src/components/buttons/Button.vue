<script setup>
const props = defineProps(['buttonText'])
</script>

<template>
  <button class="button">{{ props.buttonText }}</button>
</template>

<style lang="scss" scoped>

</style>
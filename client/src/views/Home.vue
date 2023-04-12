<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { defineStore } from 'pinia'

import ReportButtons from '../components/ReportButtons.vue'
import ReportCollapsed from '../components/report/ReportCollapsed.vue'

const reports = ref([
  {
    id: 1,
    imageUrl: "imageUrl",
    petType: "petType",
    petName: "petName",
    reportType: "lost",
    lastSeen: "lastSeen",
    timeOfReport: "timeOfReport",
    timeOfLastSeen: "timeOfLastSeen",
    details: "details"
  },
  {
    id: 2,
    imageUrl: "imageUrl",
    petType: "petType",
    petName: "petName",
    reportType: "found",
    lastSeen: "lastSeen",
    timeOfReport: "timeOfReport",
    timeOfLastSeen: "timeOfLastSeen",
    details: "details"
  },
  {
    id: 3,
    imageUrl: "imageUrl",
    petType: "petType",
    petName: "petName",
    reportType: "found",
    lastSeen: "lastSeen",
    timeOfReport: "timeOfReport",
    timeOfLastSeen: "timeOfLastSeen",
    details: "details"
  }
])

const emit = defineEmits(['isWider'])

onMounted(() => {
  emit('isWider', true)
})

onUnmounted( () => {
  emit('isWider', false)
})

</script>

<template>
  <ReportButtons/>

  <h1 class="latest-reports-header">The latest reports</h1>
  <section class="latest-reports">
    <ReportCollapsed
        @click="$router.push(`/${report.id}`)"
        v-for="report in reports" v-bind="report"/>
  </section>
</template>

<style lang="scss">
.latest-reports {
  --auto-grid-min-size: 16.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
  grid-gap: 2.5em;
}

h1.latest-reports-header {
  margin-top: 1.2em;
  margin-bottom: 1em;
}
</style>
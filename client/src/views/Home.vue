<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useReportsStore } from '../stores/reports'

import ReportButtons from '../components/ReportButtons.vue'
import ReportCollapsed from '../components/ReportCollapsed.vue'

const reportsData = useReportsStore()

const reportsId = computed(() => {
  return reportsData.reportsData.map((r) => r.id)
})

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
        @click="$router.push(`/${reportId}`)"
        v-for="reportId in reportsId" :id="reportId"/>
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
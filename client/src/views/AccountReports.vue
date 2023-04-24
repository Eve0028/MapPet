<script setup>
import ReportButtons from '../components/ReportButtons.vue'
import ReportCollapsed from '../components/ReportCollapsed.vue'
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRouter } from 'vue-router';
import { useReportsStore } from "../stores/reports.js";

const router = useRouter()

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

  <h1 class="my-reports-header">My reports</h1>
  <section class="my-reports">
    <ReportCollapsed
        @click="$router.push(`/reports/${reportId}`)"
        v-for="reportId in reportsId" :id="reportId"/>
  </section>
</template>

<style lang="scss">
.my-reports {
  --auto-grid-min-size: 16.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
  grid-gap: 2.5em;
}

h1.my-reports-header {
  margin-top: 1.2em;
  margin-bottom: 1em;
}
</style>
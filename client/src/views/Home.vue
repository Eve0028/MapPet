<script setup>
import { computed, onMounted, onUnmounted } from "vue"
import { useReportsStore } from '../stores/reportsSt'

import ReportButtons from '../components/ReportButtons.vue'
import ReportCollapsed from '../components/ReportCollapsed.vue'
import { storeToRefs } from "pinia";

const reportsDataStore = useReportsStore()
const { reports } = storeToRefs(reportsDataStore)
const { fetchReports } = reportsDataStore

const emit = defineEmits(['isWider'])

// Get posts id's
const reportsId = computed(() => {
  return reports.value.map((r) => r.id)
})

onMounted(() => {
  emit('isWider', true)
  fetchReports()
})

onUnmounted( () => {
  emit('isWider', false)
})

</script>

<template>
  <ReportButtons/>

  <h1 class="latest-reports-header">The latest reports</h1>

<!--  <div class="input-group mb-3">-->
<!--    <input type="text" class="form-control" placeholder="Search by location"-->
<!--           v-model="title"/>-->
<!--    <div class="input-group-append">-->
<!--      <button class="btn btn-outline-secondary" type="button"-->
<!--              @click="searchTitle"-->
<!--      >-->
<!--        Search-->
<!--      </button>-->
<!--    </div>-->
<!--  </div>-->

  <section class="latest-reports">

    <ReportCollapsed
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
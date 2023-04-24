<script setup>
import { ref, computed } from "vue";
import { useReportsStore } from '../stores/reports'

const props = defineProps({
  id: Number
})

const reportsData = useReportsStore()

const reportData = computed(() => {
  return reportsData.reportsData.filter((n) => n.id === props.id).at(0)
})

const imgAlt = computed(() => {
  return reportData.value.reportType + ' ' + reportData.value.petType + ' ' + reportData.value.petName
})

const reportInfo = ref([
  {key: "Last seen:", value: reportData.value.lastSeen},
  {key: "Time of last seen:", value: reportData.value.timeOfLastSeen},
  {key: "Time of report:", value: reportData.value.timeOfReport}
])

const classReportType = computed(() => ({
  'found': reportData.value.reportType === 'found',
  'lost': reportData.value.reportType === 'lost'
}))

</script>

<template>
  <section class="report report-collapsed">
    <img width="120px" height="60px" :src="reportData.imageUrl" :alt="imgAlt"/>
    <section class="pet-info">
      <div class="pet-header">
        <h3 class="pet-name">{{ reportData.petType + ' - ' + reportData.petName }}</h3>
        <h3 class="report-type" :class="{ 'lost-report-header' : reportData.reportType === 'lost',
                                          'found-report-header' : reportData.reportType === 'found'}">
          {{ reportData.reportType }}
        </h3>
      </div>
      <div class="pet-info-details">
        <span class="pet-info-detail-row" v-for="detail of reportInfo" :key="detail.key">
          <div class="pet-info-detail-row-key">{{ detail.key }}</div>
          <div class="pet-info-detail-row-value">{{ detail.value }}</div>
        </span>
      </div>
    </section>
  </section>
</template>

<style scoped>
.report *::first-letter{
  text-transform: uppercase;
}

.report-collapsed{
  cursor: pointer;
}

.pet-info-detail-row{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #bbbbbb;
  line-height: 1.7em;
  column-gap: 1em;
}

.pet-header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.4em 0;
}

.lost-report-header{
  color: rgba(255, 48, 48, 0.7);
}

.found-report-header{
  color: rgba(151, 175, 0, 0.9);
}
</style>
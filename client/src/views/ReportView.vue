<script setup>
import { useReportsStore } from '../stores/reportsSt'
import { computed, onMounted, ref } from "vue"
import { useRoute } from 'vue-router'
import { storeToRefs } from "pinia"

import ReportButtons from '../components/ReportButtons.vue'


const reportsDataStore = useReportsStore()
const { getReportById } = storeToRefs(reportsDataStore)
const { fetchReports } = reportsDataStore

const route = useRoute()
const reportData = computed(() => getReportById.value(route.params.id))

// const reportData = computed(() => {
//   return reportsData.reportsData.filter((n) => n.id == route.params.id).at(0)
// })

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

onMounted(() => {
  fetchReports()
})

</script>

<template>
  <ReportButtons/>

  <section class="report-view">
    <header class="report-view-header">
      <h1 class="pet-name capitalize">{{ reportData.petType }} - {{ reportData.petName }}</h1>
      <div class="report-type capitalize"
           :class="classReportType">
        {{ reportData.reportType }}
      </div>
    </header>
    <section class="pet-info">
      <img :src="reportData.imageUrl" :alt="imgAlt"/>
      <div class="pet-info-details">
        <span class="pet-info-detail-row" v-for="detail of reportInfo" :key="detail.key">
          <div class="pet-info-detail-row-key">{{ detail.key }}</div>
          <div class="pet-info-detail-row-value">{{ detail.value }}</div>
        </span>
      </div>
    </section>
    <section class="pet-details">
      <h3>Details</h3>
      <p>{{ reportData.details }}</p>
    </section>
  </section>
</template>

<style lang="scss" scoped>

.report-view-header {
  padding-top: 2em;
  padding-bottom: 1em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: baseline;

  h1 {
    font-size: 1.7em;
  }

  .report-type {
    font-size: 1.2em;
    font-weight: 700;

    &.lost {
      color: $main-color-lost-pale;
    }

    &.found {
      color: $main-color-found-pale;
    }
  }
}

.pet-info {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 8em;

  img {
    margin-bottom: 2em;
  }

  .pet-info-detail-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: 1px solid #bbbbbb;
    line-height: 1.7em;
    column-gap: 1em;
  }
}

@include respond-to(small) {
  .pet-info {
    justify-content: center;
  }

  .report-view-header {
    .report-type {
      margin: 0 auto;
    }
  }
}

.pet-details {
  padding-top: 2.2em;
  text-align: left;

  h3 {
    padding-bottom: 0.7em;
  }
}

</style>
<script setup>
import { useReportsStore } from '../stores/reportsSt'
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { useRoute } from 'vue-router'

import ReportButtons from '../components/ReportButtons.vue'
import { storeToRefs } from "pinia";
import UploadFilesService from "../services/UploadFilesService.js";

/// Get report data ///

const reportsDataStore = useReportsStore()
const { getReportById } = storeToRefs(reportsDataStore)
const { fetchReports } = reportsDataStore

const route = useRoute()
const reportData = computed(() => getReportById.value(route.params.id))

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

/// Edit data ///
function petNameUpdate() {
  updatePetName(1, "nn")
}

const previewImage = ref(undefined)

onMounted(() => {
  fetchReports()

  UploadFilesService.getImage(reportData.value.imageUrl).then(
      (response) => {
        let reader = new FileReader();
        reader.readAsDataURL(response.data);
        reader.onload = () => {
          previewImage.value = reader.result;
        }
      }
  )
})

</script>

<template>
  <ReportButtons/>

  <router-link active-class="active"
               exact
               to="/account-reports"
               class="nav-link">
    <button class="return-button return-reports-button">View all</button>
  </router-link>

  <section class="report-view">
    <header class="report-view-header">
      <h1 class="pet-name capitalize">{{ reportData.petType }} - {{ reportData.petName }}</h1>
      <div class="report-type capitalize"
           :class="classReportType">
        {{ reportData.reportType }}
      </div>
    </header>
    <section class="pet-info">
      <img class="image-view" v-if="previewImage" :src="previewImage" :alt="imgAlt"/>
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

    <button class="edit-button edit-report-button" @click="petNameUpdate">Edit report</button>
  </section>
</template>

<style lang="scss" scoped>

.return-button, .edit-report-button {
  margin-top: 2em;
}

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
  flex-direction: row;
  column-gap: 2em;

  .image-view{
    width: auto;  /* set to anything and aspect ratio is maintained - also corrects glitch in Internet Explorer */
    height: auto;  /* set to anything and aspect ratio is maintained */
    max-width: 22em;
    border: 0;  /* for older IE browsers that draw borders around images */
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
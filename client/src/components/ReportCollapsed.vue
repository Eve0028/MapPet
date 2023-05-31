<script setup>
import { ref, computed, onMounted } from "vue";
// import { useReportsStore } from '../stores/reports'
import { useReportsStore } from '../stores/reportsSt'
import { useAuthStore } from "../stores/auth.js";
import { storeToRefs } from "pinia"
import UserService from "../services/user.service";
import ReportDataService from "../services/ReportDataService";
import { useRouter } from 'vue-router'

const router = useRouter()

const authStore = useAuthStore()
const {user} = storeToRefs(authStore)

const props = defineProps({
  id: String,
})

const path = computed(() => {
  if(canModify){
    return "/reports/" + props.id
  }
  else{
    return "/" + props.id
  }
})

const reportsDataStore = useReportsStore()
const {getReportById} = storeToRefs(reportsDataStore)
const {fetchReports} = reportsDataStore

const reportData = computed(() => getReportById.value(props.id))

const imgAlt = computed(() => {
  return reportData.value.reportType + ' ' + reportData.value.petType + ' ' + reportData.value.petName
})

const reportInfo = computed(() => {
  return [
    {key: "Last seen:", value: reportData.value.lastSeen},
    {key: "Time of last seen:", value: reportData.value.timeOfLastSeen},
    {key: "Time of report:", value: reportData.value.timeOfReport}]
})

const canModify = ref(false)

function deleteReport() {
  ReportDataService.delete(props.id)
      .then(response => {
        console.log(response.data);
        active.value = false
      })
      .catch(e => {
        console.log(e);
      });
}

onMounted(() => {
  fetchReports()

  UserService.getAdminBoard().then(
      (response) => {
        canModify.value = true
      },
      (error) => {
        UserService.getUserBoard().then(
            (response) => {
              if (reportData.value.authorId === user.value.id) {
                canModify.value = true
              }
            }
        )
      }
  )
})

const active = ref(true)

</script>

<template>
  <section class="report-template" :class="active ? 'active' : 'non-active'">
    <section class="report report-collapsed" @click="$router.push(`${path}`)">
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
    <!--    {{ canModify }}-->
    <div v-if="canModify" class="edit-options">
      <button @click="deleteReport" class="button delete">Delete report</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.report *::first-letter {
  text-transform: uppercase;
}

.report-collapsed {
  cursor: pointer;
}

.pet-info-detail-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #bbbbbb;
  line-height: 1.7em;
  column-gap: 1em;
}

.pet-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.4em 0;
}

.edit-options {
  margin-top: 1em;

  .delete {
    background-color: $main-color-lost;
    color: #ffffff;
    opacity: 0.95;
  }

  .delete:hover {
    background-color: $main-color-lost;
    opacity: 1;
  }
}

.lost-report-header {
  color: $main-color-lost;
  opacity: 0.8;
}

.found-report-header {
  color: $main-color-found;
  opacity: 0.8;
}

.non-active {
  display: none;
  transition-delay: 1s;
}

</style>
<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  imageUrl: String,
  petType: String,
  petName: String,
  reportType: String,
  lastSeen: String,
  timeOfReport: Date,
  timeOfLastSeen: Date,
  details: String
})

const imgAlt = computed(() => {
  return props.reportType + ' ' + props.petType + ' ' + props.petName
})

const reportInfo = ref([
  {key: "Last seen:", value: props.lastSeen},
  {key: "Time of last seen:", value: props.timeOfLastSeen},
  {key: "Time of report:", value: props.timeOfReport},
  {key: "Details:", value: props.details}
])

</script>

<template>
  <section class="report report-collapsed">
    <img width="120px" height="60px" :src="props.imageUrl" :alt="imgAlt"/>
    <section class="pet-info">
      <div class="pet-header">
        <h3 class="pet-name">{{ props.petType + ' - ' + props.petName }}</h3>
        <h3 class="report-type" :class="{ 'lost-report-header' : props.reportType === 'lost',
                                          'found-report-header' : props.reportType === 'found'}">
          {{ props.reportType }}
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

.pet-info-detail-row{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #bbbbbb;
  padding: 0.4em 0;
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
<script setup>
import { ref, computed } from "vue";

import LostButton from '../components/buttons/LostButton.vue'
import FindButton from '../components/buttons/FindButton.vue'
import ReportCollapsed from '../components/report/ReportCollapsed.vue'

const reports = ref([
  {
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

</script>

<template>
  <section class="home-buttons">
    <LostButton class="home-button"/>
    <FindButton class="home-button"/>
  </section>

  <h1 class="latest-reports-header">The latest reports</h1>
  <section class="latest-reports">
    <ReportCollapsed v-for="report in reports" v-bind="report"/>
  </section>
</template>

<style scoped>
.latest-reports {
  --auto-grid-min-size: 16rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
  grid-gap: 2.5em;
}

h1.latest-reports-header {
  margin-top: 1.2em;
  margin-bottom: 1em;
}

.home-buttons{
  display: flex;
  column-gap: 2.2em;
  row-gap: 0.5em;
  flex-wrap: wrap;
}

.home-button{
  flex-grow: 1;
}

</style>
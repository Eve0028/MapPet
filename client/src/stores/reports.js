import { defineStore } from "pinia";
import { computed, ref } from "vue";
import ReportDataService from "../services/ReportDataService";

// Setup store
export const useReportsStore = defineStore('reports', () => {
  const reports = ref([])

  const getReportById = computed((reportId) =>
    reports.value.find((report) => report.id === reportId)
  )

  async function fetchReports() {
    ReportDataService.getAll()
      .then(response => {
        this.reports = response.data;
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  function $reset() {
    reports.value = []
  }

  return {reports, getReportById, fetchReports}
})

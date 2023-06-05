import { defineStore } from "pinia";
import ReportDataService from "../services/ReportDataService";

// Option store
export const useReportsStore = defineStore('reports', {
  state: () => ({
    reports: [],
  }),

  getters: {
    getReportById: (state) => {
      return (reportId) => state.reports.find((report) => report.id === reportId)
    },
  },

  actions: {
    async fetchReports() {
      ReportDataService.getAll()
        .then(response => {
          this.reports = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
})

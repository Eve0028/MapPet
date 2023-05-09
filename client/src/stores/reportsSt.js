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
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  },

  // async function fetchReports() {
  //   ReportDataService.getAll()
  //     .then(response => {
  //       this.reports = response.data;
  //       console.log(response.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }
})

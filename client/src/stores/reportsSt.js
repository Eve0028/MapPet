import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useReportsStore = defineStore('reports', {
  state: () => ({ reports: [] }),
  actions: {
    async fetchReports() {
      try {
        const res = await axios.get(
          "https://127.0.0.1:3080/reports"
        );
        this.reports = res.data;
        console.log("reports", this.reports);
      } catch (err) {
        console.error(err);
      }
    },
  },
});

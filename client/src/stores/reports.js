import { defineStore } from "pinia";
import { ref } from "vue";

export const useReportsStore = defineStore('reports', () => {
  const reportsData = ref([
    {
      id: 1,
      imageUrl: "imageUrl",
      petType: "petType",
      petName: "petNamee",
      reportType: "lost",
      lastSeen: "lastSeen",
      timeOfReport: "timeOfReport",
      timeOfLastSeen: "timeOfLastSeen",
      details: "details"
    },
    {
      id: 2,
      imageUrl: "imageUrl",
      petType: "petType",
      petName: "petName",
      reportType: "found",
      lastSeen: "lastSeen",
      timeOfReport: "timeOfReport",
      timeOfLastSeen: "timeOfLastSeen",
      details: "details"
    },
    {
      id: 3,
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

  return { reportsData }
})
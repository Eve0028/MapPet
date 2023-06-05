<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup, LControlZoom, LIcon } from "@vue-leaflet/vue-leaflet";
import L from "leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { computed, nextTick, onMounted, onUnmounted, ref } from "vue";
import { useReportsStore } from '../stores/reportsSt'
import { storeToRefs } from "pinia";
import UploadFilesService from "../services/UploadFilesService.js";

const reportsDataStore = useReportsStore()
const {fetchReports} = reportsDataStore
const {reports} = storeToRefs(reportsDataStore)

// const reportsAddresses = computed(() => {
//   return reports.value ? reports.value.map((report) => report.lastSeen) : null
// })

const provider = new OpenStreetMapProvider();

const localisations = ref([])
let viewImage = ""

function setCoordinates() {
  reports.value
      .forEach(async (item) => {
        const allAddresses = await provider.search({query: item.lastSeen})
        if (allAddresses[0]) {
          UploadFilesService.getImage(item.imageUrl).then(
              (response) => {
                let reader = new FileReader();
                reader.readAsDataURL(response.data);
                reader.onload = () => {
                  localisations.value.push({
                    address: allAddresses[0],
                    petName: item.petName,
                    image: reader.result
                  })
                }
              }
          ).catch(e => {
            console.log(e);
            localisations.value.push({
              address: allAddresses[0],
              petName: item.petName,
              image: null
            })
          });
        }
        console.log(localisations.value)
      })
}

function setImage(imageUrl) {
  UploadFilesService.getImage(imageUrl).then(
      (response) => {
        let reader = new FileReader();
        reader.readAsDataURL(response.data);
        reader.onload = () => {
          viewImage = reader.result;
        }
      }
  )
}

const mapSettings = {
  zoom: 2,
  coordinates: [60, 60],
  iconWidth: 25,
  iconHeight: 40,
}

const emit = defineEmits(['isWider'])

onMounted(() => {
  emit('isWider', true)
  fetchReports()
  nextTick()
  setCoordinates()
})

onUnmounted(() => {
  emit('isWider', false)
})

</script>

<template>
  <div style="height:35rem; width:100%">
    <l-map ref="map" v-model:zoom="mapSettings.zoom" :center="[50, 50]">
      <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
      ></l-tile-layer>

      <l-marker v-for="cord in localisations" :lat-lng="[cord.address.y, cord.address.x]">
        <l-popup class="popup">
          <div>
            {{ cord.petName }}
            <img class="image-view" v-if="cord.image" :src="cord.image" :alt="cord.petName"/>
          </div>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<style lang="scss" scoped>

.popup{
  min-width: 160px;

  .image-view{
    width: auto;  /* set to anything and aspect ratio is maintained - also corrects glitch in Internet Explorer */
    height: auto;  /* set to anything and aspect ratio is maintained */
    max-width: 100%;
    border: 0;  /* for older IE browsers that draw borders around images */
  }
}


</style>
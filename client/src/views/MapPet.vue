<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup, LControlZoom } from "@vue-leaflet/vue-leaflet";
import L from "leaflet";
import { onMounted, onUnmounted } from "vue";

const mapSettings = {
  zoom: 2,
  coordinates: [60, 60],
  iconWidth: 25,
  iconHeight: 40,
}

const emit = defineEmits(['isWider'])

onMounted(() => {
  emit('isWider', true)
})

onUnmounted( () => {
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
      <l-control-zoom position="bottomright" zoom-in-text="*" zoom-out-text="/" />

      <l-marker :lat-lng="mapSettings.coordinates" draggable> </l-marker>
      <l-marker :lat-lng="[50, 50]" draggable @moveend="log('moveend')">
        <l-popup>
          lol
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<style lang="scss" scoped>

</style>
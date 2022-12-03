<template>
  <div id="map" class="absolute inset-0 z-0"></div>
  <div class="absolute bottom-12 right-24" @click="getLocation">Get location</div>
</template>

<script>
export default {
  data() {
    return {
      baseCoords: [],
    };
  },
  methods: {
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      }
    },

    showPosition(position) {
      console.log(`Latitude: ${position.coords.latitude}  
      Longitude ${position.coords.longitude}`);
      this.baseCoords = [position.coords.latitude, position.coords.longitude];
      this.map.flyTo([this.baseCoords[0], this.baseCoords[1]]);
    },
  },

  mounted() {
    L.DomEvent.fakeStop = function () {
      return true;
    };
    const map = L.map("map", { zoomControl: false, tap: false }).setView([0, 0], 2).locate({ setView: true, maxZoom: 64 });
    this.map = map;
    map.options.minZoom = 2;
    map.setMaxBounds([
      [-90, -Infinity],
      [90, Infinity],
    ]);
    L.control
      .zoom({
        position: "bottomright",
      })
      .addTo(map);
    const Tiles = L.tileLayer("https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=qhbQi9a0jvf68y31tWwv", {
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }).addTo(map);
  },
};
</script>

<style>
/* @import 'leaflet/dist/leaflet.css"'; */
</style>

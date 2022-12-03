<template>
  <div id="map" class="absolute inset-0 z-0" @click="markPoint"></div>
  <div class="absolute bottom-12 right-24" @click="getLocation">
    Get location
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseCoords: [0, 0],
      markerList: [],
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
      // this.map.flyTo([this.baseCoords[0], this.baseCoords[1]]);
    },
    markPoint($e) {
      this.markerList.push($e.latlng);
      console.log($e.latlng);
      console.log(this.markerList);
    },
  },

  mounted() {
    L.DomEvent.fakeStop = function () {
      return true;
    };
    const map = L.map("map", { zoomControl: false, tap: false }).locate({
      setView: true,
      maxZoom: 64,
    });
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
    // Testowe markery
    let marker = L.marker([this.baseCoords[0], this.baseCoords[1]]).addTo(map);
    this.markerList.push(marker.getLatLng());
    marker = L.marker([40, 20]).addTo(map);
    this.markerList.push(marker.getLatLng());
    marker = L.marker([50, 30]).addTo(map);
    this.markerList.push(marker.getLatLng());
    const Tiles = L.tileLayer(
      "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=qhbQi9a0jvf68y31tWwv",
      {
        attribution:
          '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
      }
    ).addTo(map);
  },
};
</script>

<style>
/* @import 'leaflet/dist/leaflet.css"'; */
</style>

<template>
  <div id="map" class="absolute inset-0 z-0"></div>
</template>

<script>
import { dataStore } from "~/store/data";
export default {
  data() {
    return {
      baseCoords: { lat: 0, lng: 0 },
      markerTempPos: {},
      markerTemp: null,
    };
  },

  computed: {
    userEvents() {
      return dataStore().$state.userEvents;
    },
    userEventsMarkers() {
      if (this.userEvents) {
        const markers = [];
        this.userEvents.forEach((item) => {
          let marker = L.marker([item.latitude, item.longitude]);
          if (item.eventType == "WORK" && dataStore().$state.workFilter) {
            markers.push(marker);
          }
          if (item.eventType == "LIFE" && dataStore().$state.lifeFilter) {
            markers.push(marker);
          }
        });
        return markers;
      }
    },
  },

  watch: {
    userEventsMarkers(newMarkers, old) {
      if (old?.length > 0) {
        this.removeMarkers(old);
      }
      if (newMarkers?.length > 0) {
        this.addMarkers();
      }
    },
  },

  methods: {
    removeMarkers(markers) {
      markers.forEach((marker) => {
        console.log(marker.remove());
        marker.remove();
      });
    },
    addMarkers() {
      if (this.userEventsMarkers) {
        this.userEventsMarkers.forEach((marker) => {
          marker.addTo(this.map);
        });
      }
    },
    getPosition() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      }
    },

    showPosition(position) {
      console.log(`Latitude: ${position.coords.latitude}  
      Longitude ${position.coords.longitude}`);
      this.baseCoords = { lat: position.coords.latitude, lng: position.coords.longitude };
      this.map.flyTo([this.baseCoords.lat, this.baseCoords.lng]);
    },

    markPointListener() {
      const map = this.map;
      map.on("click", function (e) {
        if (this.markerTemp) {
          this.markerTemp.remove();
        }
        let coord = e.latlng;
        let lat = coord.lat;
        let lng = coord.lng;
        this.markerTempPos = { lat: lat, lng: lng };
        this.markerTemp = L.marker([this.markerTempPos.lat, this.markerTempPos.lng]).addTo(map);
        dataStore().setTempPos(this.markerTempPos);
      });
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
    map.setView([0, 0], 9);
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

    this.getPosition();
    const Tiles = L.tileLayer("https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=qhbQi9a0jvf68y31tWwv", {
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }).addTo(map);

    this.markPointListener();
    this.addMarkers();
  },
};
</script>

<style>
/* @import 'leaflet/dist/leaflet.css"'; */
</style>

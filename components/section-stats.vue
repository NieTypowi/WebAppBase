<template>
  <div class="w-full md:border-0">
    <h2>Statistics</h2>
    <div class="flex flex-wrap">
      <canvas class="w-full min-h-[300px]" id="myChart"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

import { dataStore } from "~/store/data";
export default {
  date() {
    return {
      pieChart: null,
    };
  },
  watch: {
    userEvents(newEvents) {
      if (newEvents) {
        console.log(newEvents);
        console.log(this.getChartConfigs(newEvents));
        if (this.pieChart) {
          this.pieChart.destroy();
        }
        this.createChart(newEvents);
      }
    },
  },
  computed: {
    userEvents() {
      return dataStore().getUserEvents;
    },
  },
  methods: {
    init() {
      this.getEvents().then((events) => {
        this.createChart(events);
      });
    },
    calculateChart(events) {
      const workEvents = events.filter((e) => e.eventType == "WORK");
      const lifeEvents = events.filter((e) => e.eventType == "LIFE");
      return {
        labels: ["Work", "Life"],
        datasets: [
          {
            label: "number of events",
            data: [workEvents.length, lifeEvents.length],
            backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
            hoverOffset: 4,
          },
        ],
      };
    },
    getChartConfigs(events) {
      return {
        type: "doughnut",
        data: this.calculateChart(events),
      };
    },
    getEvents() {
      return jwtFetch("http://localhost:8080/events", "GET");
    },
    createChart(events) {
      const ctx = document.getElementById("myChart");
      this.pieChart = new Chart(ctx, this.getChartConfigs(events));
    },
  },
};
</script>

<style></style>

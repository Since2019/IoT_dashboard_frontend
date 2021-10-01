<template>
  <div id="root">
    <div class="home">
      <div id="div__nav">
        <Navigation />
      </div>

      <!-- DHT22 -->
      <div class="themometer-test">
        <Barometer />
        <!-- <Thermometer /> -->
      </div>

      <div class="div__sensor-list">
        <SensorList />
      </div>

      <div v-if="device_to_display == 'wemos'" id="div__device-dashboard">
        <WeMos18650 />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Home/Navigation.vue";

import Barometer from "@/components/Sensors/Barometer";

import SensorList from "@/components/Sensors/SensorList.vue";

import WeMos18650 from "@/components/Device/ESP8266/WeMos18650";

export default {
  name: "Home",
  data() {
    return {
      device_to_display: "wemos",
    };
  },
  methods: {},
  components: {
    Navigation,
    Barometer,
    SensorList,
    WeMos18650,
  },
};
</script>

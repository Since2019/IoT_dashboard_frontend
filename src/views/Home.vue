<template>
  <div id="root">
    <div class="home">
      <Navigation />

      <!-- DHT22 -->
      <div class="themometer-test">
        <Barometer />
        <!-- <Thermometer /> -->
      </div>

      <div class="div__sensor-list">
        <SensorList />
      </div>

      <div id="div__device-dashboard">
        <WeMos18650 />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Home/Navigation.vue";
import Thermometer from "@/components/Sensors/Thermometer";
import Barometer from "@/components/Sensors/Barometer";

import SensorList from "@/components/Sensors/SensorList.vue";

import WeMos18650 from "@/components/Device/ESP8266/WeMos18650";

export default {
  name: "Home",
  data() {
    device_to_display;
  },
  methods: {},
  components: {
    Navigation,
    Thermometer,
    Barometer,

    SensorList,
    WeMos18650,
  },
};
</script>

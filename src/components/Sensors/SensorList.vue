<template>
  <!--component name: uppercase -->
  <div id="SensorList">
    <h2>Sensors Available</h2>
    <!-- showing all the sensors -->
    <div id="sensors_area">
        <div class="">
          <h2 class="sensor_category"> </h2>
        </div>
    <div>

  </div>
</template>

<script>
import sensors from "@/attributes/sensors/sensors.js";

export default {
  setup() {},
  data() {
    sensors: sensors;
  },
};
</script>
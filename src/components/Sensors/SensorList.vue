<template>
  <!--component name: uppercase -->
  <div id="SensorList">
    <h2>Sensors Available</h2>

    <!-- showing all the sensors -->
    <div id="sensors_area">
      <div class="">
        <h2 class="sensor_category">
          <div v-for="category in sensors" v-bind:key="category.default.type">
            <!-- 给每一类的div取一个名字 -->
            <h3>{{ category.default.type }}</h3>

            <div
              v-for="sensor in category.default.sensors"
              v-bind:key="sensor.model"
            >
              <span> {{ sensor.model }}</span>
            </div>
          </div>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import { sensors } from "@/attributes/sensors/sensors.js";

export default {
  setup() {},
  // Don't forget about the "return"
  data() {
    return {
      sensors: sensors,
    };
  },
};
</script>
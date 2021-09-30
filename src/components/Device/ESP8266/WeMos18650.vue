<template>
  <div id="wemos18650">
    <div id="config"></div>

    <div id="div__wemos18650_dashboard">
      <!-- FIXME This is hardcoded-->
      <Thermometer :temperature="temperature" />
    </div>
  </div>
</template>

<script>
import thermometers from "@/attributes/sensors/thermometers";

let test_sensor_data = {
  // Device的属性
  name: "WeMos Thermometer Tests",
  sensors: [thermometers.dht22],
  // Device获取数据
  mqtt_endpoint: "192.168.1.2/DHT22",
};

import Thermometer from "@/components/Sensors/ThermometerParams.vue";

export default {
  name: "WeMos18650",
  setup() {},

  mounted() {
    this.updateTemperature();
  },
  data() {
    return {
      thermometers: thermometers.default,
      temperature: 32,
    };
  },
  methods: {
    updateTemperature() {
      setTimeout(() => {
        this.temperature = 35;
        console.log(this.temperature);
      }, 1000);

      setTimeout(() => {
        this.temperature = 29;
        console.log(this.temperature);
      }, 2000);

      setTimeout(() => {
        this.temperature = 27;
      }, 3000);
    },
  },
  components: { Thermometer },
};
</script>
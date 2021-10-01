<template>
  <div id="component__esp_lora_tester">
    <div id="config"></div>

    <div id="div__esp_lora_tester_dashboard">
      <!-- FIXME This is hardcoded-->
      <Thermometer :temperature="temperature" />
      <Barometer :pressure="pressure" />
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
  // "wemos-room-monitor" 要和设备名称匹配
  mqtt_endpoint: "192.168.1.2/sensor_data/wemos-room-monitor",
};

import Thermometer from "@/components/Sensors/ThermometerParams.vue";

export default {
  name: "ESP32",
  setup() {},

  mounted() {
    this.updateTemperature();
  },
  data() {
    return {
      thermometers: thermometers.default,
      temperature: 32,
      pressure: 1.013,
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
    //
    updatePressure() {
      setTimeout(() => {
        this.pressure = 1035;
      }, 1000);

      setTimeout(() => {
        this.pressure = 1040;
      }, 2000);

      setTimeout(() => {
        this.pressure = 985;
      }, 3000);
    },
  },
  components: {
    Thermometer,
    Barometer,
  },
};
</script>
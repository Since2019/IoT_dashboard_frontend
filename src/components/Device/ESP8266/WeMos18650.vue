<template>
  <div id="wemos18650">
    <div id="config"></div>

    <div id="div__wemos18650_dashboard">
      <!-- FIXME This is hardcoded-->
      <!-- <div id="barometer"></div> -->
      <Barometer :pressure="pressure" />
      <Hygrometer :humidity="humidity" />
      <Thermometer :temperature="temperature" />
    </div>
  </div>
</template>

<script>
import thermometers from "@/attributes/sensors/thermometers";

import Barometer from "@/components/Sensors/Barometer";

import Hygrometer from "@/components/Sensors/Hygrometer.vue";
import Thermometer from "@/components/Sensors/ThermometerParams.vue";

export default {
  name: "WeMos18650",
  props: ["device_name"],
  setup() {},

  mounted() {
    this.fetchAllSensorsData();
    // this.fetchTemperature();
    // this.fetchHumidity();
    // setInterval(() => {
    //   this.fetchTemperature();
    //   this.fetchHumidity();
    // }, 2000);
  },
  data() {
    return {
      thermometers: thermometers.default,
      temperature: 32,
      humidity: 0,
    };
  },
  methods: {
    fetchAllSensorsData() {
      this.axios
        .get(`http://127.0.0.1:3000/sensor_data/${this.device_name}`)
        .then((response) => {
          this.temperature = response.data.temperature;
          this.humidity = response.data.humidity;
          this.pressure = response.data.pressure;
        })
        .catch((response) => {
          console.log(response);
        });
    },

    // 用get的方法去服务器那里抓取温度，然后再渲染
    fetchTemperature() {
      this.axios
        .get("http://127.0.0.1:3000/sensor_data/wemos-room-monitor")
        .then((response) => {
          this.temperature = response.data.reading.sensor_data.temperature;
          console.log("response:");
          console.log(response);
        })
        .catch((response) => {
          console.log(response);
        });
    },
    fetchHumidity() {
      this.axios
        .get("http://127.0.0.1:3000/sensor_data/wemos-room-monitor")
        .then((response) => {
          this.humidity = response.data.reading.sensor_data.humidity;
          console.log("response:");
          console.log(response);
        })
        .catch((response) => {
          console.log(response);
        });
    },
  },
  components: {
    Barometer,
    Thermometer,
    Hygrometer,
  },
};
</script>
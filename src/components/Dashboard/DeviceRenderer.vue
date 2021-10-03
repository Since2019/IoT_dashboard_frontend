<template>
  <div id="component__device_renderer">
    <WeMos18650 v-if="this.device_selected_model == 'WeMos18650'" />
  </div>
</template>

<script>
import WeMos18650 from "../Device/ESP8266/WeMos18650";
export default {
  name: "DeviceDashboardRenderer",
  setup() {},

  mounted() {
    this.updateTemperature();
  },
  data() {
    return {
      device_selected_id: null,
      device_selected_model: null,
    };
  },
  methods: {
    fetchDeviceSensorList() {
      this.axios
        .get(
          "http://127.0.0.1:3000/device_specifications/wemos-room-monitor-01"
        )
        .then((response) => {
          console.log(response);
          this.device_selected_model = response.data.model; // e.g : WeMos18650
          this.device_selected_uid = response.data.uid; //     e.g : wemos-room-monitor-01
        })
        .catch((response) => {
          console.log(response);
        });
    },
  },
  components: {},
};
</script>
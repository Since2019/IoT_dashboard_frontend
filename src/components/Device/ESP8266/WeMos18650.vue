<template>
  <div id="wemos18650">
    <div id="config"></div>
    <!-- Sensor List -->
    <SensorList />
  </div>
</template>

<script>
import SensorList from "@/components/Sensors/SensorList.vue";

export default {
  name: "SensorList",
  setup() {},
  data() {},
  components: { SensorList },
};
</script>
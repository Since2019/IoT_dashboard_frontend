<template>
  <div id="root">
    <div class="home">
      <Navigation />
    </div>
    <!-- DHT22 -->
    <div class="themometer-test">
      <Barometer />
      <Themometer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Home/Navigation.vue";
import Themometer from "@/components/Sensors/Themometer";
import Barometer from "@/components/Sensors/Barometer";

export default {
  name: "Home",
  components: {
    Navigation,
    Themometer,
    Barometer,
  },
};
</script>

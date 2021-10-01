<template>
  <div>
    <div id="barometer"></div>
    <span>Temperature</span>
    <span>°C</span>
  </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
  props: ["pressure"],
  setup() {},
  mounted() {
    this.createGraph();
  },

  methods: {},
};
</script>


<style scoped>
#chartdiv {
  width: 100%;
  height: 500px;
}
</style>
<template>
  <div>
    <div id="div__barometer"></div>
    <span><h2>Pressure</h2></span>
    <span
      ><b> {{ pressure }}</b></span
    >
    <span>Pa</span>
    <br />
    <br />
    <br />
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
    this.pressure ;
    this.createGraph();
  },
  data() {
    return {
      chart: null,
      hand: null,
    };
  },
  methods: {
    createGraph() {
      // create chart
      var chart = am4core.create("div__barometer", am4charts.GaugeChart);
      this.chart = chart;

      chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

      chart.innerRadius = -25;

      var axis = chart.xAxes.push(new am4charts.ValueAxis());
      axis.min = 95000;
      axis.max = 105000;
      axis.strictMinMax = true;
      axis.renderer.grid.template.stroke =
        new am4core.InterfaceColorSet().getFor("background");
      axis.renderer.grid.template.strokeOpacity = 0.3;

      var colorSet = new am4core.ColorSet();

      var range0 = axis.axisRanges.create();
      range0.value = 95000;
      range0.endValue = 99000;
      range0.axisFill.fillOpacity = 1;
      range0.axisFill.fill = colorSet.getIndex(3);
      range0.axisFill.zIndex = -1;

      var range1 = axis.axisRanges.create();
      range1.value = 99000;
      range1.endValue = 101000;
      range1.axisFill.fillOpacity = 1;
      range1.axisFill.fill = colorSet.getIndex(6);
      range1.axisFill.zIndex = -1;

      var range2 = axis.axisRanges.create();
      range2.value = 101000;
      range2.endValue = 103000;
      range2.axisFill.fillOpacity = 1;
      range2.axisFill.fill = colorSet.getIndex(8);
      range2.axisFill.zIndex = -1;

      var range3 = axis.axisRanges.create();
      range3.value = 103000;
      range3.endValue = 105000;
      range3.axisFill.fillOpacity = 1;
      range3.axisFill.fill = colorSet.getIndex(10);
      range3.axisFill.zIndex = -1;

      var hand = chart.hands.push(new am4charts.ClockHand());
      this.hand = hand;
      hand.showValue(this.pressure, 0, am4core.ease.cubicOut);

      // using chart.setTimeout method as the timeout will be disposed together with a chart
      console.log("this.pressure");
      console.log(this.pressure);
    },
    updateGraph() {
      // create chart
      // var chart = this.chart;

      this.hand.showValue(this.pressure, 0, am4core.ease.cubicOut);

      // using chart.setTimeout method as the timeout will be disposed together with a chart
      console.log("this.pressure");
      console.log(this.pressure);
    },
  },
  watch: {
    pressure() {
      this.pressure = this.pressure;
      this.updateGraph();
    },
  },
};
</script>


<style scoped>
#chartdiv {
  width: 100%;
  height: 500px;
}
</style>
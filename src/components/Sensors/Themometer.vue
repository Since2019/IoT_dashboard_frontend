<template>
  <div>
    <div id="chartdiv"></div>
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
  setup() {},
  mounted() {
    // create chart
    var chart = am4core.create("chartdiv", am4charts.GaugeChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

    chart.innerRadius = -25;

    var axis = chart.xAxes.push(new am4charts.ValueAxis());
    axis.min = -30;
    axis.max = 50;
    axis.strictMinMax = true;
    axis.renderer.grid.template.stroke = new am4core.InterfaceColorSet().getFor(
      "background"
    );
    axis.renderer.grid.template.strokeOpacity = 0.3;

    var colorSet = new am4core.ColorSet();

    var range0 = axis.axisRanges.create();
    range0.value = -30;
    range0.endValue = 0;
    range0.axisFill.fillOpacity = 1;
    range0.axisFill.fill = colorSet.getIndex(0);
    range0.axisFill.zIndex = -1;

    var range1 = axis.axisRanges.create();
    range1.value = 0;
    range1.endValue = 25;
    range1.axisFill.fillOpacity = 1;
    range1.axisFill.fill = colorSet.getIndex(2);
    range1.axisFill.zIndex = -1;

    var range2 = axis.axisRanges.create();
    range2.value = 25;
    range2.endValue = 32;
    range2.axisFill.fillOpacity = 1;
    range2.axisFill.fill = colorSet.getIndex(4);
    range2.axisFill.zIndex = -1;

    var range3 = axis.axisRanges.create();
    range3.value = 32;
    range3.endValue = 50;
    range3.axisFill.fillOpacity = 1;
    range3.axisFill.fill = colorSet.getIndex(8);
    range3.axisFill.zIndex = -1;

    var hand = chart.hands.push(new am4charts.ClockHand());

    // using chart.setTimeout method as the timeout will be disposed together with a chart
    chart.setTimeout(randomValue, 2000);

    function randomValue() {
      hand.showValue(-35 + Math.random() * 80, 1000, am4core.ease.cubicOut);
      chart.setTimeout(randomValue, 2000);
    }
  },
};
</script>


<style scoped>
#chartdiv {
  width: 100%;
  height: 500px;
}
</style>
<template>
  <div>
    <a-switch
      default-checked
      checked-children="dark"
      un-checked-children="light"
      @change="changeTheme"
    />
    <br />
    <br />
    <a-menu
      style="width: 256px"
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      :theme="theme"
      :selected-keys="[current]"
      @click="handleClick"
    >
      <a-sub-menu key="sub1">
        <span slot="title"
          ><a-icon type="calendar" /><span>{{
            nav_options.Dashboard
          }}</span></span
        >

        <a-menu-item v-for="item in dashboard_options" :key="item.id">
          <a-icon :type="item.icon" /> {{ item.name }}
        </a-menu-item>
      </a-sub-menu>

      <!-- Devices -->
      <a-sub-menu key="device-list">
        <span slot="title"
          ><a-icon type="setting" /><span>{{ nav_options.Devices }}</span></span
        >

        <!-- Sensors -->
        <a-sub-menu key="sensor-list">
          <!-- title -->
          <span slot="title">
            <a-icon type="setting" />
            <span>
              {{ nav_options.Sensors }}
            </span>
          </span>

          <!-- item v-for -->
          <a-menu-item v-for="sensor in test_sensors" :key="sensor.id">
            {{ sensor.name }}
          </a-menu-item>
        </a-sub-menu>

        <!-- Smart Devices -->
        <a-sub-menu key="smart-home-device-list">
          <!-- title -->
          <span slot="title">
            <a-icon type="api" />
            <span>{{ nav_options.Sensors }}</span>
          </span>

          <!-- item v-for -->
          <a-menu-item
            v-for="smart_device in test_smart_devices"
            :key="smart_device.id"
          >
            {{ smart_device.name }}
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
import {
  nav_options,
  dashboard_options,
} from "@/attributes/home-navigation.js";

const test_smart_devices = [
  { id: "smart_devices1", name: "Device1" },
  { id: "smart_devices2", name: "Device2" },
];

const test_sensors = [
  { id: "sensor1", name: "DHT11" },
  { id: "sensor2", name: "BMP280" },
];

export default {
  data() {
    return {
      current: "1",
      theme: "dark",
      nav_options: nav_options,
      dashboard_options: dashboard_options,
      // test
      test_sensors: test_sensors,
      test_smart_devices: test_smart_devices,
    };
  },
  methods: {
    handleClick(e) {
      console.log("click ", e);
      this.current = e.key;
    },
    changeTheme(checked) {
      this.theme = checked ? "dark" : "light";
    },
  },
};
</script>
<template>
  <div id="app">
    <el-date-picker
      v-model="value1"
      type="week"
      format="yyyy 第 WW 周"
      placeholder="选择周"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { DatePicker } from "element-ui";

export default Vue.extend({
  name: 'App',
  components: {
    [DatePicker.name]: DatePicker
  },
  data() {
    return {
      value1: ''
    }
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <h1 v-text="this.time" v-if="this.time != ''"></h1>
</template>

<script>
export default {
  name: "Clock",
  data() {
    return {
      hours: 0,
      minutes: 0,
      time: "",
    };
  },
  mounted() {
    this.updateDateTime();
  },
  beforeDestroy() {
    window.clearTimeout(this.$options.timer);
  },
  methods: {
    updateDateTime() {
      const now = new Date();
      this.hours = now.getHours();
      this.minutes =
        (parseInt(now.getMinutes(), 10) >= 10 ? "" : "0") + now.getMinutes();
      this.hours = this.hours % 12 || 12;
      this.time =
        this.hours + ":" + this.minutes + (this.hours > 12 ? "am" : "pm");
      this.$options.timer = window.setTimeout(this.updateDateTime, 1000);
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 10em;
  text-align: left;
  text-transform: none;
  text-shadow: 0.5rem 0.5rem 0 #bab5a1;
}
</style>

<template>
  <div>
    <Clock id="clock" />
  </div>
</template>

<script>
import Clock from "./Clock.vue";
export default {
  name: "Home",
  components: {
    Clock,
  },
};
</script>


<style scoped>
#clock {
  margin: 60px;
}
</style>
<template>
  <div id="app">
    <Header />

    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
@import "./assets/styles.css";

.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter {
  transform: translateX(25px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-25px);
  opacity: 0;
}
</style>

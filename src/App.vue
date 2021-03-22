<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" width="25%" /> -->
    <!-- <HelloWorld msg="Hello Vue in CodeSandbox!" /> -->
    <Header />

    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    //HelloWorld,
    Header,
  },
};
</script>

<style>
@import "./assets/styles.css";
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(25px);
  opacity: 0;
}
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-25px);
  opacity: 0;
}
</style>

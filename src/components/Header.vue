<template>
  <div id="header">
    <router-link to="/home" tag="button">HOME</router-link>
    <router-link to="/about" tag="button">ABOUT</router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
#header {
  border: 2px dotted #bab5a1;
  padding: 10px;
  height: 2px;
}

button {
  margin: 5px;
  margin-right: 16px;
  margin-top: -3px;
}
</style>
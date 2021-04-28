import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";
import Contact from "./components/Contact.vue";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "", component: Home },
  { path: "/home", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");

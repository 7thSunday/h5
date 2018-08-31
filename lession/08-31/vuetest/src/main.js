import router from "./router"
import app from "@/App.vue"
import Vue from "vue";

Vue.config.productionTips = false;

new Vue({
  router,
  render:h => h(app)
}).$mount("#app");
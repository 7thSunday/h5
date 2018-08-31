import router from "vue-router"
import myView from "@/views/myView.vue"
import contactUs from "@/views/contactUs.vue"
import Vue from "vue";

Vue.use(router)

export default new router({
  mode:"history",
  routes : [
    {path:"/",component:myView},
    {path:"/contactUs",component:contactUs}
  ]
})
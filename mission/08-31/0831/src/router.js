import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Client from './views/Client.vue'
import Design from './views/Design.vue'
import Editing from './views/Editing.vue'
import Model from './views/Model.vue'
import Photograph from './views/Photograph.vue'
import Video from './views/Video.vue'
import Vip from './views/Vip.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: "/client",
      name: "client",
      component: Client
    },
    {
      path: "/design",
      name: "design",
      component: Design
    },
    {
      path: "/editing",
      name: "editing",
      component: Editing
    },
    {
      path: "/model",
      name: "model",
      component: Model
    },
    {
      path: "/photograph",
      name: "photo",
      component: Photograph
    },
    {
      path: "/video",
      name: "video",
      component: Video
    },
    {
      path: "/vip",
      name: "vip",
      component: Vip
    }    
  ]
})

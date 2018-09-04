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
    {//动态路由
      path: '/about/:name',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {//子路由
      path: "/client",
      name: "client",
      component: Client,
      children: [
        {
          path:"",
          name:"one",
          component:()=>import("./components/one.vue")
        },
        {
          path:"one",
          name:"one",
          component:()=>import("./components/one.vue")
        },
        {
          path:"two",
          name:"two",
          component:()=>import("./components/two.vue")
        }
      ]
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

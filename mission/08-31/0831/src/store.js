import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "Ted",
    age:16
  },
  mutations: {
    changeName:function(state,changeD) {
      state.name = changeD.name;
    },
    changeAge:function(state,changeD) {
      state.age = changeD.age;
    }
  },
  actions: {

  }
})

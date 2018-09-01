<template>
  <div id="app">
    <div class="container">
      <router-link to="/"></router-link>
      <router-view/>
    </div>
    <btm class="btm-line"></btm>
  </div>
</template>

<script>
import btm from '@/components/BottomLine.vue'
export default {
  components: {
    btm
  }
}
</script>


<style lang="scss">
html,body {
  width: 100%;
  height: 100%;
  position: relative;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  .container {
    position: absolute;
    bottom: 48px;
    top: 0;
    width: 100%;
    overflow: auto;
  }
  .btm-line {
    position: absolute;
    bottom: 0;
  }
}
</style>

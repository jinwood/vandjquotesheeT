<template>
  <b-container id="app">
    <img src="./assets/quotesheet-logo.png">
    <home/>
    <quotes/>
  </b-container>
</template>

<script>
import Home from './components/Home'
import Quotes from './components/Quotes'

export default {
  name: 'app',
  components: {
    Home,
    Quotes
  },
  mounted: function () {
    console.log('running quoTesheeT on environment - ' + process.env.NODE_ENV)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

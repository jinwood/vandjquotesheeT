<template>
  <div id="app">
    <img src="./assets/logo.png">
    <home/>
    <quotes/>
  </div>
</template>

<script>
import Home from './components/Home'
import Quotes from './components/Quotes'

export default {
  name: 'app',
  components: {
    Home,
    Quotes
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

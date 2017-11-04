<template>
  <b-row class="">
    <b-col></b-col>
    <b-col>
      <h1>{{ msg }}</h1>
    </b-col>
    <b-col></b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'V and J Quote sheeT'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

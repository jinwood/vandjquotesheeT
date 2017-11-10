<template>
    <span class="rating-parent">
      <span v-for="n in rating" v-bind:key="n">
          <img class="head-icon" src="../assets/speaking_head.png"/>
      </span>
    </span>
</template>

<script>

export default {
  name: 'Rating',
  props: ['rating']
}
</script>

<style scoped>
  .head-icon{
    width: 20px;
    height: auto;
  }
  .rating-parent{
    margin-bottom: 10px;
  }
</style>

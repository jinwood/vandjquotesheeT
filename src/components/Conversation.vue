<template>
  <div>
    <div v-for="item in conversation" v-bind:key="item.text">
      <p>{{item.person}} - {{item.text}}</p>
    </div>
  </div>
</template>

<script>
  
  export default {
    name: 'Conversation',
    props: ['conversation']
  }
</script>
<style scope>
</style>
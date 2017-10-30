<template>
  <div>
    <div v-for="item in conversation">
      <p>{{item.person}}</p>
      <p>{{item.message}}</p>
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
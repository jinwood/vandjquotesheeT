<template>
  <div>
    <div v-for="item in conversation">
      <p>{{item.person}} - {{item.message}}</p>
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
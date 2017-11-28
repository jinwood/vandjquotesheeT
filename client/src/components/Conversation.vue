<template>
  <div>
    <div v-for="item in conversation" v-bind:key="item.id">
      <div v-if="item.detailType === 'conversation'">
        <p><strong>{{item.person}}:</strong> {{item.text}}</p>
      </div>
      <div v-if="item.detailType === 'action'">
        <p><em>{{item.description}}</em></p>
      </div>
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
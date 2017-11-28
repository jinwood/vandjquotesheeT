<template>
  <div>
    <div v-for="item in conversation" v-bind:key="item.id">
      <div v-if="item.detailType === 'conversation'">
        <p>{{item.person}} - {{item.text}}</p>
      </div>
      <div v-if="item.detailType === 'action'">
        <p>{{item.description}}</p>
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
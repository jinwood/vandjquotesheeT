<template>
  <div>
    <b-form-input type="text" v-model="person" placeholder="Person">
      Person
    </b-form-input>
    <b-form-input type="text" v-model="text" placeholder="What they said">
    </b-form-input>
  </div>
</template>

<script>

export default {
  name: 'NewConversation',
  data: function () {
    return {
      person: '',
      text: ''
    }
  }
}
</script>
<style scoped>
</style>
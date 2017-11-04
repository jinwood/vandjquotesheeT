<template>
  <div>
    <b-row>
      <b-col></b-col>
      <b-col>
        <b-card>
          <p>New Quote</p>
          <b-button :variant="'link'" v-on:click="addConversation">+</b-button>
          <b-button :variant="'button'" v-on:click="save">Save</b-button>
          <div v-for="item in newQuote.conversation">
            <input placeholder="Person" v-model="item.conversation.person">
            <input placeholder="They said..." v-model="item.conversation.text">
          </div>
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'NewQuote',
    data: function () {
      return {
        newQuote: {
          date: this.getDate(),
          rating: 0,
          conversation: []
        }
      }
    },
    methods: {
      addConversation: function () {
        this._data.newQuote.conversation.push({
          conversation: {
            person: '',
            text: ''
          }})
      },
      getDate: function () {
        var today = new Date()
        var dd = today.getDate()
        var mm = today.getMonth() + 1
        var yyyy = today.getFullYear()
        return dd + '/' + mm + '/' + yyyy
      },
      save: function () {
        axios.post('http://localhost:3000/quote', this._data.newQuote)
          .then(function () {
            console.log('posted quote')
          })
      }
    }
  }
</script>

<style scoped>
  .card{
    margin-bottom: 10px;
  }
</style>
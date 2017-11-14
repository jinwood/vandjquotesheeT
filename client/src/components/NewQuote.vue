<template>
  <b-card>
    <p>New Quote</p>
    <b-button :variant="'link'" v-on:click="addConversation">+</b-button>
    <b-button :variant="'button'" v-on:click="save">Save</b-button>
    <b-form-input class="rating-input" placeholder="0" type="number" v-model="newQuote.rating"/>
    <div v-for="item in newQuote.conversation" v-bind:key="item.id">
      <b-form-input placeholder="Person" v-model="item.person" />
      <b-form-input placeholder="They said..." v-model="item.text" />
    </div>
  </b-card>
</template>

<script>
  import Constants from '../constants'
  import axios from 'axios'

  export default {
    name: 'NewQuote',
    data: function () {
      return {
        newQuote: {
          date: this.getDate(),
          rating: 0,
          conversation: []
        },
        conversationId: 0
      }
    },
    methods: {
      addConversation: function () {
        this._data.newQuote.conversation.push({
          person: '',
          text: '',
          id: this.conversationId + 1
        })
        this.conversationId += 1
      },
      getDate: function () {
        var today = new Date()
        var dd = today.getDate()
        var mm = today.getMonth() + 1
        var yyyy = today.getFullYear()
        return dd + '/' + mm + '/' + yyyy
      },
      save: function () {
        axios.post(Constants.ApiBaseUrl + 'quote', this._data.newQuote)
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
  .rating-input{
    margin-top: 15px;
  }
</style>
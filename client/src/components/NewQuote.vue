<template>
  <b-card>
    <p>New Quote</p>
    <b-button :variant="'link'" v-on:click="addConversation">+</b-button>
    <b-button :variant="'button'" v-on:click="save">
      <div v-if="!saving">
        Save
      </div>
      <div v-if="saving">
        Saved
      </div>
    </b-button>
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
    props: ['refreshFunction'],
    data: function () {
      return setState()
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
      save: function () {
        var vm = this
        console.log('1' + vm.saving)
        vm.saving = true
        console.log('saving new quote to' + Constants.ApiBaseUrl + 'quote')
        axios.post(Constants.ApiBaseUrl + 'quote', this._data.newQuote)
          .then(function () {
            console.log('posted quote')
            vm.saving = false
            console.log('2' + vm.saving)
            vm.refreshFunction()
            vm.saveMessageTimeout()
            Object.assign(vm.$data, setState())
          })
          .catch(function (err) {
            console.log(err)
          })
      },
      saveMessageTimeout: function () {
        var vm = this
        setTimeout(function () {
          console.log('3' + vm.saving)
          vm.saving = false
        }, 3000)
      }
    }
  }

  function setState () {
    return {
      newQuote: {
        date: getDate(),
        rating: 0,
        conversation: []
      },
      conversationId: 0,
      saving: false
    }
  }
  function getDate () {
    var today = new Date()
    var dd = today.getDate()
    var mm = today.getMonth() + 1
    var yyyy = today.getFullYear()
    return dd + '/' + mm + '/' + yyyy
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
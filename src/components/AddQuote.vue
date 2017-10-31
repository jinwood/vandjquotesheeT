<template>
  <b-row>
    <b-col></b-col>
    <b-col cols="7">
      <b-card>
        <label>Rating</label>
        <b-form-input :type="'number'" min="0" max="5" value="0">
        </b-form-input>
        <label>Conversation</label>
        <b-button :variant="'link'" v-on:click="addConversationForm">+</b-button>
        <div v-for="item in conversations" v-bind:key="item.id">
          <NewConversation v-bind="item"></NewConversation>
        </div>
        <div>
          <b-button :variant="'button'" v-on:click="save">Save</b-button>
        </div>
      </b-card>
    </b-col>
    <b-col></b-col>
  </b-row>  
</template>

<script>
  import NewConversation from '../components/NewConversation'

  export default {
    name: 'AddQuote',
    components: {
      NewConversation: NewConversation
    },
    data: function () {
      return {
        conversations: [],
        quote: {
          date: 'set the date here',
          rating: 0
        }
      }
    },
    methods: {
      addConversationForm () {
        this.conversations.push({})
      },
      save () {
        console.log(this.conversations)
      }
    }
  }
</script>

<style scoped
</style>
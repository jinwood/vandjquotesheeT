<template>
        <b-card>
          <p>Date Recorded {{quoteData.date}}</p>
          <div class="rating">Rating&nbsp;<Rating v-bind:rating="quoteData.rating"></Rating></div>
          <hr>
          <Conversation v-bind:conversation="quoteData.conversation">
          </Conversation>
        </b-card>
</template>

<script>
import Conversation from '../components/Conversation'
import Rating from '../components/Rating'

export default {
  name: 'QuoteItem',
  props: ['quoteData'],
  components: {Conversation: Conversation, Rating: Rating}
}
</script>

<style scoped>
  .rating{
    display: inline-block;
    overflow: auto;
    width: 100%;
  }
  .card{
    margin-bottom: 10px;
  }
</style>
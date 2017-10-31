<template>
    <b-row>
      <b-col></b-col>
      <b-col cols="7">
        <b-card>
          {{quoteData.date}}

          {{quoteData.rating}}

          <Conversation v-bind:conversation="quoteData.conversation">
          </Conversation>
        </b-card>
      </b-col>
      <b-col></b-col>

    </b-row>
</template>

<script>
import Conversation from '../components/Conversation'

export default {
  name: 'QuoteItem',
  props: ['quoteData'],
  components: {Conversation: Conversation}
}
</script>

<style scoped>
  .card{
    margin-bottom: 10px;
  }
</style>
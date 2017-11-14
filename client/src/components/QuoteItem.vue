<template>
        <b-card v-on:mouseover="showControls != showControls">
          <div v-if="showControls" class="col-3">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
            <i class="fa fa-trash-o" aria-hidden="true"></i>
          </div>
          <div class="col-3">
          </div>
          <div class="col-3">
          </div>
          <div class="col-12 conversation">
            <Conversation v-bind:conversation="quoteData.conversation">
            </Conversation>
          </div>
          <hr>
          <div class="rating">Rating&nbsp;<Rating v-bind:rating="quoteData.rating"></Rating></div>
        </b-card>
</template>

<script>
import Conversation from '../components/Conversation'
import Rating from '../components/Rating'

export default {
  name: 'QuoteItem',
  props: ['quoteData'],
  components: {Conversation: Conversation, Rating: Rating},
  data: function () {
    return {
      showControls: false
    }
  }
}
</script>

<style scoped>
  .conversation{
    margin-top: 15px;
  }
  .rating{
    display: inline-block;
    overflow: auto;
    width: 100%;
  }
  .card{
    margin-bottom: 10px;
  }
</style>
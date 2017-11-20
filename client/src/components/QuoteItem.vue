<template>
        <b-card v-on="{mouseover: controlSwitch,mouseout: controlSwitch}">
          <div v-bind:class="{hide: !showControls}" class="col-3">
            <a><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>
            <a v-on:click="deleteQuote"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
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
import Constants from '../constants'
import axios from 'axios'

export default {
  name: 'QuoteItem',
  props: ['quoteData', 'refreshFunction'],
  components: {Conversation: Conversation, Rating: Rating},
  data: function () {
    return {
      showControls: false
    }
  },
  methods: {
    controlSwitch () {
      this.showControls = !this.showControls
    },
    deleteQuote () {
      var vm = this
      axios
        .delete(Constants.ApiBaseUrl + 'quote/' + vm.quoteData.id)
          .then(function (result) {
            console.log('in delete result')
            vm.refreshFunction()
          })
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
  .hide{
    visibility:hidden
  }
  a{
    cursor: pointer;
  }
</style>
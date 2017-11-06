<template>
<!-- <div>
    <b-row>
        <b-col sm>col-sm</b-col>
        <b-col sm>col-sm</b-col>
        <b-col sm>col-sm</b-col>
    </b-row>
    </div> -->
    <div>
    <b-row class="text-center">
      <b-button :variant="'link'" v-on:click="revealAddQuote">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </b-button>
        <div v-if="showNewQuote">
          <NewQuote></NewQuote>
        </div>
    </b-row>
    <b-row class="text-center">
      <b-col md="3" lg="4"></b-col>
      <b-col order-sm="" md="6" lg="4">
        <transition-group name="list" tag="p">
          <div v-for="item in quotes" v-bind:key="item.id">
            <QuoteItem v-bind:quoteData="item">
            </QuoteItem>
          </div>
        </transition-group>
      </b-col>
      <b-col md="3" lg="4"></b-col>
    </b-row>
    </div>
</template>

<script>
import QuoteItem from '../components/QuoteItem'
import NewQuote from '../components/NewQuote'
import axios from 'axios'

export default {
  name: 'Quotes',
  components: {
    QuoteItem: QuoteItem,
    NewQuote: NewQuote
  },
  data: function () {
    return {
      quotes: [],
      showNewQuote: false
    }
  },
  created: function () {
    this.getQuotes()
  },
  methods: {
    revealAddQuote () {
      this.showNewQuote = !this.showNewQuote
    },
    getQuotes () {
      var vm = this
      console.log('in get quotes')
      axios
        .get('http://localhost:3000/quotes')
          .then(function (result) {
            console.log('in result')
            vm.quotes = result.data.quotes
          })
    }
  }
}
</script>

<style scoped>
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
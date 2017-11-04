<template>
  <div>
    <b-button :variant="'link'"
      v-on:click="revealAddQuote">+</b-button>
    <div v-if="showNewQuote">
      <NewQuote></NewQuote>
    </div>
    

    <p>{{quotes.length}}</p>
    <transition-group name="list" tag="p">
      <div v-for="item in quotes" v-bind:key="item.id">
        <QuoteItem v-bind:quoteData="item">
        </QuoteItem>
      </div>
  </transition-group>
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
            debugger
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
<template>
  <div>
    <div v-for="item in quotes">
      <QuoteItem v-bind:quoteData="item">
      </QuoteItem>
    </div>
  </div>
</template>

<script>
import QuoteItem from '../components/QuoteItem'
import axios from 'axios'

export default {
  name: 'Quotes',
  components: {QuoteItem: QuoteItem},
  data: function () {
    return {
      quotes: []
    }
  },
  created: function () {
    this.getQuotes()
  },
  methods: {
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

</style>
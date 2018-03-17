<template>
    <div>
    <b-row class="text-center">
      <b-col md="3" lg="4"></b-col>
      <b-col md="3" lg="4">
      </b-col>
      <b-col md="3" lg="4"></b-col>
    </b-row>
    <b-row class="text-center">
      <b-col md="3" lg="4"></b-col>
      <b-col order-sm="" md="6" lg="4">
        <div v-if="!loading">
          <b-button :variant="'link'" v-on:click="revealAddQuote">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </b-button>
        </div>
        <div v-if="loading">
          <img src="../assets/ajax-loader.gif" />
        </div>
        <div v-if="showNewQuote">
          <NewQuote :refreshFunction="getQuotes"></NewQuote>
        </div>
        <transition-group name="list" tag="p">
          <div v-for="item in quotes" v-bind:key="item.id">
            <QuoteItem v-bind:quoteData="item" :refreshFunction="getQuotes">
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
import Constants from '../constants'

export default {
  name: 'Quotes',
  components: {
    QuoteItem: QuoteItem,
    NewQuote: NewQuote
  },
  data: function () {
    return {
      quotes: [],
      showNewQuote: false,
      loading: true
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
      console.log('get quotes')
      var vm = this
      axios
        .get(Constants.ApiBaseUrl + 'quotes')
          .then(function (result) {
            console.log('in result')
            vm.loading = false
            vm.quotes = result.data.quotes
          })
          .catch(function (err) {
            console.log('errror when getting quotes:' + err)
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
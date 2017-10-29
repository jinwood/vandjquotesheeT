<<template>
    <div>
      <Quote v-for="item in quotes"
            v-bind:data="item"
            v-bind:key="item.date">
      </Quote>
    </div>
</template>

<script>
import Quote from '../components/Quote'
import axios from 'axios'

export default {
  name: 'Quotes',
  components: Quote,
  computed: {
    quotes: {
      get: function () {
        this.getQuote()
        return this
      },
      set: function (newValue) {
        this.push(newValue)
      }
    }
  },
  methods: {
    getQuotes () {
      console.log('in get quotes')
      var that = this
      axios
        .get('http://localhost:3000/quotes')
          .then(function (result) {
            console.log(that)
            console.log(that.quotes)
          })
    }
  }
}
</script>

<style scoped>

</style>
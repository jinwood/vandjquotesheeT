<template>
  <b-card>
    <p>New Quote</p>
    <b-button :variant="'button'" 
              v-on:click="startNewDetail"
              v-bind:disabled="addingDetail">Add detail</b-button>
    <b-button :variant="'button'" v-on:click="save">
      <div v-if="!saving">
        Save
      </div>
      <div v-if="saving">
        Saved
      </div>
    </b-button>

    <b-form-group id="ChooseDetailType" 
        label="Choose the type of detail">
        <b-form-select v-model="currentDetailType" 
                       :options="detailTypes" 
                       class="mb-3">
        </b-form-select>
    </b-form-group>

    <div v-if="detailTypeChosen">
      <div v-for="item in newQuote.detail" v-bind:key="item.id">
        <b-form-input placeholder="Person" v-model="item.person" />
        <b-form-input placeholder="They said..." v-model="item.text" />
      </div>
    </div>
    <b-form-group label="Raiting">
      <b-form-input class="rating-input" placeholder="0" type="number" v-model="newQuote.rating"/>    
    </b-form-group>
  </b-card>
</template>

<script>
  import Constants from '../constants'
  import axios from 'axios'

  export default {
    name: 'NewQuote',
    props: ['refreshFunction'],
    data: function () {
      return setState(Constants)
    },
    watch: {
      currentDetailType: function (value) {
        this.currentDetail.detailType = value
        this.detailTypeChosen = true
      }
    },
    methods: {
      startNewDetail: function () {
        this.currentDetail = { detailType: '' }
        this._data.newQuote.detail.push(this.currentDetail)
        this.detailId += 1
      },
      addDetail: function () {
        this._data.newQuote.detail.push({
          person: '',
          text: '',
          id: this.detailId + 1
        })
        this.detailId += 1
      },
      save: function () {
        var vm = this
        console.log('1' + vm.saving)
        vm.saving = true
        console.log('saving new quote to' + Constants.ApiBaseUrl + 'quote')
        axios.post(Constants.ApiBaseUrl + 'quote', this._data.newQuote)
          .then(function () {
            console.log('posted quote')
            vm.saving = false
            console.log('2' + vm.saving)
            vm.refreshFunction()
            vm.saveMessageTimeout()
            Object.assign(vm.$data, setState())
            this.addingDetail = false
          })
          .catch(function (err) {
            console.log(err)
          })
      },
      saveMessageTimeout: function () {
        var vm = this
        setTimeout(function () {
          console.log('3' + vm.saving)
          vm.saving = false
        }, 3000)
      }
    }
  }

  function setState (constants) {
    return {
      newQuote: {
        date: getDate(),
        rating: 0,
        detail: []
      },
      addingDetail: true,
      currentDetail: {},
      currentDetailType: '',
      detailId: 0,
      detailTypes: constants.QuoteSettings.DetailTypes,
      detailTypeChosen: false,
      saving: false
    }
  }
  function getDate () {
    var today = new Date()
    var dd = today.getDate()
    var mm = today.getMonth() + 1
    var yyyy = today.getFullYear()
    return dd + '/' + mm + '/' + yyyy
  }
</script>

<style scoped>
  .card{
    margin-bottom: 10px;
  }
  .rating-input{
    margin-top: 15px;
  }
</style>
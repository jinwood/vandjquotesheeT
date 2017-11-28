<template>
  <b-card>
    <p>New Quote</p>
    <b-button :variant="'button'" 
              v-on:click="startNewDetail"
              v-bind:disabled="addingDetail">Add detail</b-button>
    <b-button :variant="'button'" v-on:click="saveQuote">
      <div v-if="!saving">
        Save Quote
      </div>
      <div v-if="saving">
        Saved Quote
      </div>
    </b-button>
    <b-form-group label="Raiting">
      <b-form-input class="rating-input" placeholder="0" type="number" v-model="newQuote.rating"/>    
    </b-form-group>
    <b-form-group id="ChooseDetailType" 
        label="Choose the type of detail">
        <b-form-select v-model="currentDetailType" 
                       :options="detailTypes" 
                       class="mb-3">
        </b-form-select>
    </b-form-group>

    <div v-if="detailTypeChosen">
      <div v-if="currentDetailType === 'action'">
        <b-form-input placeholder="Description" v-model="currentDetail.description" />
      </div>
      <div v-if="currentDetailType === 'conversation'">
        <b-form-input placeholder="Person" v-model="currentDetail.person" />
        <b-form-input placeholder="They said..." v-model="currentDetail.text" />
      </div>
    </div>
    <div v-for="detail in newQuote.detail">
      <div v-if="detail.detailType === 'conversation'">
        <p><strong>{{detail.person}}:</strong> {{detail.text}}</p>
      </div>
      <div v-if="detail.detailType === 'action'">
        <p><em>{{detail.description}}</em></p>
      </div>
    </div>
    <b-button :variant="'button'" v-on:click="saveDetail">Save Detail</b-button>
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
        this.addDetail(value)
      }
    },
    methods: {
      startNewDetail: function () {
        this.currentDetail = { detailType: '' }
        this._data.newQuote.detail.push(this.currentDetail)
        this.detailId += 1
      },
      addDetail: function (detailType) {
        var detail = {}
        switch (detailType) {
          case 'action':
            detail = {
              detailType: 'action',
              description: '',
              id: this.detailId + 1
            }
            break
          case 'conversation':
            detail = {
              detailType: 'conversation',
              person: '',
              text: '',
              id: this.detailId + 1
            }
        }
        this.currentDetail = detail
        this.detailId += 1
      },
      saveDetail: function () {
        this.newQuote.detail.push(this.currentDetail)
        this.currentDetail = {}
        this.currentDetailType = ''
        this.addingDetail = false
      },
      saveQuote: function () {
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
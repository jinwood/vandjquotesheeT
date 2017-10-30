<template>
    <div>
        {{quoteData.date}}

        {{quoteData.rating}}

        <Conversation v-bind:conversation="quoteData.conversation">
        </Conversation>
    </div>
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
</style>
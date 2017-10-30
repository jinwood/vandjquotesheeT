<template>
    <div>
        {{quoteData.date}}

        {{quoteData.rating}}

    </div>
</template>

<script>
export default {
  name: 'QuoteItem',
  props: ['quoteData']
}
</script>

<style scoped>
</style>

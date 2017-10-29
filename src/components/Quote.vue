<template>
    <div>
        <p>foo</p>
        {{quoteData.rating}}
    </div>
</template>

<script>
export default {
  name: 'Quote',
  props: ['quoteData']
}
</script>

<style scoped>
</style>

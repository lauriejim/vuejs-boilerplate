<template>
  <h1>Home Page</h1>
</template>

<script>
  export default {
    data () {
      return {
        // Component data
      }
    },
    methods: {
      // Component methods
    },
    route: {
      activate (transition) {
        // When page is loaded
        // Previous page `transition.from.path`
        transition.next()
      },
      deactivate (transition) {
        // When page left
        transition.next()
      }
    }
  }
</script>

<style>
  /* Component style */
</style>

<template>
  <h1>Contact Page</h1>
</template>

<script>
  // Import components

  export default {
    components: {
      // Imported components
    },
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

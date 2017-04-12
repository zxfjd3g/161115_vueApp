<template>
  <div id="app">
    <h1 @click="test">{{ msg }}2222</h1>

  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Vue!'
    }
  },

  methods: {
    test () {
      alert('test()')
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>

<template>
  <div>
    <Hello></Hello>
    <img class="logo" src="assets/logo.png"/>
    <p>{{content}}</p>
  </div>
</template>

<script>
  import Hello from './components/Hello.vue'

  export default {
    data () {
      return {
        content: 'xxxx'
      }
    },

    components: {Hello}
  }
</script>

<style>
  .logo {
    width: 100px;
    height: 100px;
  }
</style>

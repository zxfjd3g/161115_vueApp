<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <hello></hello>
  </div>
</template>
<script>
  import hello from './components/hello'
  export default {
    components: {
      hello
    }
  }
</script>
<style>
  img {
    width: 100px;
    height: 100px;
  }
</style>

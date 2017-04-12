<template>
  <h2>{{msg}}</h2>
</template>

<script>
  export default {
    data() {
      return {
        msg: '应用组件内容...'
      }
    }
  }
</script>

<style>
  h2 {
    color: red;
    font-size: 30px;
  }
</style>
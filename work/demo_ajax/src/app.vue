<template>
  <div class="container">
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <search :set-search-name="setSearchName"></search>
    </section>
    <main :search-name="searchName"></main>
  </div>
</template>
<script>
  import search from './components/search.vue'
  import main from './components/main.vue'

  export default {
    data () {
      return {
        searchName: ''
      }
    },

    methods: {
      setSearchName (searchName) {
        this.searchName = searchName
      }
    },

    components: {
      search, main
    }
  }
</script>
<style>
</style>

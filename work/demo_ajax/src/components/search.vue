<template>
  <div>
    <input type="text" placeholder="enter the name you search" v-model="searchName"/>
    <button @click="search">Search</button>
  </div>
</template>

<script>
  export default {
    props: ['setSearchName'],
    data () {
      return {
        searchName: ''
      }
    },

    methods: {
      search () {
        var searchName = this.searchName && this.searchName.trim()
        if (!searchName) {
          this.searchName = ''
          return
        }

        this.setSearchName(searchName)

        this.searchName = ''
      }
    }
  }
</script>

<style>

</style>

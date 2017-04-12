<template>

  <h2 v-show="loading">
    loading....
  </h2>

  <div v-show="lastGistUrl">
    {{username}}'s last gist is <a :href="lastGistUrl">here</a>
  </div>
</template>

<script>
/*
1. 使用axios发送ajax请求
  * https://github.com/mzabriskie/axios
2. 测试接口
 * https://api.github.com/users/octocat/gists
*/

  import axios from 'axios'

  export default {
    props: {
      username: {
        type: String
      }
    },

    data () {
      return {
        loading: false,
        lastGistUrl: ''
      }
    },

    created () {
      this.loading = true
      const url = `https://api.github.com/users/${this.username}/gists`
      axios.get(url)
        .then((response) => {
          this.loading = false
          this.lastGistUrl = response.data[0].html_url
          console.log(response)
        })
    }
  }
</script>

<style>
</style>

<template>
  <h2 v-show="firstView">请输入后搜索</h2>
  <h2 v-show="loading">LOGINDING...</h2>
  <h2 v-show="errorMsg">{{errorMsg}}</h2>

  <div class="row" v-show="users">
    <div class="card" v-for="user in users">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    props: ['searchName'],

    data () {
      return {
        firstView: true,
        loading: false,
        users: null,
        errorMsg: null
      }
    },

    computed: {
      searchName: {
        set (value) {

          this.firstView = false
          this.loading = true
          this.users = null
          this.errorMsg = null

          //发送ajax请求
          const url = `https://api.github.com/search/users?q=${value}`
         /*
          this.$http.get(url)
            .then(response => {
              // success callback
              console.log(response)
              this.users = response.body.items
              this.loading = false
            }, response => {
              // error callback
              this.loading = false
              this.errorMsg = response.statusText
            })
           */
          axios.get(url)
            .then(response => {
              // success callback
              console.log(response)
              this.users = response.data.items
              this.loading = false
            })
            .catch(error => {
              // error callback
              console.log(error)
              this.loading = false
            })
        }
      }
    }
  }
</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>

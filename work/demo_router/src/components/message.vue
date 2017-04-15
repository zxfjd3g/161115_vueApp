<template>
  <div>
    <ul>
      <li v-for="m in messages">
        <a v-link="{path:'/home/message/mdtail/'+m.id}">{{m.content}}</a>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        messages: [
          {id:1, content:'message11111'},
          {id:2, content:'message22222'},
          {id:3, content:'message3333'},
        ]
      }
    }
  }
</script>

<style>

</style>

<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <comment-add :add="add"></comment-add>
      <comment-list :comments="comments"></comment-list>
    </div>
  </div>
</template>
<script>
  import CommentAdd from './components/CommentAdd'
  import CommentList from './components/CommentList'

  export default {

    data () {
      return {
        comments: []
      }
    },

    created () {
      //模拟发送ajax请求, 获取初始数据
      setTimeout(() => {
        this.comments = [
          {
            id: 1,
            name: 'Bob',
            content: 'Vue很diao'
          },
          {
            id: 2,
            name: 'Tom',
            content: 'Vue确实good'
          }
        ]
      }, 1000)
    },

    methods: {
      add (comment) {
        this.comments.unshift(comment)
      }
    },

    components: {
      CommentAdd,
      CommentList
    }
  }
</script>
<style>
</style>

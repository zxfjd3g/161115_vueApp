<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <comment-add :add-comment="addComment"></comment-add>
      <comment-list :comments="comments" :delete-comment="deleteComment"></comment-list>
    </div>
  </div>
</template>

<script>
  import CommentAdd from './CommentAdd.vue'
  import CommentList from './CommentList.vue'

  export default {
    data () {
      return {
        comments: []
      }
    },

    created () {
      //模拟从服务器动态异步获取
      setTimeout(() => {
        this.comments = [
          {
            username: "Tom",
            content: "Vue还不错啊!",
            id: Date.now()
          },
          {
            username: "JACK",
            content: "Vue相当给力!",
            id: Date.now() + 1
          }
        ]
      }, 1000)
    },

    components: {CommentAdd, CommentList},

    methods: {
      addComment(comment) {
        this.comments.unshift(comment)
      },
      deleteComment(comment) {
        this.comments.$remove(comment)
      }
    },

    events: {
      //定义自定义事件
      comment_delete (comment) {
        this.deleteComment(comment)
      }
    }
  }
</script>

<style>
</style>

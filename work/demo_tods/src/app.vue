<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :add-todo="addTodo"></todo-header>
      <todo-main :todos="todos"></todo-main>
      <todo-footer :todos="todos" :remove-all-completed="removeAllCompleted" :update-todos-state="updateTodosState"></todo-footer>
    </div>
  </div>
</template>
<script>
  import header from './components/header'
  import main from './components/main'
  import footer from './components/footer'
  import storageUtil from './util/storageUtil'

  export default {
    data () {
      return {
        todos: []
      }
    },

    created () {
      // this.todos = JSON.parse(window.localStorage.getItem('TODOS') || '[]')
      this.todos = storageUtil.fetch()
    },

    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      deleteTodo (todo) {
        this.todos.$remove(todo)
      },
      removeAllCompleted () {
        this.todos = this.todos.filter(todo => {
          return !todo.completed
        })
      },
      updateTodosState (allChecked) {
        this.todos.forEach(todo => {
          todo.completed = allChecked
        })
      }
    },

    events: {
      todo_delete (todo) {
        this.deleteTodo(todo)
      }
    },

    watch: {
      'todos': {
        deep: true,
        handler: storageUtil.save
      }
    },

    components: {
      'todo-header': header,
      'todo-main': main,
      'todo-footer': footer
    }
  }
</script>
<style>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>

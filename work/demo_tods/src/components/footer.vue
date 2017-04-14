<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox"/>
    </label>
    <span>
          <span>已完成{{completedSize}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    props: {
      todos: Array,
      removeAllCompleted: Function,
      updateTodosState: Function
    },

    computed: {
      completedSize () {
       /* var size = 0
        for (var i = 0; i < this.todos.length; i++) {
          var todo = this.todos[i]
          size += todo.completed ? 1 : 0
        }
        return size*/

        return this.todos.reduce((preValue, todo) => {
          return preValue + (todo.completed ? 1 : 0)
        }, 0)
      }
    }
  }
</script>

<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>

<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="inputTodo" @keyup.enter="add"/>
  </div>
</template>

<script>
  export default {
    props: {
      addTodo: Function
    },
    data () {
      return {
        inputTodo: ''
      }
    },
    methods: {
      add () {
        // 检查数据合法性
        const inputTodo = this.inputTodo.trim()
        if (!inputTodo) {
          this.inputTodo = ''
          return
        }
        // 根据输入创建todo对象
        const todo = {
          text: inputTodo,
          completed: false
        }
        // 添加
        this.addTodo(todo)
        // 清理输入
        this.inputTodo = ''
      }
    }
  }
</script>

<style>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>

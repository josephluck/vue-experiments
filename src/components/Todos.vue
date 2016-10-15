<template>
  <div class="todos">
    <form
      @submit="addNewTodo"
    >
      <input
        placeholder="Enter a todo"
        v-model="addNewTodoText"
      />
      <button
        type="submit"
      >
        Save
      </button>
    </form>
    <ol>
      <template v-for="todo in todos">
        <todo
          :todo="todo"
          v-on:toggle="toggleTodo(todo)"
        />
      </template>
    </ol>
  </div>
</template>

<script>
  import Todo from './Todo.vue'
  export default {
    data () {
      return {
        addNewTodoText: '',
        todos: []
      }
    },
    methods: {
      addNewTodo: function (e) {
        e.preventDefault()
        this.todos.push({
          text: this.addNewTodoText.trim(),
          completed: false
        })
        this.addNewTodoText = ''
      },
      toggleTodo: function (todo) {
        todo.completed = !todo.completed
      }
    },
    components: {
      Todo
    }
  }
</script>

<style scoped lang="less">
  h1 {
    color: #42b983;
  }
</style>

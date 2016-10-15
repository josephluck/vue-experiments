<template>
  <div class="todos">
    <add-new-todo
      v-on:submit="addNewTodo"
    />
    <template v-for="todo in todos">
      <todo-item
        :todo="todo"
        v-on:toggle="toggleTodo(todo)"
      />
    </template>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        todos: []
      }
    },
    methods: {
      addNewTodo: function (text) {
        this.todos.push({
          text,
          id: new Date().getTime(),
          completed: false
        })
      },
      toggleTodo: function (todo) {
        todo.completed = !todo.completed
      }
    },
    components: {
      TodoItem: require('../components/TodoItem.vue'),
      AddNewTodo: require('../components/AddNewTodo.vue')
    }
  }
</script>

<style scoped lang="less">
  h1 {
    color: #42b983;
  }
</style>

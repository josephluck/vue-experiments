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
  import Store from '../store/Store'
  export default {
    data () {
      return {
        todos: []
      }
    },
    computed: {
      todos () {
        return Store.state.todos
      }
    },
    methods: {
      addNewTodo: function (text) {
        Store.commit('addNewTodo', text)
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

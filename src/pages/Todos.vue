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
    computed: {
      todos () {
        return Store.state.todos
      }
    },
    methods: {
      addNewTodo (text) {
        Store.commit('addNewTodo', text)
      },
      toggleTodo (todo) {
        Store.commit('toggleTodo', todo)
      }
    },
    components: {
      TodoItem: require('../components/TodoItem.vue'),
      AddNewTodo: require('../components/AddNewTodo.vue')
    }
  }
</script>

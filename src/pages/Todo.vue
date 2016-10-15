<template>
  <div class="todo">
    <h1>Todo</h1>
  </div>
</template>

<script>
  import Store from '../store/Store'
  export default {
    computed: {
      todo () {
        return Store.state.todos
      }
    }
  }
</script>

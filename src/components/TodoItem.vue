<template>
  <div
    class="todo"
    :class="{
      completed: todo.completed
    }"
  >
    <input
      class="toggle"
      type="checkbox"
      v-on:click="toggleTodo"
    />
    <router-link
      v-bind:to="{
        name: 'todo',
        params: {
          todoId: todo.id
        }
      }"
      class="todo-description"
    >
      {{todo.text}}
    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      todo: Object
    },
    methods: {
      toggleTodo () {
        this.$emit('toggle', this.todo)
      }
    }
  }
</script>

<style lang="less" scoped>
  .todo {
    &.completed {
      .todo-description {
        text-decoration: line-through;
      }
    }
  }
</style>
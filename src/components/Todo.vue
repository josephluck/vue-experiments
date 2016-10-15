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
    <span
      class="todo-description"
    >
      {{todo.text}}
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      todo: Object
    },
    methods: {
      toggleTodo: function () {
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
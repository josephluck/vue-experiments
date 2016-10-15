<template>
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
</template>

<script>
  export default {
    data: function () {
      return {
        addNewTodoText: ''
      }
    },
    methods: {
      addNewTodo: function (e) {
        e.preventDefault()
        this.$emit('submit', this.addNewTodoText)
        this.addNewTodoText = ''
      }
    }
  }
</script>
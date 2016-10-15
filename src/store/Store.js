import Vuex from 'vuex'

const Store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addNewTodo (state, text) {
      state.todos.push({
        text,
        id: new Date().getTime(),
        completed: false,
        comments: []
      })
    },
    toggleTodo (state, todo) {
      todo.completed = !todo.completed
    }
  }
})

export default Store

import Vuex from 'vuex'

const Store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addNewTodo: function (state, text) {
      state.todos.push({
        text,
        id: new Date().getTime(),
        completed: false
      })
    }
  }
})

export default Store

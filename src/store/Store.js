import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    todos: [
      {
        text: 'Get great at Vue!',
        id: 1,
        completed: false,
        comments: []
      }
    ]
  },
  mutations: {
    ADD_NEW_TODO (state, text) {
      state.todos.push({
        text,
        id: new Date().getTime(),
        completed: false,
        comments: []
      })
    },
    TOGGLE_TODO (state, todo) {
      todo.completed = !todo.completed
    }
  },
  actions: {
    addNewTodo ({commit}, text) {
      commit('ADD_NEW_TODO', text)
    },
    toggleTodo ({commit}, todo) {
      commit('TOGGLE_TODO', todo)
    }
  }
})

export default Store

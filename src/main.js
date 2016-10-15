// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/todos',
      component: { render (h) { return h('router-view') } },
      children: [
        {
          path: '',
          component: require('./pages/Todos.vue')
        },
        {
          path: ':todoId',
          component: require('./pages/Todo.vue')
        }
      ]
    }
  ]
})

import store from './store/Store'

new Vue({
  router,
  store,
  render: h => h(require('./App.vue'))
}).$mount('#app')

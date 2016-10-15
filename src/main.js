// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import Todos from './components/Todos.vue'

/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/todos', component: Todos }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

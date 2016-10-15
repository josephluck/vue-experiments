// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueRouter)

/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/todos', component: require('./pages/Todos.vue') }
  ]
})

new Vue({
  router,
  render: h => h(require('./App.vue'))
}).$mount('#app')

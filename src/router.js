import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/main/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    }
  ]
})

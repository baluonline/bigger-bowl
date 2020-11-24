import Vue from 'vue'
import Router from 'vue-router'
import Living from "./components/Living/living.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      children:[
        {
          path:'living',
          name:'living',
          component:Living
        }
      ]
    },
    {
      path: '/pet/:id',
      name: 'pet',
      component: () => import('./views/Pet.vue')
    },
 
  ]
})

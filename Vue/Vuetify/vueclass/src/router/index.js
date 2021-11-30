import Vue from 'vue'
import VueRouter from 'vue-router'
import Amalitech from '../views/Amalitech.vue'
import Education from '../views/Education.vue'
import Life from '../views/Life.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Amalitech',
    component: Amalitech
  },
  {
    path: '/life',
    name: 'Life',
    component: Life
  },
  
  {
    path:'/Education',
    name:'Education',
    component:Education
  }
  
]

const router = new VueRouter({
  routes
})

export default router

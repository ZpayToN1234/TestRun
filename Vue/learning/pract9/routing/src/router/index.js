import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import Details from '../views/Jobs/Details.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
  {path:'/Jobs',
name:'Jobs',
component:Jobs},

{path:'/Jobs/:id',
name:'Details',
component:Details,
props:true

},

//redirect
{path:'/crazy',
redirect:'/Jobs'

}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

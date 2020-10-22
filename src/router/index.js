import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Asteroids',
    component: () =>
			import(
				/* webpackChunkName: "home" */ '../views/Asteroids.vue'
			),
  },
  {
    path: '/asteroid/:asteroidID',
    name: 'Asteroid',
    component: () =>
			import(
				/* webpackChunkName: "home" */ '../views/Asteroid.vue'
			),
  },
    {
    path: '/login',
    name: 'Login',
    component: () =>
			import(
				/* webpackChunkName: "home" */ '../views/Auth/Login.vue'
			),
  },
        {
    path: '/register',
    name: 'Register',
    component: () =>
			import(
				/* webpackChunkName: "home" */ '../views/Auth/Register.vue'
			),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

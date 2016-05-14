import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import Contact from './pages/Contact.vue'

Vue.use(VueRouter)

let router = new VueRouter()

router.map({
  '/home': {
    component: Home
  },
  '/contact': {
    component: Contact
  }
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')

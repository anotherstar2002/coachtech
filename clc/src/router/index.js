import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Service from '../views/Service.vue';
import Tool from '../views/Tool.vue';
import Contact from '../views/Contact.vue';
import NotFound from '../views/404.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: "/service",
    name: "Service",
    component: Service,
  },
  {
    path: "/tool",
    name: "Tool",
    component: Tool,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

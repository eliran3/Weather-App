import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("@/views/Home.vue")
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import("@/views/Contact.vue")
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import("@/views/Login.vue")
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
})

export default router;

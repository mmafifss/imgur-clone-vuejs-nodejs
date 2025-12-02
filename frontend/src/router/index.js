import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    { path: '/', name: 'Home', component: () => import('@/components/Homepage.vue') },
    { path: '/login', name: 'Login', component: () => import('@/components/Loginpage.vue') },
    { path: '/register', name: 'Register', component: () => import('@/components/Registerpage.vue') },
    { path: '/:id', name: 'SingleImage', component: () => import('@/components/SingleImage.vue') },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
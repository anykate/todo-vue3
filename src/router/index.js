import Home from '@/views/Home.vue'
import Todos from '@/views/Todos.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: Home,
    },
    {
        path: '/todos',
        name: 'TodosView',
        component: Todos,
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
})

export default router

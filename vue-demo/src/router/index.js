import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        component: () => import('../pages/index.vue')

    },
    {
        path: '/routerHistory',
        component: () => import('../pages/routerHistory.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
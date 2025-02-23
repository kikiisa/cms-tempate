import {  createRouter, createWebHistory } from 'vue-router'
const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/category/:id',
            name: 'category',
            component: () => import('../views/CategoryView.vue')
        },
        {
            path:"/post",
            name:"post",
            component: () => import('../views/PostView.vue')
        },
        {
            path:"/post/",
            name:"postSearch",
            component: () => import('../views/SearchPostView.vue')
        }
       
    ]
})

export default routes

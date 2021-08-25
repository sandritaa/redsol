import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        components:{
            default: ()=>import(/* webpackChunkName: "home" */ '../layouts/Homepage.vue')
        },
        children:[
            {
                path:'',
                name:'BackendTest',
                component: ()=>import(/* webpackChunkName: "Backend" */ '../views/Backend.vue')
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import("../views/home/Home.vue")
    },
    {
        path: "/me",
        component: () => import("../views/me/Me.vue")
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
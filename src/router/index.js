import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

Vue.config.productionTip = false;

import Home from "../pages/home.vue"
import Home2 from "../pages/home2.vue"
const RouteList = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/test',
        component: Home2,
    },
];


const router = new VueRouter({
    mode: 'history',
    routes: RouteList,
});

export default router;
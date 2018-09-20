import Vue from 'vue';
import Router, {RouterMode} from 'vue-router';
import Login from './views/Login.vue';

Vue.use(Router);

let router = {
    mode: 'history' as RouterMode,
    base: process.env.BASE_URL,
    routes: [
        {path: '/', name: 'root', component: Login},
        {
            path: '/login', name: 'login', component: Login, props: {newsletterPopup: false}, children: [
                {path: '', name: 'default', component: Login},
            ],
        },
    ],
};
export default new Router(router);

/*
{
    mode: 'history',
        base: process.env.BASE_URL,
    routes: [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/!* webpackChunkName: "about" *!/ './old/views/About.vue'),
    },
],
}*/

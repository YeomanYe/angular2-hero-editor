import Vue from 'vue';
import Router, {NavigationGuard, Route, RouterMode} from 'vue-router';
import Login from './views/Login.vue';
import Home from './views/Home.vue';
import Dashboard from './views/Dashboard.vue';
import Heroes from './views/Heroes.vue';
import Details from './views/Details.vue';
import store from './store';

Vue.use(Router);

let route = {
    mode: 'history' as RouterMode,
    base: process.env.BASE_URL,
    routes: [
        {path: '/login', name: 'login', component: Login},
        {
            path: '/home',redirect:'/home/dashboard', name: 'home', component: Home, props: {newsletterPopup: false}, children: [
                {path: 'dashboard', name: 'dashboard', component: Dashboard},
                {path: 'heroes', name: 'heroes', component: Heroes},
                {path: 'details/:id', name: 'details', component: Details},
            ],
        },
    ],
};
const router = new Router(route);
const beforeEach:NavigationGuard = (to:Route,from:Route,next)=>{
    console.log('to',to);
    console.log('from',from);
    let redirect:string | undefined;
    if(to.fullPath !== '/login' && (store.state.userInfo.username !== 'admin' || store.state.userInfo.password !== 'admin')) redirect = '/login';
    next(redirect);
};
router.beforeEach(beforeEach);
export default router;

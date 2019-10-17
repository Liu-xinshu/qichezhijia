import Index from '@/views/index/index';
import Home from '@/views/index/home/index';
import Find from '@/views/index/find/index';
import Forum from '@/views/index/forum/index';
import Used from '@/views/index/used/index';
import Login from '@/views/login/index';
import Search from '@/views/search/index';
import My from '@/views/my/index';
const routes = [{
        path: '/index',
        component: Index,
        children: [{
                path: '/index/home',
                component: Home,
                children: []
            },
            {
                path: '/index/find',
                component: Find,
                children: []
            },
            {
                path: '/index/forum',
                component: Forum,
                children: []
            },
            {
                path: '/index/used',
                component: Used,
                children: []
            },

        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/my',
        component: My,
        children: []
    },
    {
        from: '/',
        to: '/index/home'
    }

]


export default routes;
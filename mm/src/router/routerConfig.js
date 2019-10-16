import Index from '@/views/index/index';


const routes = [{
        path: '/',
        component: Index,
        children: []
    },
    {
        from: '/',
        to: '/'
    }

]


export default routes;
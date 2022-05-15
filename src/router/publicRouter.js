
const publicRouter =[
    {
        path: '/login',
        component: () => import('@/views/login/Login'),
        meta: {title: '登录'}
    },
    {
        path: '/404',
        component: () => import('@/views/404'),
        meta: {title: '404页面'}
    },
    { path: '*', redirect: '/404', hidden: true }
]


export default publicRouter
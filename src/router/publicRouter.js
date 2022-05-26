
const publicRouter =[
    {
        path: '/login',
        component: () => import('@/views/login/Login'),
        meta: {title: '登录'}
    },
    {
        path: '/404', // *号匹配的动态跳转页面，要放在动态路由里面，避免动态路由追加到公开路由后，*号匹配在最前面拦截正常请求到404
        component: () => import('@/views/404'),
        meta: {title: '404页面'}
    }
]


export default publicRouter
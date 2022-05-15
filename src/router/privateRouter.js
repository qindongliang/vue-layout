
const privateRouters=[
    {
        path: '/',
        component: () => import('@/components/Main'),
        meta: {title: '整体页面布局', roles: ['dev']},
        redirect: '/dashboard',
        children: [
            {
                path: '/dashboard',
                component:  () => import('@/views/Dashboard'),
                meta: {title: '首页', roles: ['dev', 'admin'] },
                menuInfo:{
                    menuLevel: "top",
                    menuTitle: "首页",
                    menuIcon: "el-icon-s-tools",
                    menuType: "menuItem"
                }

            },
            {
                path: '/test4',
                component:  () => import('@/views/Test4'),
                meta: {title: '主机日志'},
                menuInfo:{
                    menuLevel: "top",
                    menuTitle: "主机日志",
                    menuIcon: "el-icon-aim",
                    menuType: "subMenu"
                }
            },
            {
                path: '/test5',
                component: () => import('@/views/Test5'),
                meta: {title: 'List列表'},
                menuInfo:{
                    menuLevel: "top",
                    menuTitle: "Pod日志",
                    menuIcon: "el-icon-aim",
                    menuType: "subMenu"
                }
            },
            {
                path: '/test6',
                component: () => import('@/views/Test6'),
                meta: {title: 'Tab列表'},
                menuInfo:{
                    menuLevel: "top",
                    menuTitle: "集群日志",
                    menuIcon: "el-icon-aim",
                    menuType: "subMenu"
                }
            },
            {
                path: '/test7',
                component: () => import('@/views/Test7'),
                meta: {title: 'Split面板'},
                menuInfo:{
                    menuLevel: "top",
                    menuTitle: "邮件告警",
                    menuIcon: "el-icon-aim",
                    menuType: "subMenu"
                }
            },
            {
                path: '/test8',
                component: () => import('@/views/test8/Test8'),
                meta: {title: '告警设置'},
                redirect: '/test8/test-8-2',
                menuInfo:{
                    menuLevel: "top",
                    menuTitle: "短信告警",
                    menuIcon: "el-icon-aim",
                    menuType: "subMenu"
                },
                children:[
                    {
                        path: 'test-8-1',
                        component: () => import('@/views/test8/Test-8-1'),
                        meta: {title: '二级菜单1'},
                    },
                    {
                        path: 'test-8-2',
                        component: () => import('@/views/test8/Test-8-2'),
                        meta: {title: '二级菜单2'},
                    }
                ]
            },
            {
                path: '/test1',
                component: () => import('@/views/nav1/Nav1'),
                meta: {title: '业务设置', roles: ['dev','admin']},
                redirect: '/test1/nav-1-1',
                menuInfo:{
                    menuLevel: "top",
                    menuTitle: "业务设置",
                    menuIcon: "el-icon-s-flag",
                    menuType: "menuItem"
                },
                children:[
                    {
                        path: 'nav-1-1',
                        name: 'nav-1-1',
                        component: () => import('@/views/nav1/Nav-1-1'),
                        meta: {title: '注册', roles: ['dev','admin']},
                    },
                    {
                        path: 'nav-1-2',
                        component: () => import('@/views/nav1/Nav-1-2'),
                        meta: {title: '信息'},
                    },
                    {
                        path: 'nav-1-3',
                        component: () => import('@/views/nav1/Nav-1-3'),
                        meta: {title: '进度'},
                    },
                    {
                        path: 'nav-2-1',
                        component: () => import('@/views/nav1/Nav-2-1'),
                        meta: {title: 'redis权限'},
                    },
                    {
                        path: 'nav-2-2',
                        component: () => import('@/views/nav1/Nav-2-2'),
                        meta: {title: '大数据权限'},
                    }
                ]
            },
            {
                path: '/test2',
                component: () => import('@/views/nav2/Nav2'),
                meta: {title: '基础组件管理',roles: ['admin']},
                redirect: '/test2/nav-2-1',
                menuInfo:{
                    menuLevel: "top",
                    menuTitle: "基础组件管理",
                    menuIcon: "el-icon-magic-stick",
                    menuType: "menuItem"
                },
                children:[
                    {
                        path: 'nav-1-1',
                        component: () => import('@/views/nav2/Nav2-1-1'),
                        meta: {title: '二级菜单1',roles: ['admin']},
                    },
                    {
                        path: 'nav-1-2',
                        component: () => import('@/views/nav2/Nav2-1-2'),
                        meta: {title: '二级菜单2'},
                    },
                    {
                        path: 'nav-2-1',
                        component: () => import('@/views/nav2/Nav2-2-1'),
                        meta: {title: '二级菜单4'},
                    },
                    {
                        path: 'nav-2-2',
                        component: () => import('@/views/nav2/Nav2-2-2'),
                        meta: {title: '二级菜单5'},
                    }
                ]
            }
        ]
    },
    { path: '*', redirect: '/404', hidden: true }
]

export default privateRouters
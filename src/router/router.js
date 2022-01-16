import Nav11 from "@/views/nav1/Nav-1-1";
import Nav12 from "@/views/nav1/Nav-1-2";
import Nav13 from "@/views/nav1/Nav-1-3";
import Nav21 from "@/views/nav1/Nav-2-1";
import Nav22 from "@/views/nav1/Nav-2-2";
import Nav211 from "@/views/nav2/Nav2-1-1";
import Nav212 from "@/views/nav2/Nav2-1-2";
import Nav221 from "@/views/nav2/Nav2-2-1";
import Nav222 from "@/views/nav2/Nav2-2-2";
import Dashboard from "@/views/Dashboard";
import Nav1 from "@/views/nav1/Nav1";
import Nav2 from "@/views/nav2/Nav2";
import HelloWorld from "@/components/HelloWorld";
import Test4 from "@/views/Test4";
import Test5 from "@/views/Test5";
import Test6 from "@/views/Test6";
import Test7 from "@/views/Test7";
import Test8 from "@/views/test8/Test8";
import Test81 from "@/views/test8/Test-8-1";
import Test82 from "@/views/test8/Test-8-2";


const routers=[
        {
            path: '/',
            component: HelloWorld,
            meta: {title: '整体页面布局'},
            redirect: '/dashboard',
            children: [
                {
                    path: '/dashboard',
                    component: Dashboard,
                    meta: {title: '首页'}
               },
                {
                    path: '/test4',
                    component: Test4,
                    meta: {title: '布局测试'}
                },
                {
                    path: '/test5',
                    component: Test5,
                    meta: {title: 'List列表'}
                },
                {
                    path: '/test6',
                    component: Test6,
                    meta: {title: 'Tab列表'}
                },
                {
                    path: '/test7',
                    component: Test7,
                    meta: {title: 'Split面板'}
                },
                {
                    path: '/test1',
                    component: Nav1,
                    meta: {title: '一级菜单1'},
                    redirect: '/test1/nav-1-1',
                    children:[
                        {
                            path: 'nav-1-1',
                            component: Nav11,
                            meta: {title: '二级菜单1'},
                        },
                        {
                            path: 'nav-1-2',
                            component: Nav12,
                            meta: {title: '二级菜单2'},
                        },
                        {
                            path: 'nav-1-3',
                            component: Nav13,
                            meta: {title: '二级菜单3'},
                        },
                        {
                            path: 'nav-2-1',
                            component: Nav21,
                            meta: {title: '二级菜单4'},
                        },
                        {
                            path: 'nav-2-2',
                            component: Nav22,
                            meta: {title: '二级菜单5'},
                        }
                    ]
                },
                {
                    path: '/test2',
                    component: Nav2,
                    meta: {title: '一级菜单1'},
                    redirect: '/test2/nav-2-1',
                    children:[
                        {
                            path: 'nav-1-1',
                            component: Nav211,
                            meta: {title: '二级菜单1'},
                        },
                        {
                            path: 'nav-1-2',
                            component: Nav212,
                            meta: {title: '二级菜单2'},
                        },
                        {
                            path: 'nav-2-1',
                            component: Nav221,
                            meta: {title: '二级菜单4'},
                        },
                        {
                            path: 'nav-2-2',
                            component: Nav222,
                            meta: {title: '二级菜单5'},
                        }
                    ]
                },
                {
                    path: '/test8',
                    component: Test8,
                    meta: {title: '告警设置'},
                    redirect: '/test8/test-8-2',
                    children:[
                        {
                            path: 'test-8-1',
                            component: Test81,
                            meta: {title: '二级菜单1'},
                        },
                        {
                            path: 'test-8-2',
                            component: Test82,
                            meta: {title: '二级菜单2'},
                        },


                        ]
                },
            ]
        }
    ]

// default导出的变量只能有一个
// https://blog.csdn.net/harry5508/article/details/84025146
export default routers
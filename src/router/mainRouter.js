import Vue from 'vue'
import Router from 'vue-router'
import PublicRouter from './publicRouter'
import PrivateRouter from './privateRouter'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { Message } from 'element-ui'
import { getKey,getToken } from '@/utils/auth' // get token from cookie
import store from '../store'
import {filterAsyncRoutes} from "@/utils/validate";

NProgress.configure({ showSpinner: false }) // NProgress Configuration

Vue.use(Router)

// fix  Avoided redundant navigation to current location, 菜单上的路由没法判断to和from的path是否重复，所以采用下面的处理
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
    routes: PublicRouter,
    mode: 'history'
})



// console.log(JSON.stringify(accessedRoutes,null,2 ))

// console.log(JSON.stringify(store.state.menu.routes,null ,2))
//     let accessedRoutes = filterAsyncRoutes(PrivateRouter, ['admin'])
//     store.commit('menu/SET_ROUTES', accessedRoutes)
//     accessedRoutes.forEach(item => {
//         router.addRoute(item)
//     })

// console.log(filterRouters)
const whiteList = ['/login'] // no redirect whitelist
var addRouFlag = false
router.beforeEach((to, from, next) => {
    // start progress bar
    NProgress.start()
    let defaultTitle=" layout test"
    // set page title
    if(to.meta.title){
        defaultTitle=to.meta.title
    }
    document.title = defaultTitle

    console.log("from: "+from.path+" to: "+to.path)
    // determine whether the user has logged in
    const hasToken = getToken()

    if (hasToken) {

        if (to.path === '/login') {
            console.log("进login")
            next({ path: '/' })// if is logged in, redirect to the home page
            NProgress.done()
        } else {
            next()
            // 根据用户角色，获取权限，然后放在vuex和cookie里面
            if (!addRouFlag) {
                addRouFlag = true
                let roles = [store.getters["user/getRole"]]
                let accessedRoutes = filterAsyncRoutes(PrivateRouter, roles)
                store.commit('menu/SET_ROUTES', accessedRoutes)
                accessedRoutes.forEach(item => {
                    router.addRoute(item)
                })

                router.push({ path: "/" })
            }
            NProgress.done()
        }

    } else {
        /* has no token*/
        // console.log("333")
        if (whiteList.indexOf(to.path) !== -1) {
            // in the free login whitelist, go directly
            next()
        } else {
            // other pages that do not have permission to access are redirected to the login page.
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})




export default  router
// console.log(router)
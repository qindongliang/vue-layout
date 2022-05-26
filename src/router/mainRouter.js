import Vue from 'vue'
import Router from 'vue-router'
import PublicRouter from './publicRouter'
import PrivateRouter from './privateRouter'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { Message } from 'element-ui'
import { getKey,getToken ,setGoPath } from '@/utils/auth' // get token from cookie
import store from '../store'
import {filterAsyncRoutes} from "@/utils/validate";
import fr from "element-ui/src/locale/lang/fr";

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
let addRouFlag = false

router.beforeEach((to, from, next) => {
    NProgress.start()
    // determine whether the user has logged in
    if (to.path != '/login') {

        const hasToken = getToken()
        if(hasToken){
            next()
            if (!addRouFlag) {
                addRouFlag = true
                let roles = [store.getters["user/getRole"]]
                let accessedRoutes = filterAsyncRoutes(PrivateRouter, roles)
                store.commit('menu/SET_ROUTES', accessedRoutes)
                accessedRoutes.forEach(item => {
                    router.addRoute(item)
                })
                router.push({ path: to.path })
            }
        }else{
            //无token，非登录
            setGoPath(window.location.href)
            next({ path: '/login' })
            NProgress.done()
        }


    }else{
        next()
    }



})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})




export default  router
// console.log(router)
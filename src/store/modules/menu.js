import constantRoutes from '@/router/publicRouter'
import {filterAsyncRoutes} from "@/utils/validate";
import PrivateRouter from "@/router/privateRouter";
import {getKey} from "@/utils/auth";

const state = {
    routes: [],
    addRoutes: []
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes
        // 这里,state.routes由原先的静态路由变为了静态路由+异步路由
        state.routes = constantRoutes.concat(routes)
    },


}

const getters = {
    getAvatar: (state, commit, rootState) => {

    },
    getName: state => {
        if (state.name) {
            return state.name
        } else {
            return getKey("name")
        }
    }
}


const actions = {
    generateRoutes({ commit, state }, roles) {
        let currentUserRoles = roles
        let accessedRoutes = filterAsyncRoutes(PrivateRouter, currentUserRoles)
        commit('SET_ROUTES', accessedRoutes)
        return accessedRoutes
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
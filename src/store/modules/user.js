import { login, logout, getInfo } from '@/api/user'
import {getToken, setToken, setKeyValue, removeToken, getKey, removeKey} from '@/utils/auth'
import ro from "element-ui/src/locale/lang/ro";
// import { resetRouter } from '@/router'

const state =  () => ({
  token: getToken(),
  name: '',
  role: '',
  avatar: ''
})


const getters = {
  getAvatar: (state, getters, rootState) => {
    if (state.avatar) {
      return state.avatar
    } else {
      return getKey("avatar")
    }
  },
  getName: state => {
    if (state.name) {
      return state.name
    } else {
      return getKey("name")
    }
  },
  getRole: state => {
    if (state.role) {
      return state.role
    } else {
      return getKey("role")
    }
  }
}


const actions = {
  // user login
  login({ commit, state }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {

      commit('SET_TOKEN', 'i_am_token')
      commit('SET_NAME',"admin")
      commit('SET_ROLE',"admin")
      resolve()
      // login({ username: username.trim(), password: password }).then(response => {
      //   const { data } = response
      //   commit('SET_TOKEN', data.token)
      //   setToken(data.token)
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })


    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          return reject('Verification failed, please Login again.')
        }

        const { name, avatar } = data

        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      // logout(state.token).then(() => {
        // removeToken() // must remove  token  first
        // resetRouter()
        commit('REMOVE_INFO')
        resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
    setToken(token)
  },
  SET_NAME: (state, name) => {
    state.name = name
    setKeyValue("name", name)
  },
  SET_ROLE: (state, role) => {
    state.role = role
    setKeyValue("role", role)
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
    setKeyValue("avatar", avatar)
  },
  REMOVE_INFO: (state, avatar) => {
    removeToken()
    removeKey("name")
    removeKey("role")
  },
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations

}


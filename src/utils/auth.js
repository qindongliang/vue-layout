import Cookies from 'js-cookie'

const TokenKey = 'token'
const GO_PATH= "GO_PATH"
export function getToken() {
  return Cookies.get(TokenKey)
}

export const setGoPath = (goPath) => {
  Cookies.set(GO_PATH, goPath)
}
export const clearAllCookie = (goPath) => {
  removeGoPath()
  removeToken()

}

export function getGoPath() {
  return Cookies.get(GO_PATH)
}

export function removeGoPath() {
  return Cookies.remove(GO_PATH)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function setKeyValue(key, value) {
  return Cookies.set(key, value)
}

export function setKeyValueTTL(key, value, ttl) {
  return Cookies.set(key, value, { expires: ttl })
}

export function getKey(key) {
  return Cookies.get(key)
}

export function removeKey(key) {
  return Cookies.remove(key)
}

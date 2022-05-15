
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}


//判断当前角色是否有访问权限
export  function hasPermission(roles, route) {
  // admin 用户开放所有访问
  if(roles.indexOf("admin")>-1){
    return true
  }
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return false
  }
}
// 递归过滤路由表，筛选角色权限路由
export function filterAsyncRoutes(routes, roles) {
  const res = [];
  routes.forEach(route => {
    const tmp = { ...route }
    // let jsonTmp = JSON.stringify(tmp, null ,2)
    let access = hasPermission(roles, tmp)
    if (access)  {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}
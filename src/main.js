import Vue from 'vue'
import App from './App.vue'
import 'view-design/dist/styles/iview.css';
import ViewUI from 'view-design'
import VueRouter from 'vue-router';
import Routers from './router/router';
Vue.use(VueRouter);
Vue.use(ViewUI);

Vue.config.productionTip = false


// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: Routers
};
const router = new VueRouter(RouterConfig);

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import 'view-design/dist/styles/iview.css';
// import ViewUI from 'view-design'
import VueRouter from 'vue-router';
import Routers from './router/mainRouter';
import store from './store'
Vue.use(VueRouter);
Vue.use(ElementUI);

Vue.config.productionTip = false



new Vue({
  router: Routers,
  store,
  render: h => h(App),
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import{Button} from 'mint-ui'
import 'lib-flexible/flexible'
import './mock/mockServer'//加载mocksever即可
Vue.config.productionTip = false
//注册全局组件
Vue.component(Button.name,Button)//<mt-button></mt-button>

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
 render:h => h(App)
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false

/*引入图标字体文件*/
import './config/iconfont.js'
import './config/rem.js'
import './config/reset.css'

if (module.hot) {
  module.hot.accept();
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

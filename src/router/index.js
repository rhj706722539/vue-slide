import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/list'
import Page from '@/components/page'

Router.prototype.goBack = function (i) {
  this.isBack = true
  if (Math.abs(i) > 0) {
    for (var a = 0; a < Math.abs(i); a++) {
      this.go(-1)
    }
  } else {
    this.go(-1)
  }
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/page',
      name: 'Page',
      component: Page
    },
  ]
})

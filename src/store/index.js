import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutation'
import actions from './action'

Vue.use(Vuex)

const state = {
    position:''
}
export default new Vuex.Store({
    state,
    mutations,
    actions
})
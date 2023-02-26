import {createStore} from '../vuex/index.js'
// import {createStore} from "vuex";


import state from './state.js'
import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'

export const store = createStore({
    state,
    mutations,
    getters,
    actions
});
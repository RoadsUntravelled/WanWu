import Vue from 'vue'
import Vuex from 'vuex'
import types from './mutation_types.js'
import account from './modules/account'

Vue.use(Vuex)
/* eslint-disable */
// eslint-disable-next-line
const rootState={
	modal:{
		mode:'login',
		visible:false
	}
}

const rootGetters={
	'modal'(state){
		return state.modal
	}
}

const rootMutations={
	[types.CHANGE_MODAL](state,{mode,visible}){
		if(mode!==undefined){
			state.modal.mode=mode
		}
		if(visible!==undefined){
			state.modal.visible=visible
		}
	}
}

const rootActions={
	changeModal({commit},payload){
		commit(types.CHANGE_MODAL,payload)
	}
}
export default new Vuex.Store({
	modules:{
		account
	},
	state:rootState,
	getters:rootGetters,
	mutations:rootMutations,
	actions:rootActions
})
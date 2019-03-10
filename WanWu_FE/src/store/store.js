import Vue from 'vue'
import Vuex from 'vuex'store.js
import types from './mutation_types.js'

Vue.use(Vuex)

const rootState={
	modalType:{
		mode:'login',
		visible:false
	}
}

const rootGetters={
	modalType(state){
		return state.modalType
	}
}

const rootMutations={
	[types.CHANGE_MODAL](state,{mode,visible}){
		if(mode!==undefined){
			state.modalType.mode=mode
		}
		if(visible!==undefined){
			state.modalType.visible=visible
		}
	}
}

const rootActions={
	changeModal({commit},payload){
		commit(types.CHANGE_MODAL,payload)
	}
}

export default new Vuex.Store({
	state:rootState,
	getters:rootGetters,
	mutations:rootMutations,
	actions:rootActions
})
import types from '../mutation_types.js'
import api from '@main/api'
import storage from '@/utils/storage'
import {ACCOUNT_KEY} from '@/utils/storage_key'
/* eslint-disable */
// eslint-disable-next-line
const state={
	profile:{}
}

const getters={
	user:state=>state.profile.user||{},
	profile:state=>state.profile,
	isAuthenticated:(state,getters)=>{
		return !!getters.profile.id
	},
}


const mutations={
	[types.SET_USER_PROFILE](state,{profile}){
		state.profile=profile
		storage.set(ACCOUNT_KEY.AUTHED,!!profile.user)
	}
}

const actions={
	getProfile({commit}){
		api.getUserProfile().then(res=>{
			console.log(res)
			commit(types.SET_USER_PROFILE,{
				profile:res.data.data||{}
			})
		})
	},
	clearProfile({commit}){
		commit(types.SET_USER_PROFILE,{
			profile:{}
		})
		storage.clear()
		console.log('ddd')
	}
}


export default{
	state,
	getters,
	actions,
	mutations
}
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
		return !!getters.user.id
	},
}


const mutations={
	[types.SET_USER_PROFILE](state,{profile}){
		state.profile=profile
		storage.set(ACCOUNT_KEY.AUTHED,!!profile.user)
	}
}

const actions={
	getProfile({commit},user_id=undefined){
		api.getUserProfile(user_id).then(res=>{
			commit(type.SET_USER_PROFILE,{
				profile:res.data.datat||{}
			})
		})
	},
	clearProfile({commit}){
		commit(types.SET_USER_PROFILE,{
			profile:{}
		})
		storage.clear()
	}
}


export default{
	state,
	getters,
	actions,
	mutations
}
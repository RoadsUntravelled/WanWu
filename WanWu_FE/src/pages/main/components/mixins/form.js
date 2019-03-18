/* eslint-disable */
// eslint-disable-next-line 
import api from '@main/api'


export default {
	data(){
		return {
			captchaSrc:''
		}
	},
	methods:{
		validateForm(name){
			return new Promise((resolve,reject)=>{
				this.$refs[name].validate(valid=>{
					if(!valid){
						reject(valid)
					}else{
						resolve(valid)
					}
				})
			})
		},
		getCaptchaSrc(){
			api.getCaptcha().then(res=>{
				this.captchaSrc = res.data.data
			})
		}
	}
}
/* eslint-disable */
// eslint-disable-next-line 
export default {
	methods:{
		validateForm(name){
			return new Promise((resolve,reject)=>{
				this.$refs[name].validate(valid=>{
					if(!valid){
						this.$error('请修改错误的输入!')
					}else{
						resolve(valid)
					}
				})
			})
		}
	}
}
/* eslint-disable */
// eslint-disable-next-line
import {mapActions}from 'vuex'
export default{
	methods:{
		...mapActions(['changeModal']),
		switchModal(mode){
			this.changeModal({
				mode,
				visible:true
			})
		}
	}
}
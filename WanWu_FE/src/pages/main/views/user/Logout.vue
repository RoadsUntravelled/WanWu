<template>
 <div>
 </div>
</template>

<script>
/* eslint-disable */
// eslint-disable-next-line
import api from '../../api.js'
import {mapActions} from 'vuex'

export default {
	methods:{
		...mapActions(['clearProfile'])
	},
    mounted () {
      api.logout().then(res => {
        this.clearProfile()
        this.$router.replace({
          path: '/'
        })
      })
    }	
}

</script>

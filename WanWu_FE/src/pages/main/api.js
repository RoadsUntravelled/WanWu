import Vue from 'vue'
import axios from 'axios'
// eslint-disable-next-line
/* eslint-disable */
Vue.prototype.$http = axios
axios.defaults.baseURL = 'api'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'
export default {
  	register(data){
<<<<<<< HEAD
    	return ajax('register/', 'POST',{data})
=======
    	return ajax('register/', 'POST',{data:data})
>>>>>>> 3d07404caf613b9c12bd201f9f45d433995565ae
    },
    checkUserExist(username,email){
      return ajax('checkUserExist/','POST',{data:{username,email}})
    },
<<<<<<< HEAD
    login(data){
      return ajax('login/','POST',{data})
    },
=======
>>>>>>> 3d07404caf613b9c12bd201f9f45d433995565ae
    Test(){
      return ajax('test/','GET',{params:{user:'sssddd'}})
    }
}

function ajax(url,method,options){
  if(options!==undefined){
     var {params={},data={}}=options
  }
  else{
    data,params={}
  }
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      params,
      data
    }).then(obj => {
      if(obj.data.error!==null){
        Vue.prototype.$error(res.data.data)
        reject(obj)
      }else{
        resolve(obj)
      }
    }).catch(obj => {
<<<<<<< HEAD
      Vue.prototype.$error(obj.data.data)
    	reject(obj)
=======
    	reject(obj)
    	Vue.prototype.$error(obj.data.data)
>>>>>>> 3d07404caf613b9c12bd201f9f45d433995565ae
    })
  })
}	
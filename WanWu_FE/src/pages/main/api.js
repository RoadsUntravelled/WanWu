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
    	return ajax('register/', 'POST',{data:data})
    },
    checkUserExist(username,email){
      return ajax('checkUserExist/','POST',{data:{username,email}})
    },
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
        Vue.prototype.$error(res.data.error)
        reject(obj)
        resolve(obj)
      }else{
        resolve(obj)
      }
    }, obj => {
    	reject(obj)
    	Vue.prototype.$error(obj.data.error)
    })
  })
}	
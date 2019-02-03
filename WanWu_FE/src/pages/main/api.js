import Vue from 'vue'
import axios from 'axios'
// eslint-disable-next-line
/* eslint-disable */
Vue.prototype.$http = axios
axios.defaults.baseURL = 'api'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'
export default {
  	register (data) {
    	return ajax('register/', 'POST',data)
    }
}

function ajax(url,method,options){
  if(options!==undefined){
     data,params=options
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
    }).then(res => {
        resolve(res)
    }, res => {
    	reject(res)
    	Vue.prototype.$error(res.data.data)
    })
  })
}	
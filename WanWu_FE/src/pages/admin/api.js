import Vue from 'vue'
import axios from 'axios'
// eslint-disable-next-line
/* eslint-disable */
Vue.prototype.$http = axios
axios.defaults.baseURL = 'api'
axios.defaults.xsrfHeaderName = 'X-Xsrftoken'
axios.defaults.xsrfCookieName = '_xsrf'
export default {
  	getWebsiteConf (params) {
    	return ajax('test', 'GET')
    }
}

function ajax(url,method){
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
    }).then(res => {
    	console.log("success")
    }, res => {
    	console.log("sadad")
    })
  })
}	

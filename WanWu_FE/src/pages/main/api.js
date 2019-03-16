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
    	return ajax('register/', 'POST',{data})
    },
    checkUserExist(username,email){
      return ajax('checkUserExist/','POST',{data:{username,email}})
    },
    login(data){
      return ajax('login/','POST',{data})
    },
    logout(){
      return ajax('logout/','GET')
    },
    getUserProfile(user_id=undefined){
      return ajax('profile/','GET',{
        params:{
          user_id
        }
      })
    },
    profile(){
      return ajax('profile/','GET',{params:{user:'sssddd'}})
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
    }).then(res => {
      if(res.data.error!==null){
        Vue.prototype.$error(res.data.data)
        reject(res)
      }else{
        resolve(res)
      }
    }).catch(res => {
      Vue.prototype.$error(res.data.data)
    	reject(obj)
    })
  })
}	
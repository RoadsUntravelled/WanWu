import Logout from './user/Logout.vue'

const Main = () => import(/* webpackChunkName:"Main" */'@main/views/Main.vue')

export {
  Main, Logout
}

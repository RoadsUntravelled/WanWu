import {
  Main,
  Logout
} from '../views'

export default [
  {
    name: 'main',
    path: '/',
    meta: {title: 'Main'},
    component: Main
  },
  {
    name: 'logout',
    path: '/logout',
    meta: {title: 'Logout'},
    component: Logout
  }
]

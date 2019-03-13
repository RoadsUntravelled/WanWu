<template>
  <div id="app">
    <!--img src="./assets/logo.png"-->
  <el-container>
  <el-header>
      <NavBar></NavBar>
  </el-header>
  <el-aside>
  </el-aside>
  <el-main>
  </el-main>
  <el-footer>
  </el-footer>
</el-container>
  <router-view/>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import NavBar from '@main/components/NavBar.vue'
export default {
  name: 'App',
  components:{
    NavBar
  },
  methods: {
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.logo {
  width:20;
  height:20;
  margin-left: 0.3cm;
  font-family:Georgia,Serif;
}
</style>

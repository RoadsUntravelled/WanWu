<template>
  <div id="app">
    <!--img src="./assets/logo.png"-->
  <el-container>
  <el-header>
    <el-row>
      <el-col :span="24">
        <el-menu mode="horizontal" text-color="black">
            <el-menu-item index="1">
                <img width="50" height="50" src="../../assets/headicon.png">
                <img width="50" height="50" style="margin-top:0.5cm;" src="../../assets/wanwu.png">
            </el-menu-item>
            <el-menu-item index="2">处理中心</el-menu-item>
            <el-menu-item index="3" @click="test">test</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
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
import api from '@main/api'
export default {
  name: 'App',
  methods: {
    test () {
      api.register()
      console.log("sda")
      }
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

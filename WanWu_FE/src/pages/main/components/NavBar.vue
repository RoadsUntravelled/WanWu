<template>
  <div>
    <el-menu mode="horizontal" text-color="black" @select="directToRoute">
        <el-menu-item index="main">
            <img width="98" height="50" src="../../../assets/icon.png">
        </el-menu-item>
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="3" @click="test">test</el-menu-item>
        <el-menu-item index="4" class="avatar"><div class="demo-avatar" @click="modal=true"><Avatar icon="ios-person" size="large" /></div></el-menu-item>
    </el-menu>
    <Modal v-model="modalVisible" width="400">
      -<div slot="header" style="text-align:left">
-          <img src="../../../assets/icon.png"  height="50" width="98">
-      </div>
        <div style="text-align:center">
          <login>
          </login>
        </div>
    </Modal>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import {mapGetters,mapActions}from 'vuex'
import api from '@main/api'
import login from '@main/components/Modal/Login'
export default {
  components:{
    login,
  },
  methods: {
    ...mapActions(['changeModal']),
    test () {
      api.Test()
      },
    directToRoute(route){
      this.$router.push({name:route})
    },
    register(){

    }
  },
  computed:{
    ...mapGetters(['modal']),
    modalVisible: {
      get () {
        return this.modalStatus.visible
      },
      set (value) {
        this.changeModalStatus({visible: value})
      }
    }
  }
}
</script>
<style>
.avatar{
  float: right!important;
  margin-right:50px!important;
}
.ivu-modal-footer {
    display: none!important;
}
</style>
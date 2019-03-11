<template>
  <div>
    <el-menu mode="horizontal" text-color="black" @select="directToRoute">
        <el-menu-item index="main">
            <img width="98" height="50" src="../../../assets/icon.png">
        </el-menu-item>
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="3" @click="test">test</el-menu-item>
        <el-menu-item index="4" class="avatar">
          <Poptip trigger="hover" placement="bottom-end">
            <div class="demo-avatar" @click="switchModal('login')"><Avatar icon="ios-person" size="large" /></div>
            <div slot="content" style="cursor:default;text-align:center;">
              <span class="fontset">登录以获得更多功能</span></br></br>
              <el-button round @click="switchModal('login')">注册/登录</el-button>
            </div>
          </Poptip>
        </el-menu-item>
    </el-menu>
    <Modal v-model="modalVisible" width="400">
      -<div slot="header" style="text-align:left">
-          <img src="../../../assets/icon.png"  height="50" width="98">
-      </div>
        <div style="text-align:center">
          <component :is="modal.mode" v-if="modalVisible"></component>
        </div>
    </Modal>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import {mapGetters}from 'vuex'
import api from '@main/api'
import {ModalMixin} from './mixins'
import login from '@main/components/Modal/Login'
import register from '@main/components/Modal/Register'
export default {
  mixins:[ModalMixin],
  components:{
    login,
    register
  },
  data(){
    return {

    }
  },
  methods: {
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
        return this.modal.visible
      },
      set (value) {
        this.changeModal({visible: value})
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
.fontset{
  font-size: 16px;
  font-weight: bold;
  color:#9ea7b4;
}
</style>
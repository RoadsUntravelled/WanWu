<template>
  <div>
    <el-menu mode="horizontal" text-color="black">
        <el-menu-item index="main">
            <img width="98" height="50" src="../../../assets/icon.png">
        </el-menu-item>
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="3" @click="test">test</el-menu-item>
        <el-menu-item index="4" class="avatar">
          <template v-if="!isAuthenticated">
            <Poptip trigger="hover" placement="bottom-end">
              <div class="demo-avatar" @click="switchModal('login')"><Avatar icon="ios-person" size="large" /></div>
              <div slot="content" style="cursor:default;text-align:center;">
                <span class="fontset">登录以获得更多功能</span></br></br>
                <el-button round @click="switchModal('login')">注册/登录</el-button>
              </div>
            </Poptip>
          </template>
          <template v-else>
            <Poptip trigger="hover" placement="bottom-end">
              <div class="demo-avatar"><Avatar size="large"><img width="140px" height="140px" src="../../../assets/icon.png"></Avatar></div>
              <div slot="content" @click="logout" style="cursor:default;text-align:center;">
                <div style="cursor:pointer;text-align:center;" name="/logout"><Icon size="40" type="ios-exit-outline" />登出</div>
              </div>
            </Poptip>
          </template>
        </el-menu-item>
    </el-menu>
    <Modal v-model="modalVisible" width="350">
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
    logout(){
      this.$router.push({name:'logout'})
    },
    test () {
      api.profile()
      },
    register(){

    }
  },
  computed:{
    ...mapGetters(['modal','isAuthenticated']),
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
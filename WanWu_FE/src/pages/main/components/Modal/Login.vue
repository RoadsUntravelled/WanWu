<template>
    <div>
        <Form ref="loginForm" :model="loginData" :rules="ruleLogin">
            <FormItem prop="username">
                <div class="form-item-container">
                    <div class="input-container">
                        <Input class=" normal-size" @on-enter="loginFuc" v-model="loginData.username" size="large" placeholder="请输入用户名/邮箱">
                            <Icon type="ios-contact" size="40" slot="prefix"/>
                        </Input>
                    </div>
                </div>
            </FormItem>
            <FormItem prop="password">
                <div class="form-item-container">
                    <div class="input-container">
                        <Input class="normal-size" @on-enter="loginFuc" v-model="loginData.password" type="password" size="large" placeholder="密码">
                            <Icon type="ios-lock" size="40" slot="prefix"/>
                        </Input>
                    </div>
                </div>
            </FormItem>
            <FormItem prop="captcha">
                <div class="form-item-container">
                    <div class="input-container">
                        <Input class="captcha-size" v-model="loginData.captcha" placeholder="验证码" size="large" @on-enter="loginFuc">
                            <Icon type="ios-bulb" size="40" slot="prefix"/>
                        </Input>
                    </div>
                    <div class="captcha-img">
                        <Tooltip content="刷新验证码" placement="top">
                            <img :src="captchaSrc" @click="getCaptchaSrc" height="40" width="100" />
                        </Tooltip>
                    </div>
                </div>
            </FormItem>
        </Form>
        <el-button round :loading="btnloading" @click="loginFuc">登录</el-button></br></br>
        <a @click.stop="switchModal('register')">还没有账号?点击这里注册</a>
    </div>
</template>
<script>
/* eslint-disable */
// eslint-disable-next-line 
import {FormMixin, ModalMixin} from '../mixins'
import RegEx from '@/utils/RegEx'
import api from '@main/api'
import {mapGetters,mapActions}from 'vuex'
export default {
	mixins:[FormMixin, ModalMixin],
	mounted() {
		this.getCaptchaSrc()
	},
	data(){
		return{
			btnloading:false,
			loginData:{
				username:'',
				password:'',
				captcha:''
			},
			ruleLogin:{
				username:[
					{required:true,message:'用户名输入不能为空!',trigger:'blur'},
					{type:'string',min:6,max:50,message:'用户名长度为6-50位无空格字符!',pattern:RegEx.InputDataRegEx,trigger:'blur'}
				],
				password:[
					{required:true,message:'密码输入不能为空!',trigger:'blur'},
					{type:'string',min:6,max:50,message:'密码为6-50位无空格字符!',pattern:RegEx.InputDataRegEx,trigger:'blur'}
				],
				captcha:[
					{required:true,message:'请输入验证码!',trigger:'blur'},
					{type:'string',min:4,max:4,message:'验证码格式错误!',pattern:RegEx.InputDataRegEx,trigger:'blur'}
				]
			}
		}
	},
	methods:{
		...mapActions(['getProfile']),
		loginFuc(){
			this.validateForm('loginForm').then(valid=>{
				this.btnloading=true
				let formData={...this.loginData}
				api.login(formData).then(res=>{
					this.btnloading=false
					this.changeModal({visible:false})
					this.getProfile()
				}).catch(_=>{
					this.getCaptchaSrc()
					this.btnloading=false
					this.loginData.captcha=''
				})
			}).catch(_=>{
					this.getCaptchaSrc()
					this.btnloading=false
					this.loginData.captcha=''
			})
		}
	},
	computed:{
	...mapGetters(['modal',"isAuthenticated"]),
	}	
}
</script>

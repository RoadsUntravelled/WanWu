<template>
    <div>
    <Form ref="registerForm" :model="registerData" :rules="ruleRegister">
        <FormItem prop="username">
        <Input v-model="registerData.username" size="large" placeholder="用户名">
            <Icon type="ios-contact" size="40" slot="prefix"/>
        </Input>
        </FormItem>
        <FormItem prop="email">
        <Input v-model="registerData.email" size="large" placeholder="电子邮箱">
            <Icon type="ios-mail" size="40" slot="prefix"/>
        </Input>
        </FormItem>
        <FormItem prop="password">
        <Input v-model="registerData.password" type="password" size="large" placeholder="密码">
            <Icon type="ios-lock" size="40" slot="prefix"/>
        </Input>
        </FormItem>
        <FormItem prop="confirm_pwd">
        <Input v-model="registerData.confirm_pwd" type="password" size="large" placeholder="请确认密码">
            <Icon type="ios-lock" size="40" slot="prefix"/>
        </Input>
        </FormItem>
        </Form>
        <el-button round :loading="btnloading" @click="Register">注册</el-button></br></br>
        <a href="#">已经有账号?点击这里登录</a>
        </div>
</template>
<script>
/* eslint-disable */
// eslint-disable-next-line 
import {FormMixin} from '../mixins'
export default {
    mixins:[FormMixin],
	data(){
        const ChangePassword = (rule,value,callback)=>{
            if (value !== ''&&this.registerData.confirm_pwd!=='') {
          // 对第二个密码框再次验证
            this.$refs.registerForm.validateField('confirm_pwd')
            }
            callback()
        }
		const CheckPassword = (rule, value, callback) => {
        if (value!== this.registerData.password) {
          callback(new Error('两次输入密码不一致!'))
         }
        callback()
        }
		return{
            btnloading:false,
			registerData:{
				username:'',
				email:'',
				password:'',
				confirm_pwd:''
			},
			ruleRegister:{
				username:[
                    {required:true,message:'用户名输入不能为空!',trigger:'blur'},
                    {type:'string',min:6,max:50,message:'用户名长度为6-50位无空格字符!',pattern:'^[^ ]+$',trigger:'blur'}
				],
				email:[
					{required:true,message:'邮箱输入不能为空!',trigger:'blur'},
					{type:'email',message:'请输入正确格式的邮箱!',trigger:'blur'}
				],
				password:[
					{required:true,message:'密码不能为空!',trigger:'blur'},
					{type:'string',min:6,max:50,message:'密码为6-50位无空格字符!',pattern:'^[^ ]+$',trigger:'blur'},
                    {validator:ChangePassword,trigger:'change'}
				],
                confirm_pwd:[
                    {required:true,message:'请再次输入密码!',trigger:'blur'},
                    {validator:CheckPassword,trigger:'change'}
                ]
			}
		}
	},
	methods:{
        Register(){
           this.validateForm('registerForm').then(valid=>{
                this.btnloading = true
           })
        }
	}	
}
</script>
<style>
input{
    border:none!important;
    border-bottom: 1px solid grey!important;
    outline:none!important;
    width:250px!important;
    margin-bottom:15px!important;
}
input:focus,input:hover{
	box-shadow:0 1px #57a3f3!important;  
	outline:none!important;
	border-color:none!important;
}
</style>
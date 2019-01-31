<template>
    <div>
        <Input v-model="registerData.username" size="large" placeholder="用户名">
            <Icon type="ios-contact" size="40" slot="prefix"/>
        </Input>
        <Input v-model="registerData.email" size="large" placeholder="电子邮箱">
            <Icon type="ios-mail" size="40" slot="prefix"/>
        </Input>
        <Input v-model="registerData.password" type="password" size="large" placeholder="密码">
            <Icon type="ios-lock" size="40" slot="prefix"/>
        </Input>
        <Input v-model="registerData.confirm_pwd" type="password" size="large" placeholder="请确认密码">
            <Icon type="ios-lock" size="40" slot="prefix"/>
        </Input>
        <el-button round>注册</el-button></br></br>
        <a href="#" style="margin-right:100%;margin-top;">已经有账号?点击登录</a>
     </div>
</template>
<script>
/* eslint-disable */
// eslint-disable-next-line 
export default {
	data(){
		return{
			registerData:{
				username:'',
				email:'',
				password:'',
				confirm_pwd:''
			}
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
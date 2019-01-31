<template>
    <div>
        <Input v-model="loginData.username" size="large" placeholder="请输入用户名/邮箱">
            <Icon type="ios-contact" size="40" slot="prefix"/>
        </Input>
        <Input v-model="loginData.password" type="password" size="large" placeholder="请输入密码">
            <Icon type="ios-lock" size="40" slot="prefix"/>
        </Input>
    </div>
</template>
<script>
/* eslint-disable */
// eslint-disable-next-line 
export default {
	data(){
		return{
			loginData:{
				username:'',
				password:''
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
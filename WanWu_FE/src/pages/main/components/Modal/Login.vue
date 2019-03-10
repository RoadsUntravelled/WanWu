<template>
    <div>
        <Form ref="loginForm" :model="loginData" :rules="ruleLogin">
            <FormItem prop="username">
                <Input v-model="loginData.username" size="large" placeholder="请输入用户名/邮箱">
                    <Icon type="ios-contact" size="40" slot="prefix"/>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input v-model="loginData.password" type="password" size="large" placeholder="密码">
                    <Icon type="ios-lock" size="40" slot="prefix"/>
                </Input>
            </FormItem>
        </Form>
        <el-button round :loading="btnloading">登录</el-button></br></br>
        <a href="#">还没有账号?点击这里注册</a>
    </div>
</template>
<script>
/* eslint-disable */
// eslint-disable-next-line 
export default {
	data(){
		return{
			btnloading:false,
			loginData:{
				username:'',
				password:''
			},
            ruleLogin:{
                username:[
                    {required:true,message:'用户名输入不能为空!',trigger:'blur'},
                    {type:'string',min:6,max:50,message:'用户名长度为6-50位无空格字符!',pattern:RegEx.InputDataRegEx,trigger:'blur'}
                ],
                password:[
                    {required:true,message:'密码不能为空!',trigger:'blur'},
                    {type:'string',min:6,max:50,message:'密码为6-50位无空格字符!',pattern:RegEx.InputDataRegEx,trigger:'blur'}
                ]
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
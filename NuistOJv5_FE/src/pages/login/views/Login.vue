<template>
    <div class="container">
        <form id="form_login" class="form-login" role="form" action="" method="post">
            <h1><strong>TSOJ</strong></h1>
            <h3 class="form-signin-heading">Please login!</h3>
            <IconInput bind_id="bind-username" icon_class="fa fa-user">
              <label for="username" class="sr-only">Username</label>
              <input v-model="formLogin.username" type="text" name="username" id="form-username" class="form-control" placeholder="Username..."
              required aria-label="Username" aria-describedby="bind-username" autofocus>
            </IconInput>
            <IconInput bind_id="bind-password" icon_class="fa fa-lock">
              <label for="inputPassword" class="sr-only">Password</label>
              <input v-model="formLogin.password" type="password" name="password" id="form-password" class="form-control" placeholder="Password..." required aria-label="Password" aria-describedby="bind-password">
            </IconInput>
            <IconInput bind_id="bind-veriycode" icon_class="fa fa-lightbulb-o">
                <div>
                  <input v-model="formLogin.verifyCode" type="text" class="form-control" aria-label="VeryCode" aria-describedby="bind-veriycode" id="verifyCode" name="verifyCode" placeholder="四位字符验证码" autocomplete="off">
                </div>
                <div>
                  <label for="verifyCode">
                    <img id="verify" style="width:50px;height:40px;" src="../../../assets/logo.png">
                  </label>
                </div>
            </IconInput>
            <button id="btn_login" class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </form>
      <div style="text-align:center;">
          <router-link to="#" >竞赛登录</router-link>
      </div>
      <div style="text-align:center;">
          <router-link to="#" >下载中心</router-link>
      </div>
    </div>
</template>

<script>
/* eslint-disable */
import IconInput from "@login/components/IconInput"
export default {
  name: 'Login',
  components: {IconInput},
  data () {
    return {
      formLogin: {
        username: '',
        password: '',
        verifyCode: ''
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
        .captcha {
            border-radius: 2px;
            cursor: pointer;
            position: absolute;
            z-index: 3;
            left: 0;
            top: 0;
        }

        .verifyCodes {
            padding-left: 0px;
        }
</style>

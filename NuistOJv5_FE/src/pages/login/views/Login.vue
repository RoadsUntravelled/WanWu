<template>
    <div class="container">
        <form id="form_login" class="form-login" role="form" action="" method="post">
            <h1><strong>TSOJ</strong></h1>
            <h3 class="form-signin-heading">Please login!</h3>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text span-icon" id="bind-username"><i class="fa fa-user" aria-hidden="true"></i></span>
              </div>
              <label for="username" class="sr-only">Username</label>
              <input type="text" name="username" id="form-username" class="form-control" placeholder="Username..."
              required aria-label="Username" aria-describedby="bind-username" autofocus>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text span-icon" id="bind-password"><i class="fa fa-lock" aria-hidden="true"></i></span>
              </div>
              <label for="inputPassword" class="sr-only">Password</label>
              <input type="password" name="password" id="form-password" class="form-control" placeholder="Password..." required aria-label="Password" aria-describedby="bind-password">
            </div>
                <div class="input-group mb-3"  style="margin-bottom:10px">
                   <div class="input-group-prepend">
                      <span class="input-group-text span-icon" id="bind-veriycode"><i class="fa fa-lightbulb-o" aria-hidden="true"></i></span>
                   </div>
                    <div>
                        <input type="text" class="form-control" aria-label="VeryCode" aria-describedby="bind-veriycode" id="verifyCode" name="verifyCode" placeholder="四位字符验证码" autocomplete="off">
                    </div>
                    <div>
                        <label for="verifyCode">
                             <img id="verify" style="width:50px;height:40px;" src="../../../assets/logo.png">
                        </label>
                    </div>
                </div>
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
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
        .span-icon{
          height: 46px;
          width: 46px;
          display: inline-block;
        }
</style>

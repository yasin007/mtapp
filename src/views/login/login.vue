<template>
  <div class="page-login">
    <div class="login-header">
      <a
        href="/rere"
        class="logo"/>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网">
      </div>
      <div class="form">
        <p><span>账号登录</span></p>
        <el-input
          v-model="username"
          maxlength="11"
          placeholder="请输入手机号"/>
        <el-input
          v-model="password"
          placeholder="请输入密码"
          type="password"/>
        <div class="foot">
          <el-checkbox v-model="checked">7天内自动登录</el-checkbox>
          <b>忘记密码？</b>
        </div>
        <el-button
          class="btn-login"
          type="success"
          size="mini"
          @click="login">登录
        </el-button>
        <span>
          <label>还没有账号?</label>
          <router-link class="toRegister" to="/users/register">免费注册</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import {login} from '../../api/api'
  import cookie from '../../static/js/cookie'

  export default {
    data: () => {
      return {
        checked: true,
        username: '',
        password: ''
      }
    },
    methods: {
      toRegister: function () {
        this.$router.push({name: 'register'})
      },
      login: function () {
        let self = this
        login({
          username: self.username,
          password: self.password
        }).then((response) => {
          cookie.setCookie('name', this.username, 7)
          cookie.setCookie('token', response.data.token, 7)
          self.$store.dispatch('setInfo')
          //跳转到首页页面
          self.$router.push({name: 'home'})
        }).catch(function (error) {
          if ('non_field_errors' in error) {
            self.$message({
              showClose: true,
              message: error.non_field_errors[0],
              type: 'error'
            })
          }
          if ('username' in error) {
            self.$message({
              showClose: true,
              message: error.username[0],
              type: 'error'
            })
          }
          if ('password' in error) {
            self.$message({
              showClose: true,
              message: error.password[0],
              type: 'error'
            })
          }
        })
      }
    }
  }
</script>
<style lang="scss">
  .page-login {
    font-size: 12px;
    .login-header {
      position: relative;
      width: 980px;
      height: auto;
      left: 115px;
      .logo {
        background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-retina.b95a7dd.png);
        background-position: 0 !important;
        background-size: contain !important;
        width: 82px;
        height: 54px;
        display: block;
      }
    }
    .login-panel {
      margin: 0 auto 70px;
      width: 980px;
      display: flex;
      .banner {
        margin-right: 115px;
      }
      .form {
        display: flex;
        flex-direction: column;
        width: 270px;
      }

      .el-input {
        margin-top: 10px;
      }

      .foot {
        margin-top: 10px;
        b {
          float: right;
          color: #2bb8aa;
          font-size: 12px;
        }
      }

      .el-input__icon {
        &.profile {
          &:after {
            font-family: iconfont;
            content: "\e627";
            font-style: normal;
            top: -1px;
            left: 5px;
            position: absolute;
          }
        }

        &.password {
          &:after {
            font-family: iconfont;
            content: "\E600";
            font-style: normal;
            top: -1px;
            left: 3px;
            position: absolute;
            font-size: 18px;
          }
        }
      }

      .btn-login {
        margin-top: 10px;
        color: #fff;
        background-color: #2db3a6;
        border: none;
        padding: 12px 15px;
      }
      .toRegister {
        margin-left: 5px;
        color: #2bb8aa;
      }
    }
  }
</style>

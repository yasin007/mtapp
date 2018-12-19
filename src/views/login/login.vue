<template>
  <div class="page-login">
    <div class="login-header">
      <a
        href="/"
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
        <h4
          v-if="error"
          class="tips"><i/>{{ error }}</h4>
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
          <a @click="toRegister">免费注册</a>
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
        checked: '',
        username: '',
        password: '',
        error: ''
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
          //本地存储用户信息
          cookie.setCookie('name', this.username, 7)
          cookie.setCookie('token', response.data.token, 7)
          //存储在store
          // 更新store数据
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
    .login-header {
      position: relative;
      width: 980px;
      height: auto;
      margin: 40px auto 30px;
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
        .tips {
          margin-bottom: 10px;
          padding: 10px;
          border: 1px solid #f5d8a7;
          border-radius: 2px;
          background: #fff6db;
          font-size: 12px;
          padding-left: 26px;
          > i {
            position: relative;
            &:after {
              position: absolute;
              display: inline-block;
              width: 17px;
              height: 17px;
              font-family: iconfont;
              font-style: normal;
              content: "\e64d";
              font-size: 28px;
              top: -9px;
              left: -24px;
            }
          }
        }
        em {
          font-style: normal;
          float: right;
        }
      }

      .el-input {
        margin-top: 10px;
      }

      .foot {
        margin-top: 10px;
        b {
          float: right;
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
    }
  }
</style>

<template>
  <div class="m-user">
    <template v-if="userInfo.name">
      欢迎您,<span class="user-name">{{userInfo.name}}</span>
      <a @click="loginOut">退出</a>
    </template>
    <template v-else>
      <router-link class="login" to="/users/login">立即登录</router-link>
      <router-link class="register" to="/users/register">注册</router-link>
    </template>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import cookie from '../../../static/js/cookie'

  export default {
    computed: {
      ...mapGetters({
        userInfo: 'userInfo'
      })
    },
    methods: {
      loginOut() {
        cookie.delCookie('token')
        cookie.delCookie('name')
        this.$store.dispatch('setInfo')
        this.$router.push({name: 'login'})
      }
    }
  }
</script>

<style lang="scss">
  .m-user {
    font-size: 12px;
    .user-name {
      color: #31BBAC;
      margin-right: 10px;
    }
    a {
      cursor: pointer;
    }
    .login,
    .register {
      font-size: 12px;
      line-height: 40px;
      color: #999;
      margin: 0 5px;
      &.login {
        color: #31BBAC;
        margin: 0 5px 0 20px;
      }
      &:hover {
        color: #31BBAC;
      }
    }
  }
</style>

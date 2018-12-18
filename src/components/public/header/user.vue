<template>
  <div class="m-user">
    <template v-if="userInfo.name">
      欢迎您,<span class="user-name">{{userInfo.name}}</span>
      <router-link to="/exit">退出</router-link>
    </template>
    <template v-else>
      <router-link class="login" to="/app/logo">立即登录</router-link>
      <router-link class="register" to="/app/register">注册</router-link>
    </template>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        userInfo: 'userInfo'
      })
    }
  }
</script>

<style lang="scss">
  .m-user {
    .username {
      color: #31BBAC;
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

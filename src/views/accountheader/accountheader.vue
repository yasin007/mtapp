<template>
  <article class="header">
    <header>
      <a
        href="/"
        class="site-logo"/>
      <span class="login">
          <em class="bold">已有美团账号？</em>
        <router-link to="/users/login"> <el-button
          type="primary"
          size="small">登录</el-button></router-link>
        </span>
    </header>
  </article>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  .header {
    border-bottom: 2px solid #2bb8aa;
    min-width: 980px;
    color: #666;

    header {
      margin: 0 auto;
      padding: 10px 0;
      width: 980px;

      .site-logo {
        display: inline-block;
        width: 128px;
        width: 54px;
        height: 36px;
        text-indent: -9999px;
        background-position: -669px -748px;
        background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
      }
      .login {
        float: right;
        line-height: 36px;
      }

      .bold {
        margin-right: 10px;
        vertical-align: sub;
      }
      .el-button {
        background: #2db3a6;
        font-size: 12px;
      }
    }
  }

</style>

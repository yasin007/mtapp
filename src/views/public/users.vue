<template>
  <el-container class="users-layout-default">
    <el-header>
      <router-view name="head"></router-view>
    </el-header>
    <el-main>
      <router-view name='content'></router-view>
    </el-main>
    <el-footer height="100%">
      <router-view name="footer"></router-view>
    </el-footer>
  </el-container>
</template>
<script>

</script>
<style lang='scss'>
  .users-layout-default {
    -webkit-font-smoothing: antialiased;
    font-family: "-apple-system",
    BlinkMacSystemFont,
    Roboto,
    "Helvetica Neue",
    "MIcrosoft YaHei",
    sans-serif !important;
    width: 100%;
    padding: 0px;
    margin: 0px;
    .el-header, .el-main, .el-footer {
      min-width: 1190px;
      padding: 0px;
      overflow: unset;
    }
    .el-footer {
      text-align: center;
      border-top: 2px solid rgb(238, 238, 238);

    }
  }
</style>

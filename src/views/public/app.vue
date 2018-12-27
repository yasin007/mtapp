<template>
  <el-container class="app-layout-default">
    <el-header height="197px">
      <router-view name="head"></router-view>
    </el-header>
    <el-main>
      <router-view name="content"></router-view>
    </el-main>
    <el-footer>
      <router-view name="footer"></router-view>
    </el-footer>
  </el-container>
</template>
<script>
  export default {}
</script>
<style lang='scss'>
  .app-layout-default {
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
    background-color: #f8f8f8;
    .el-header, .el-main, .el-footer {
      min-width: 1190px;
      padding: 0px;
      overflow: unset;
    }
    .el-header {
      background-color: white;
    }
    .el-footer {
      text-align: left;
    }
  }
</style>

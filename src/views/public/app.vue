<template>
  <el-container class="layout-default">
    <el-header height="197px">
      <router-view name="head"></router-view>
    </el-header>
    <el-main>
      <router-view name="content"></router-view>
    </el-main>
  </el-container>
</template>
<script>

</script>
<style lang='scss'>
  .layout-default {
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
    .el-header{
      background-color: white;
    }
    .el-footer {
      text-align: center;
      border-top: 2px solid rgb(238, 238, 238);

    }
  }
</style>

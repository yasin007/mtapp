<template>
  <el-container class="layout-default">
    <el-header>
      <router-view name="head"></router-view>
    </el-header>
    <el-main>
      <router-view name='content'></router-view>
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
  }

  .el-header, .el-main{
    width: 1190px;
    margin: 0 auto;
    padding: 0;
    overflow: unset;
    font-size: 12px;
  }
</style>

<template>
  <el-container class="layout-default">
    <el-header height="163px">
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
    margin: 0px;
    padding: 0px;
    width: 100%;
  }
</style>

<template>
  <el-row
    :gutter="0"
    class="m-topbar">
    <el-col :span="10">
      <user></user>
    </el-col>
    <el-col :span="14">
      <navbar/>
    </el-col>
  </el-row>
</template>

<script>
  import User from './user.vue'
  import Navbar from './nav.vue'

  export default {
    components: {
      User,
      Navbar
    }
  }
</script>

<style lang="scss">
  .m-topbar {
    width: 1190px !important;
    height: 40px;
    line-height: 40px;
    z-index: 9;
    background-color: #f8f8f8;
  }
</style>

<template>
  <div class="m-geo">
    <i class="el-icon-location"></i>北京市
    <router-link class="changeCity" tag="a" to="/changeCity">切换城市</router-link>
    [贵阳 遵义 桐梓]
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  .m-geo {
    color: #666;
    font-size: 12px;
    .changeCity {
      background: #F4F4F4;
      border: 1px solid #E5E5E5;
      border-radius: 2px;
      color: #666;
      margin: 0 4px;
      padding: 0 2px;
      &:hover {
        color: #31BBAC;
      }
    }
  }
</style>

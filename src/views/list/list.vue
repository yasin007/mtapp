<template>
  <el-row class="page-product">
    <el-col :span="19">
      <crumbs :keyword="keyword"/>
      <categroy
        :types="types"
        :areas="areas"/>
      <list :list="list"/>
    </el-col>
  </el-row>
</template>

<script>
  import Crumbs from '@/components/list/crumbs.vue'
  import Categroy from '@/components/list/categroy.vue'

  export default {
    components: {
      Crumbs,
      Categroy
    },
    data() {
      return {
        types: []
      }
    }
  }
</script>

<style lang="scss">
  .page-product {
    width: 1190px !important;
    z-index: 9;
    margin: 0px auto;
    .m-crumbs {
      margin: 10px 0;
    }
  }
</style>

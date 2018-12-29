<template>
  <el-row class="page-product">
    <el-col :span="24">
      <crumbs :keyword="keyword"/>
      <categroy
        :types="types"/>
      <list :list="list"/>
    </el-col>
  </el-row>
</template>

<script>
  import Crumbs from '@/components/list/crumbs.vue'
  import Categroy from '@/components/list/categroy.vue'
  import List from '@/components/list/datalist.vue'
  import {getCategory, getGoods} from '../../api/api'

  export default {
    components: {
      Crumbs,
      Categroy,
      List
    },
    data() {
      return {
        list: [],
        types: []
      }
    },
    methods: {
      getMenu() {
        getCategory({}).then((response) => {
          this.types = response.data
        })
          .catch(function (error) {
            console.log(error)
          })
      },
      getList() {
        getGoods({
          search: this.searchWord //搜索关键词
        }).then((response) => {
          this.list = response.data.results
        }).catch(function (error) {
          console.log(error)
        })
      }
    },
    created() {
      this.getMenu()
      this.getList()
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

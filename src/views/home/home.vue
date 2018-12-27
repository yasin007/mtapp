<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <emenu></emenu>
      </el-col>
      <el-col :span="19">
        <life/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <artistic></artistic>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Emenu from '@/components/home/menu'
  import Life from '@/components/home/life.vue'
  import Artistic from '@/components/home/artistic.vue'

  export default {
    components: {
      Emenu,
      Life,
      Artistic
    }
  }
</script>

<style lang="scss">
  .page-index {
    width: 1190px !important;
    z-index: 9;
    margin: 0px auto;
  }
</style>

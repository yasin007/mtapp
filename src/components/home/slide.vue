<template>
  <div class="slide">
    <el-carousel height="240px">
      <el-carousel-item
        v-for="item in banners"
        :key="item.image">
        <img :src="item.image">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>

  import {bannerGoods} from '../../api/api'

  export default {
    data: () => {
      return {
        banners: []
      }
    },
    methods: {
      getBanner() {
        bannerGoods()
          .then((response) => {
            console.log(response)
            this.banners = response.data
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    created() {
      this.getBanner()
    }
  }
</script>

<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <nuxt-link to="/my"><span class="title">我的美团</span></nuxt-link>
        <dl>
          <dd>
            <router-link :to="'/app/login'">我的订单</router-link>
          </dd>
          <dd>
            <router-link :to="'/app/login'">我的收藏</router-link>
          </dd>
          <dd>
            <router-link :to="'/app/login'">修改收货地址</router-link>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  .m-nav {
    float: right;
    margin: 0;
    padding: 0;
    z-index: 999;
    height: 40px;
    text-align: center;
    font-size: 12px;
    color: darkgray;
    .nav {
      list-style: none;
      margin: 0px;
      padding: 0px;
      > li {
        width: 78px;
        a {
          color: #999;

          &:hover {
            color: #31BBAC;
          }
        }
        &.list:hover {
          border: 1px solid #E5E5E5;
          border-top: none;
          background: white;
          > dl {
            display: block;
          }
        }
        dl {
          background: #fff;
          display: none;
          z-index: 999;
          width: 78px;
          margin: 0px;
          dd {
            line-height: 35px;
            margin: 0px;
            text-align: center;
            &:hover {
              color: #31BBAC;
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col
        :span="3"
        class="left">
        <img
          src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
          alt="美团">
      </el-col>
      <el-col
        :span="15"
        class="center">
        <div class="wrapper">
          <el-input
            v-model="search"
            placeholder="搜索商家或地点"
            @focus="focus"
            @blur="blur"
            @input="input"/>
          <button class="el-button el-button--primary"><i class="el-icon-search"/></button>
        </div>
        <ul class="nav">
          <li>
            <nuxt-link
              to="/"
              class="takeout">美团外卖
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="movie">猫眼电影
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="hotel">美团酒店
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="apartment">民宿/公寓
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="business">商家入驻
            </nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col
        :span="6"
        class="right">
        <ul class="security">
          <li><i class="refund"/>
            <p class="txt">随时退</p></li>
          <li><i class="single"/>
            <p class="txt">不满意免单</p></li>
          <li><i class="overdue"/>
            <p class="txt">过期退</p></li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
</script>

<style lang="scss">
  .search-panel {
    background-color: red;
    width: 100%;
  }
  .m-header-searchbar {
    width: 1190px;
    height: 157px;
    padding: 20px 20px;
    background: #fff;
    align-items: start;
    box-sizing: border-box;
    .left {
      width: 280px;
      padding-top: 15px;
      img {
        width: 126px;
        height: 46px;
      }
    }
    .center {
      flex: 1;
      width: auto;
      .wrapper {
        margin-top: 16px;
        border: 1px solid #13D1BE;
        border-radius: 4px;
        width: 552px;
        box-sizing: border-box;
        position: relative;
        white-space: nowrap;
        .el-input {
          width: 462px;
        }
        input {
          border: none;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        .el-button {
          width: 88px;
          border: none;
          background: #13D1BE;
          font-size: 16px;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          vertical-align: -1px;
          i {
            font-weight: bold;
          }
        }
      }
      .nav {
        list-style: none;
        display: flex;
        margin-top: 25px;

        li {
          font-weight: 700;
          font-size: 16px;
          margin: 0 20px;
          cursor: pointer;
          position: relative;

          a {
            color: #222;

            &:hover {
              color: #f04d4e;
            }

            &.takeout:hover {
              color: #fbc700;
            }

            &.apartment:hover {
              color: #FDC411;
            }

            &.business:hover {
              color: #31BBAC;
            }
          }
        }
      }
    }
    .right {
      text-align: right;
      padding-top: 15px;

      .security {
        li {
          display: inline-block;
          text-align: center;
          padding: 0 5px;
        }

        i {
          font-style: normal;

          &:after {
            font-family: iconfont;
            font-size: 36px;
            color: #13D1BE;
          }
        }

        .refund {
          &:after {
            content: '\e65f';
          }
        }

        .single {
          &:after {
            content: '\e652';
          }
        }

        .overdue {
          &:after {
            content: '\e65e';
          }
        }

        .txt {
          color: #999;
          font-size: 12px;
          line-height: 1;
          margin: 0;
          text-align: center;
        }
      }
    }
  }
</style>

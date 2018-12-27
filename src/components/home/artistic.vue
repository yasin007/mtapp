<!--suppress ALL -->
<template>
  <section class="m-istyle">
    <dl @mouseover="getOpro">
      <dt>美团出炉</dt>
      <dd keyword="is_new">最新
      </dd>
      <dd keyword="is_hot">热销
      </dd>
    </dl>
    <ul class="ibody">
      <li
        v-for="item in   listData"
        :key="item.name">
        <el-card
          :body-style="{ padding: '0px' }"
          shadow="never">
          <img
            :src="item.goods_front_image"
            class="image">
          <ul class="cbody">
            <li class="title">{{ item.name }}</li>
            <li class="pos"><span>{{ item.add_time }}</span></li>
            <li class="price">￥<em>{{ item.shop_price }}</em><span>/起</span></li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>
<script>
  import {getGoods} from '../../api/api'

  export default {
    data() {
      return {
        listData: {},
        keyword: 'is_new'
      }
    },
    methods: {
      getOpro: async function (e) {

        if (e) {
          let dom = e.target
          let tag = dom.tagName.toLowerCase()
          if (tag === 'dd') {
            this.keyword = dom.getAttribute('keyword')
            let params = {}
            params[this.keyword] = 'True'
            getGoods(
              params
            )
              .then((response) => {
                this.listData = response.data.results
              })
              .catch(function (error) {
                console.log(error)
              })
          }
        } else {
          let params = {}
          params[this.keyword] = 'True'
          getGoods(
            params
          )
            .then((response) => {
              this.listData = response.data.results
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      }
    }, created() {
      this.getOpro()
    }

  }
</script>
<style lang="scss">
  .m-istyle {
    padding-left: 20px;
    margin-top: 40px;

    dl {
      height: 44px;
      line-height: 44px;
      background-color: rgb(190, 164, 116);
      background-image: linear-gradient(to right, rgb(194, 176, 142) 3%, rgb(190, 164, 116) 100%);
      display: flex;
      box-sizing: border-box;
      font-size: 14px;
      color: #fff;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      cursor: pointer;

      dt {
        font-size: 18px;
        margin-left: 13px;
        margin-right: 10px;
        padding: 0 5px;
      }

      dd {
        padding: 0 5px;
        position: relative;

        &:after {
          position: absolute;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 7px solid #fff;
          content: " ";
          display: block;
          width: 2px;
          height: 0;
          top: 37px;
          left: 0;
          right: 0;
          margin: auto;
          display: none;
        }
        &.active:after {
          display: block;
        }
      }
    }
    .ibody {
      display: flex;
      list-style: none;
      flex-wrap: wrap;
      width: 100%;
      padding: 11px 10px 10px;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      box-sizing: border-box;
      border-left: 1px solid #e5e5e5;
      border-right: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;

      > li {
        width: 33.3%;
        height: 314px;
        padding: 10px;
        box-sizing: border-box;
        float: left;
        background: #fff;
        transition: background-color .5s;
        height: 314px;

        .el-card {
          width: 100%;
          height: 100%;
          border: none;

          img {
            max-width: 100%;
            width: 100%;
            height: 208px;
            margin-bottom: 11px;
            cursor: pointer;
          }

          .el-card__body {
            .cbody {
              list-style: none;

              .title {
                font-size: 16px;
                color: #222;
                height: 22px;
                line-height: 22px;
                margin-bottom: 8px;
                font-weight: 500;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                cursor: pointer;
              }

              .pos {
                font-size: 12px;

                span {
                  height: 18px;
                  line-height: 18px;
                  text-align: center;
                  border: 1px solid #d8d8d8;
                  border-radius: 2px;
                  margin-right: 10px;
                  margin-bottom: 5px;
                  padding: 0 3px;
                }
              }
              .price {
                height: 27px;
                overflow: hidden;
                margin-bottom: 10px;
                font-size: 14px;
                color: #BE9E4D;
                font-weight: 500;

                em {
                  font-size: 22px;
                  color: #BE9E4D;
                  margin-right: 6px;
                  letter-spacing: -.8px;
                  cursor: pointer;
                  font-style: normal;
                }

                span {
                  font-size: 12px;
                  letter-spacing: -.6px;
                }
              }
            }
          }
        }

        &:hover {
          background: #F4F4F4;
          transition: background-color .5s;
          border-radius: 4px;
        }
      }
    }
  }
</style>

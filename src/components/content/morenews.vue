<template lang="html">
  <div class="more_">
    <Mnav />
    <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleTopChange">
      <ul class="items">
        <li class="item" v-for="(item, index) in newList" :key="index" @click="newDetail(item)">
          <!-- <img class="image" src="../../common/image/icon-more-news.jpg" > -->
          <img v-if="item.pictureUrl" class="image" :src="item.pictureUrl" :onerror="imageError">
          <img v-else class="image" src="../../common/image/icon-more-news.jpg" :onerror="imageError">
          <div class="con">
            <div class="time">
              <span class="num">14</span>
              <span class="hou">2018-11</span>
            </div>
            <h3 class="tit">{{item.title}}</h3>
          </div>
        </li>
      </ul>
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">Loading...</span>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
import Mnav from './nav'
import axios from 'axios'
import { APIYRL } from '@/common/api'
import { Toast, Indicator } from 'mint-ui'
export default {
  data () {
    return {
      newList: [],
      index: 21,
      current: 1,
      totalRows: 1,
      topStatus: '',
      imageError: `this.src="../../common/image/icon-more-news.jpg"`
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.newList.length = 0
      vm._getNews()
    })
  },
  methods: {
    _getNews () {
      Indicator.open()
      axios(`${APIYRL}/articleInfo.do?method=articleList&search_type=${this.index}&pageSize=10&pageNo=${this.current}`, {
        method: 'GET'
      }).then(response => {
        if (response.data.code === 0) {
          this.totalRows = response.data.result.totalRows
          this.newList = [...this.newList, ...response.data.result.data]
          Indicator.close()
        } else {
          Toast('查询失败')
        }
      })
    },
    newDetail (item) {
      // 新闻详情
      this.$router.push({
        path: '/news',
        query: {
          id: item.id
        }
      })
    },
    loadBottom () {},
    handleTopChange (status) {
      this.topStatus = status
      if (status === 'loading' && (parseInt(this.current) * this.current) < this.totalRows) {
        this.current = parseInt(this.current) + 1
        this._getNews()
      }
    }
  },
  components: {
    Mnav
  }
}
</script>

<style lang="scss" scoped>
.more_{
  width: 100%;
  .items{
    padding: 20px;
    background: #fff;
    .item{
      padding-bottom: 16px;
      margin-bottom: 20px;
      border-bottom: 1px solid #e7e7e7;
      .image{
        display: block;
        width: 100%;
        height: 248px;
      }
      .con{
        width: 100%;
        padding-top: 16px;
        font-size: 0;
        display: flex;
        .time{
          // display: inline-block;
          flex: 0 0 50px;
          width: 50px;
          height: 50px;
          background: #ebf0f5;
          border-radius: 4px;
          .num{
            display: block;
            height: 30px;
            line-height: 38px;
            font-size: 18px;
            color: #096bcd;
            font-weight: 600;
            text-align: center;
          }
          .hou{
            display: block;
            color: #096bcd;
            font-size: 12px;
            text-align: center;
            // transform: scale(0.8, 0.8);
          }
        }
        .tit{
          // display: inline-block;
          flex: 1;
          height: 50px;
          line-height: 50px;
          font-size: 13px;
          color: #626262;
          text-indent: 8px;
          font-weight: 600;
          overflow: hidden;
          vertical-align: top;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>

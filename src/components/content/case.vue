<template lang="html">
  <div class="product">
    <Mnav />
    <div class="types">
      <!-- <h4 class="all">全部</h4> -->
      <ul class="items">
        <li class="item" :class="{active: index == 41}" @click="selectType(41)">智慧农业</li>
        <li class="item" :class="{active: index == 42}" @click="selectType(42)">智慧农业温棚</li>
        <li class="item" :class="{active: index == 43}" @click="selectType(43)">智慧农业大田</li>
        <li class="item" :class="{active: index == 44}" @click="selectType(44)">智慧农业大田</li>
      </ul>
    </div>
    <ul class="content">
      <li class="item" v-for="(item, index) in deData" :key="index" @click="newDetail(item.id)">
        <img class="image" src="../../common/image/icon-more-news.jpg" alt="">
        <h3 class="title">{{item.title}}</h3>
        <span class="info">
          项目简介<br />{{item.description}}
        </span>
        <a class="btn" href="javascript:;">进一步了解</a>
      </li>
      <!-- <li class="item">
        <img class="image" src="../../common/image/icon-more-news.jpg" alt="">
        <h3 class="title">123项目</h3>
        <span class="info">
          项目简介<br />111111111111111111
        </span>
        <a class="btn" href="javascript:;">进一步了解</a>
      </li>
      <li class="item">
        <img class="image" src="../../common/image/icon-more-news.jpg" alt="">
        <h3 class="title">123项目</h3>
        <span class="info">
          项目简介<br />111111111111111111
        </span>
        <a class="btn" href="javascript:;">进一步了解</a>
      </li>
      <li class="item">
        <img class="image" src="../../common/image/icon-more-news.jpg" alt="">
        <h3 class="title">123项目</h3>
        <span class="info">
          项目简介<br />111111111111111111
        </span>
        <a class="btn" href="javascript:;">进一步了解</a>
      </li> -->
    </ul>
    <div class="no-data" v-if="deData.length == 0">
      暂无数据
    </div>
  </div>
</template>

<script>
import Mnav from './nav'
import axios from 'axios'
import { APIYRL } from '@/common/api'
import { Toast } from 'mint-ui'

export default {
  data () {
    return {
      index: 41,
      current: 1,
      deData: []
    }
  },
  created () {
    setTimeout(() => {
      this._getLists()
    }, 20)
  },
  methods: {
    newDetail (id) {
      // 新闻详情
      this.$router.push({
        path: '/news',
        query: {
          id: id
        }
      })
    },
    selectType (ind) {
      this.index = ind
      this._getLists()
    },
    _getLists (name) {
      if (name) this.index = name
      axios(`${APIYRL}/articleInfo.do?method=articleList&search_type=${this.index}&pageSize=10&pageNo=${this.current}`, {
        method: 'GET'
      }).then(response => {
        if (response.data.code === 0) {
          this.deData.length = 0
          this.total = response.data.result.totalRows
          if (response.data.result.data.length > 0) {
            this.deData = [...response.data.result.data]
          }
        } else {
          Toast('查询失败')
        }
      })
    }
  },
  components: {
    Mnav
  }
}
</script>

<style lang="scss" scoped>
.product{
  width: 100%;
  .types{
    width: 100%;
    padding: 16px 0 18px 0;
    font-size: 0;
    .all{
      display: inline-block;
      width: 40px;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      color: #218cfd;
      vertical-align: top;
    }
    .items{
      display: inline-block;
      // width: calc(100% - 40px);
      width: 100%;
      height: 20px;
      font-size: 0;
      text-align: center;
      .item{
        display: inline-block;
        padding-left: 5px;
        padding-right: 5px;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        color: #333;
      }
      .active{
        color: #218cfd;
      }
    }
  }
  .content{
    width: 100%;
    padding: 36px;
    font-size: 0;
    .item{
      display: inline-block;
      width: 48%;
      margin-bottom: 12px;
      background: #fff;
      box-shadow: 1px 0px 1px 0px rgba(0, 0, 0, 0.6);
      &:nth-child(2n+1){
        margin-right: 4%;
      }
      .image{
        display: block;
        width: 100%;
      }
      .title{
        width: 98%;
        height: 38px;
        line-height: 44px;
        padding-left: 10px;
        font-size: 14px;
        color: #24292e;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .info{
        display: inline-block;
        padding-left: 10px;
        padding-bottom: 22px;
        line-height: 24px;
        font-size: 12px;
        color: #666666;
      }
      .btn{
        display: block;
        height: 30px;
        text-align: center;
        font-size: 12px;
        color: #218cfd;
      }
    }
  }
  .no-data{
    display: block;
    width: 100%;
    padding: 10px 0;
    text-align: center;
  }
}
</style>

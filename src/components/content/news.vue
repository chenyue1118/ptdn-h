<template lang="html">
  <div class="news_h">
    <Mnav />
    <img class="banner" src="../../common/image/icon-company.jpg" alt="">
    <div class="content">
      <h3 class="title">{{newData.title}}</h3>
      <div class="con" v-html="newData.content">
      </div>
    </div>
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
      newData: {
        title: '',
        content: ''
      },
      id: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.id = vm.$route.query.id
      vm._getNewsContent()
    })
  },
  methods: {
    _getNewsContent () {
      Indicator.open()
      axios(`${APIYRL}/articleInfo.do?method=articleInfo&article_id=${this.id}`, {
        method: 'GET'
      }).then(response => {
        if (response.data.code === 0) {
          // this.newData = response.data.result
          this.newData.title = response.data.result.title
          this.newData.content = response.data.result.content.replace('<pre', '<div').replace('pre>', 'div>')
          Indicator.close()
        } else {
          Toast.info('查询失败')
        }
      })
    }
  },
  components: {
    Mnav
  }
}
</script>

<style lang="scss">
.news_h{
  width: 100%;
  .banner{
    display: block;
    width: 100%;
    height: 100px;
  }
  .content{
    padding: 30px 26px 20px 26px;
    .title{
      line-height: 24px;
      font-size: 15px;
      color: #6a6a6a;
      padding: 0 20px;
      padding-bottom: 10px;
      text-align: center;
      font-weight: 600;
      border-bottom: 1px solid #c5c5c5;
    }
    .con{
      width: 100%;
      padding-top: 14px;
      line-height: 24px;
      font-size: 12px;
      color: #626262;
      word-break: break-all;
      word-wrap: break-word;
    }
  }
}
</style>

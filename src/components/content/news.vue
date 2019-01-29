<template lang="html">
  <div class="news_">
    <Mnav />
    <img class="banner" src="../../common/image/icon-company.jpg" alt="">
    <div class="content">
      <h3 class="title">{{newData.title}}</h3>
      <p class="con" v-html="newData.content">
        <!-- 秋日的中国科大校园，阳光明媚，一张张青春的面孔成为校园里的美丽风景。“科大今年招收本科生1860多人，这一数字多年来基本保持稳定。”中国科大教务处长周丛照介绍说。<br />
        这样的精彩纪录在学界众所周知：中国科大每1000名本科毕业生，就产生1名院士、700多名硕士博士。这个比例居全国高校之首。<br />
        “小而精”，正是科大的办学理念。60年来，中国科大的科技人才如雨后春笋，原创成果呈上升之势。这所地处中部省份安徽的“国字头”高校，在科教报国的道路上步履坚实、收获满满。<br />
        红色基因 科教报国
        <br />
        <br />
        【新华网】中科大毕业生在华盛顿举行建校60周年庆祝活动<br />
        【央广网】中国科大隆重举行建校60周年纪念大会<br />
        【中国新闻网】海内外校友庆祝中国科学技术大学建校60周年<br />
        【中国科技网】红专并进一甲子，科教报国六十年 中科大举行建校60周年纪念大会<br />
        【中国科学报】“我奉献，我自信”<br />
        【中国新闻网】中国科大少年班学子：从来没把自己当“神童”<br />
        【China Daily】University celebrates 60th anniversary<br /> -->
      </p>
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
      newData: {},
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
          this.newData = response.data.result
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

<style lang="scss" scoped>
.news_{
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
      padding-top: 14px;
      line-height: 24px;
      font-size: 12px;
      color: #626262;
    }
  }
}
</style>

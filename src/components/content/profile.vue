<template lang="html">
  <div class="profile">
    <div class="banner">
      <mt-swipe :auto="5000">
       <mt-swipe-item class="items" v-for="(item, index) in bannerArr" :key="index">
         <img class="image" :src="item.picture">
       </mt-swipe-item>
       <!-- <mt-swipe-item class="items">
         <img class="image" src="../../common/image/banner-bg1.jpg">
       </mt-swipe-item>
       <mt-swipe-item class="items">
         <img class="image" src="../../common/image/banner-bg1.jpg">
       </mt-swipe-item> -->
      </mt-swipe>
    </div>
    <div class="brief">
      <h3 class="title">公司简介</h3>
      <p class="con" v-html="comDataContent"></p>
    </div>
    <div class="business">
      <h3 class="title">主营业务</h3>
      <ul class="items">
        <li class="item" v-for="(item, index) in zyData" :key="index">
          <i class="icon"></i>
          <h5 class="tit">{{item.title}}</h5>
          <span class="tic" v-html="item.content"></span>
          <!-- <span class="tic">大规模实时处理平台</span>
          <span class="tic">多个维度最佳方案匹配</span>
          <span class="tic">强大的计算能力</span>
          <span class="tic">领先的服务器规模</span> -->
          <span class="bg"></span>
        </li>
        <!-- <li class="item">
          <i class="icon"></i>
          <h5 class="tit">农业技术</h5>
          <span class="tic">确保7天24小时可靠云心</span>
          <span class="tic">大规模实时处理平台</span>
          <span class="tic">多个维度最佳方案匹配</span>
          <span class="tic">强大的计算能力</span>
          <span class="tic">领先的服务器规模</span>
          <span class="bg"></span>
        </li>
        <li class="item">
          <i class="icon"></i>
          <h5 class="tit">农业技术</h5>
          <span class="tic">确保7天24小时可靠云心</span>
          <span class="tic">大规模实时处理平台</span>
          <span class="tic">多个维度最佳方案匹配</span>
          <span class="tic">强大的计算能力</span>
          <span class="tic">领先的服务器规模</span>
          <span class="bg"></span>
        </li>
        <li class="item">
          <i class="icon"></i>
          <h5 class="tit">农业技术</h5>
          <span class="tic">确保7天24小时可靠云心</span>
          <span class="tic">大规模实时处理平台</span>
          <span class="tic">多个维度最佳方案匹配</span>
          <span class="tic">强大的计算能力</span>
          <span class="tic">领先的服务器规模</span>
          <span class="bg"></span>
        </li> -->
      </ul>
    </div>
    <div class="platform">
      <h3 class="title">智慧农业物联网平台简介</h3>
      <p class="info" v-html="ptDataContent"></p>
      <div class="wheel">
        <div class="item">
          <img class="image" src="../../common/image/icon-profile-palt.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="platform">
      <h3 class="title">智慧农业物联网开放平台简介</h3>
      <p class="info" v-html="kfDataContent"></p>
      <div class="wheel">
        <div class="item">
          <img class="image" src="../../common/image/icon-profile-palt.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import { APIYRL } from '@/common/api'
import { Swipe, SwipeItem, Toast } from 'mint-ui'
export default {
  data () {
    return {
      bannerArr: [],
      comDataContent: '',
      zyData: [],
      ptDataContent: '',
      kfDataContent: ''
    }
  },
  // created () {
  //   setTimeout(() => {
  //     this._getBanner()
  //     this._getContent(11)
  //     this._getContent(12)
  //     this._getContent(13)
  //     this._getContent(14)
  //   }, 20)
  // },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm._getBanner()
      vm._getContent(11)
      vm._getContent(12)
      vm._getContent(13)
      vm._getContent(14)
    })
  },
  methods: {
    _getBanner () {
      let articleInfo = qs.stringify({
        'rollingType': 1
      })
      axios(`${APIYRL}/rolling.do?method=showRollingPicture`, {
        method: 'GET',
        data: articleInfo
      }).then(response => {
        if (response.data.code === 0) {
          this.bannerArr = response.data.result
        } else {
          Toast('查询失败')
        }
      })
    },
    _getContent (index) {
      axios(`${APIYRL}/articleInfo.do?method=articleList&search_type=${index}&pageSize=10&pageNo=1`, {
        method: 'GET'
      }).then(response => {
        if (response.data.code === 0) {
          if (index === 11) {
            if (response.data.result.data && response.data.result.data.length > 0) {
              this.comDataContent = response.data.result.data[0].content
            }
          } else if (index === 12) {
            this.zyData = response.data.result.data
          } else if (index === 13) {
            // this.ptData = response.data.result.data
            if (response.data.result.data && response.data.result.data.length > 0) {
              this.ptDataContent = response.data.result.data[0].content
            }
          } else if (index === 14) {
            // this.kfData = response.data.result.data
            if (response.data.result.data && response.data.result.data.length > 0) {
              this.kfDataContent = response.data.result.data[0].content
            }
          }
        } else {
          Toast('查询失败')
        }
      })
    }
  },
  components: {
    Swipe,
    SwipeItem
  }
}
</script>

<style lang="scss" scoped>
.profile{
  width: 100%;
  .banner{
    width: 100%;
    height: 218px;
    .items{
      width: 100%;
      .image{
        display: block;
        width: 100%;
        height: 218px;
      }
    }
  }
  .brief{
    padding: 48px;
    .title{
      height: 40px;
      font-size: 20px;
      color: #626262;
      font-weight: 600;
    }
    .con{
      padding-bottom: 10px;
      line-height: 22px;
      font-size: 12px;
      color: #626262;
      font-family: "黑体";
    }
  }
  .business{
    position: relative;
    width: 100%;
    padding: 40px 10px 56px 10px;
    background: #272937;
    z-index: 0;
    .title{
      height: 60px;
      padding-left: 12px;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
    }
    .items{
      width: 100%;
      font-size: 0;
      .item{
        position: relative;
        display: inline-block;
        width: 48%;
        background: #fff;
        padding: 24px 0 32px 0;
        margin-bottom: 4px;
        &:nth-child(2n){
          margin-left: 4%;
        }
        .icon{
          display: block;
          width: 100%;
          height: 37px;
          background: url(../../common/image/icon-profile-tic.png) no-repeat center;
          background-size: 37px 37px;
        }
        .tit{
          width: 80%;
          margin: 0 auto;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          height: 36px;
          line-height: 40px;
          font-size: 15px;
          color: #2f2f2f;
          text-align: center;
          font-weight: 600;
        }
        .tic{
          display: block;
          width: 80%;
          height: 100px;
          overflow: hidden;
          line-height: 20px;
          font-size: 12px;
          color: #666666;
          padding-left: 16%;
          text-indent: 0;
          font-family: "黑体";
        }
        .bg{
          position: absolute;
          left: 5%;
          bottom: -6px;
          z-index: -1;
          width: 90%;
          height: 10px;
          background: #93949a;
        }
      }
    }
  }
  .platform{
    width: 100%;
    padding: 70px 24px;
    background: #fff;
    .title{
      height: 46px;
      font-size: 20px;
      color: #626262;
      font-weight: 600;
    }
    .info{
      padding-bottom: 12px;
      line-height: 24px;
      color: #626262;
      font-size: 12px;
    }
    .wheel{
      width: 100%;
      .item{
        width: 100%;
        .image{
          display: block;
          width: 100%;
        }
      }
    }
  }
}
</style>

<template lang="html">
  <div class="index">
    <div class="banner">
      <mt-swipe :auto="5000">
       <mt-swipe-item class="items" v-for="(item, index) in bannerArr" :key="index">
         <img class="image" :src="item.picture" alt="">
         <!-- <div class="item">
           <h4 class="title">{{item.title}}</h4>
           <p class="con">2019年<br /> {{item.description}}</p>
         </div>
         <span class="msg">普天动能   美好出行</span> -->
       </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="company" v-show="listData.length > 0">
      <div class="company-head">
        <h3 class="title">COMPANY NEWS</h3>
        <i class="line"></i>
        <h4 class="tit">公司新闻</h4>
      </div>
      <div class="company-body">
        <mt-swipe :auto="15000">
         <mt-swipe-item class="items" :show-indicators="false" v-for="(item, index) in listData" :key="index">
           <a class="item" @click="newDetail(item.id)">
             <img class="image" :src="item.pictureUrl" alt="">
             <div class="info">
               <h4 class="con">{{item.title}}</h4>
               <span class="time">{{item.createDate.substr(0, 10)}}</span>
             </div>
           </a>
         </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
    <div class="company">
      <div class="company-head">
        <h3 class="title">INDUSTRY NEWS</h3>
        <i class="line"></i>
        <h4 class="tit">行业新闻</h4>
      </div>
      <div class="company-body">
        <mt-swipe :auto="5000">
         <mt-swipe-item class="items" :show-indicators="false" v-for="(item, index) in industry" :key="index">
           <a class="item" @click="newDetail(item.id)">
             <img v-if="item.pictureUrl" class="image" :src="item.pictureUrl" alt="">
             <img v-else class="image" src="../../common/image/icon-company.jpg" alt="">
             <div class="info">
               <h4 class="con">{{item.title}}</h4>
               <span class="time">{{item.createDate.substr(0, 10)}}</span>
             </div>
           </a>
         </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
    <div class="product">
      <div class="product-head">
        <h3 class="title">RELATED PRODUCTS</h3>
        <i class="line"></i>
        <h4 class="tit">相关产品</h4>
      </div>
      <ul class="product-body">
        <li class="items" v-for="(item, index) in deData" :key="index" @click="newDetail(item.id)">
          <div class="mask">
            <div class="item">
              <h4 class="title">{{item.title}}</h4>
              <span class="msg">{{item.title}}</span>
            </div>
          </div>
        </li>
        <!-- <li class="items">
          <div class="mask">
            <div class="item">
              <h4 class="title">1234产品</h4>
              <span class="msg">一声春雷响彻雄州大地，习总书记亲自谋划的雄安。记亲自谋划的雄安。。。。成立，这是千年大计，国家大事</span>
            </div>
          </div>
        </li>
        <li class="items">
          <div class="mask">
            <div class="item">
              <h4 class="title">1234产品</h4>
              <span class="msg">一声春雷响彻雄州大地，习总书记亲自谋划的雄安。记亲自谋划的雄安。。。。成立，这是千年大计，国家大事…一声春雷响彻雄州大地，习总书记亲自谋划的雄安。记亲自谋划的雄安。。。。成立，这是千年大计，国家大事…</span>
            </div>
          </div>
        </li> -->
      </ul>
    </div>
    <div class="project">
      <div class="project-head">
        <h3 class="title">PROJECT CASE</h3>
        <i class="line"></i>
        <h4 class="tit">项目案例</h4>
      </div>
      <ul class="project-body">
        <li class="items" v-for="(item, index) in caseData" :key="index" @click="newDetail(item.id)">
          <a class="item" href="javascript:;">
            <div class="info">
              <span class="tit">{{item.title}}</span>
              <span class="und">进一步了解 ></span>
            </div>
          </a>
          <div class="desc">
            {{item.title}}
          </div>
        </li>
        <!-- <li class="items">
          <a class="item" href="javascript:;">
            <div class="info">
              <span class="tit">123项目</span>
              <span class="und">进一步了解 ></span>
            </div>
          </a>
          <div class="desc">
            一声春雷响彻雄州大地，习总书记亲自谋划的雄安。记亲自谋划的雄安。。。。成立，这是千年大计，国家大事…
          </div>
        </li> -->
      </ul>
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
      listData: [],
      industry: [],
      deData: [],
      caseData: []
    }
  },
  created () {
    setTimeout(() => {
      this._getBanner()
      this._getList()
      this._getIndustry()
      this._getProduct()
      this._getCase()
    }, 20)
  },
  methods: {
    indexInit () {
      // Toast('提示信息')
    },
    newDetail (id) {
      // 新闻详情
      this.$router.push({
        path: '/news',
        query: {
          id: id
        }
      })
    },
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
    _getList () {
      axios(`${APIYRL}/articleInfo.do?method=articleList&search_type=21&pageSize=10&pageNo=1`, {
        method: 'GET'
      }).then(response => {
        if (response.data.code === 0) {
          this.listData = response.data.result.data
        } else {
          Toast('查询失败')
        }
      })
    },
    _getIndustry () {
      axios(`${APIYRL}/articleInfo.do?method=articleList&search_type=22&pageSize=10&pageNo=1`, {
        method: 'GET'
      }).then(response => {
        if (response.data.code === 0) {
          this.industry = response.data.result.data
        } else {
          Toast('查询失败')
        }
      })
    },
    _getProduct () {
      axios(`${APIYRL}/articleInfo.do?method=articleList&search_type=31&pageSize=3&pageNo=1`, {
        method: 'GET'
      }).then(response => {
        if (response.data.code === 0) {
          if (response.data.result.data.length > 0) {
            this.deData = [...response.data.result.data]
          }
        } else {
          Toast('查询失败')
        }
      })
    },
    _getCase () {
      axios(`${APIYRL}/articleInfo.do?method=articleList&search_type=41&pageSize=4&pageNo=1`, {
        method: 'GET'
      }).then(response => {
        if (response.data.code === 0) {
          if (response.data.result.data.length > 0) {
            this.caseData = [...response.data.result.data]
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

<style lang="scss">
.index{
  width: 100%;
  .banner{
    width: 100%;
    height: 216px;
    .items{
      position: relative;
      width: 100%;
      height: 216px;
      background: url(../../common/image/banner-bg1.jpg) no-repeat center;
      background-size: cover;
      // background: url(../../common/image/banner-bg1.jpg) no-repeat center;
      // background-size: cover;
      .image{
        position: absolute;
        width: 100%;
        height: 216px;
      }
      .item{
        position: absolute;
        top: 44px;
        right: 28px;
        width: 140px;
        padding: 10px 6px;
        background: rgba(41, 46, 50, 0.66);
        color: #fff;
        .title{
          padding-bottom: 10px;
          font-size: 16px;
        }
        .con{
          line-height: 18px;
          font-size: 12px;
        }
      }
      .msg{
        position: absolute;
        top: 142px;
        right: 28px;
        width: 140px;
        padding: 10px 6px;
        background: rgba(41, 46, 50, 0.66);
        color: #fff;
        font-size: 14px;
      }
    }
  }
  .company{
    width: 100%;
    padding-bottom: 107px;
    background: #e7e7e7;
    .company-head{
      padding: 34px 0;
      background: #fefefe;
      .title{
        height: 26px;
        line-height: 20px;
        font-size: 25px;
        color: #cbcbcb;
        font-weight: 600;
        text-align: center;
      }
      .line{
        display: block;
        width: 36px;
        height: 3px;
        margin: 0 auto;
        background: #fd7f1e;
      }
      .tit{
        padding-top: 10px;
        line-height: 20px;
        font-size: 18px;
        color: #3a3a3a;
        text-align: center;
        font-weight: 600;
      }
    }
    .company-body{
      display: block;
      width: 100%;
      height: 200px;
      .mint-swipe{
        overflow: visible;
        .mint-swipe-items-wrap{
          overflow: visible;
        }
      }
      .items{
        display: block;
        width: 100%;
        height: 200px;
        background: pink;
        .item{
          display: block;
          position: relative;
          width: 100%;
          height: 200px;
          // background: url(../../common/image/icon-company.jpg) no-repeat center;
          // background-size: cover;
          .image{
            position: absolute;
            display: block;
            width: 100%;
            height: 200px;
          }
          .info{
            position: absolute;
            top: 180px;
            left: 5%;
            width: 90%;
            padding: 24px 14px 30px 14px;
            border-radius: 4px;
            box-shadow: 0 0 12px 1px rgba(0, 0, 0, 0.5);
            background: #fff;
            .con{
              padding-bottom: 14px;
              font-size: 14px;
              color: #3a3a3a;
              text-align: left;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .time{
              display: block;
              text-align: right;
              color: #3a3a3a;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
  .product{
    width: 100%;
    padding-bottom: 16px;
    background: #fefefe;
    .product-head{
      padding: 34px 0;
      background: #fefefe;
      .title{
        height: 26px;
        line-height: 20px;
        font-size: 25px;
        color: #cbcbcb;
        font-weight: 600;
        text-align: center;
      }
      .line{
        display: block;
        width: 36px;
        height: 3px;
        margin: 0 auto;
        background: #fd7f1e;
      }
      .tit{
        padding-top: 10px;
        line-height: 20px;
        font-size: 18px;
        color: #3a3a3a;
        text-align: center;
        font-weight: 600;
      }
    }
    .product-body{
      width: 90%;
      margin: 0 auto;
      .items{
        position: relative;
        width: 100%;
        height: 170px;
        margin-bottom: 6px;
        background: url(../../common/image/icon-company.jpg) no-repeat center;
        background-size: cover;
        .mask{
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          .item{
            position: absolute;
            left: 5%;
            bottom: 24px;
            width: 90%;
            .title{
              height: 32px;
              line-height: 32px;
              font-size: 16px;
              color: #ffffff;
              font-weight: 500;
            }
            .msg{
              line-height: 20px;
              font-size: 12px;
              color: #fff;
            }
          }
        }
      }
    }
  }
  .project{
    width: 100%;
    padding-bottom: 16px;
    background: #fefefe;
    .project-head{
      padding: 34px 0;
      background: #fefefe;
      .title{
        height: 26px;
        line-height: 20px;
        font-size: 25px;
        color: #cbcbcb;
        font-weight: 600;
        text-align: center;
      }
      .line{
        display: block;
        width: 36px;
        height: 3px;
        margin: 0 auto;
        background: #fd7f1e;
      }
      .tit{
        padding-top: 10px;
        line-height: 20px;
        font-size: 18px;
        color: #3a3a3a;
        text-align: center;
        font-weight: 600;
      }
    }
    .project-body{
      width: 90%;
      margin: 0 auto;
      .items{
        width: 100%;
        .item{
          position: relative;
          display: block;
          width: 100%;
          height: 200px;
          background: url(../../common/image/icon-company.jpg) no-repeat center;
          background-size: cover;
          cursor: pointer;
          .info{
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 34px;
            font-size: 0;
            background: #333333;
            cursor: pointer;
            .tit{
              display: inline-block;
              width: 60%;
              height: 34px;
              line-height: 34px;
              padding-left: 16px;
              font-size: 16px;
              color: #fff;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .und{
              display: inline-block;
              width: 40%;
              height: 34px;
              line-height: 34px;
              padding-right: 16px;
              font-size: 12px;
              color: #fff;
              text-align: right;
              vertical-align: top;
            }
          }
        }
        .desc{
          padding: 10px 20px 20px 20px;
          line-height: 20px;
          color: #333333;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

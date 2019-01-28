<template lang="html">
  <div class="product">
    <Mnav />
    <div class="types">
      <h4 class="all">全部</h4>
      <ul class="items">
        <li class="item">智慧农业</li>
        <li class="item">智慧农业温棚</li>
        <li class="item">智慧农业大田</li>
      </ul>
    </div>
    <ul class="content">
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
      </li>
    </ul>
  </div>
</template>

<script>
import Mnav from './nav'

export default {
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
    padding: 16px 20px 18px 20px;
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
      width: calc(100% - 40px);
      height: 20px;
      font-size: 0;
      .item{
        display: inline-block;
        padding-right: 14px;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: #333;
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
        height: 38px;
        line-height: 44px;
        padding-left: 10px;
        font-size: 14px;
        color: #24292e;
        font-weight: 600;
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
}
</style>

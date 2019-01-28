<template lang="html">
  <div class="more_">
    <Mnav />
    <ul class="items">
      <li class="item">
        <img class="image" src="../../common/image/icon-more-news.jpg" >
        <div class="con">
          <div class="time">
            <span class="num">14</span>
            <span class="hou">2018-11</span>
          </div>
          <h3 class="tit">中国科学技术大学中国科学技术大学磋商公告</h3>
        </div>
      </li>
      <li class="item">
        <img class="image" src="../../common/image/icon-more-news.jpg" >
        <div class="con">
          <div class="time">
            <span class="num">14</span>
            <span class="hou">2018-11</span>
          </div>
          <h3 class="tit">中国科学技术大学中国科学技术大学磋商公告</h3>
        </div>
      </li>
      <li class="item">
        <img class="image" src="../../common/image/icon-more-news.jpg" >
        <div class="con">
          <div class="time">
            <span class="num">14</span>
            <span class="hou">2018-11</span>
          </div>
          <h3 class="tit">中国科学技术大学中国科学技术大学磋商公告</h3>
        </div>
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
      }
      .con{
        padding-top: 16px;
        font-size: 0;
        .time{
          display: inline-block;
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
          display: inline-block;
          height: 50px;
          line-height: 50px;
          font-size: 13px;
          color: #626262;
          text-indent: 8px;
          font-weight: 600;
          overflow: hidden;
          vertical-align: top;
        }
      }
    }
  }
}
</style>

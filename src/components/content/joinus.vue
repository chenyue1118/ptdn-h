<template lang="html">
  <div class="join">
    <Mnav />
    <div class="con-image"></div>
    <div class="msg-wra">
      <h3 class="title">加入我们</h3>
      <p class="msg">地址：银川市金凤区正源南街IBM</p>
      <p class="msg">邮箱：liangliang@nxptdn.com</p>
      <p class="msg">电话：0951-8305007  15378972980</p>
      <p class="msg">750001</p>
      <div class="map">
        <i class="map-img"></i>
      </div>
    </div>
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
.join{
  width: 100%;
  .con-image{
    width: 100%;
    height: 212px;
    background: url(../../common/image/icon-join-banner.png) no-repeat center;
    background-size: 100% 212px;
  }
  .msg-wra{
    width: 100%;
    padding: 28px;
    .title{
      height: 36px;
      color: #6a6a6a;
      font-size: 20px;
    }
    .msg{
      padding-bottom: 6px;
      line-height: 16px;
      color: #24292e;
      font-size: 12px;
    }
    .map{
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid #c5c5c5;
      .map-img{
        display: block;
        width: 100%;
        height: 150px;
        background: url(../../common\image\icon-join-map.png) no-repeat center;
        background-size: cover;
      }
    }
  }
}
</style>

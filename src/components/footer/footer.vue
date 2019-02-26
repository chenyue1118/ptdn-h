<template lang="html">
  <div class="footer" id="footerid">
    <i class="icon"></i>
    <p class="con">地址：银川市金凤区正源南街IBM</p>
    <p class="con">邮编：750001</p>
    <p class="con">电话：0951-8305007 15378972980</p>
    <p class="con">版权所有：宁夏普天动能信息技术有限公司</p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.footer{
  // position: fixed;
  // bottom: 0;
  // left: 0;
  // width: 100%;
  padding: 24px 0 40px 0;
  background: #323332;
  .icon{
    display: block;
    width: 100%;
    height: 35px;
    margin-bottom: 12px;
    background: url(../../common/image/icon-logo-foot.png) no-repeat center;
    background-size: 101px 35px;
  }
  .con{
    height: 22px;
    font-size: 13px;
    color: #fff;
    text-align: center;
  }
}
</style>

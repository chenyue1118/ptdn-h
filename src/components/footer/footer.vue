<template lang="html">
  <div class="footer" id="footerid">
    <i class="icon"></i>
    <p class="con">普天动能 版权所有 © 2018 京ICP备18013903号</p>
    <p class="con">海淀区西北旺东路十号院东区五号楼中关村软件园</p>
    <p class="con">+86-312-6383339</p>
    <p class="con">Powered by ruanjianyuan ©2018</p>
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

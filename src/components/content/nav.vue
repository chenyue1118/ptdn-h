<template lang="html">
  <div class="nav_">
    <div class="item">
      <i class="icon"></i>
      <span class="con">智慧农业物联网平台</span>
    </div>
    <i class="line"></i>
    <div class="item item-ri">
      <i class="icon"></i>
      <span class="con">智慧物联网开放平台</span>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.nav_{
  width: 100%;
  padding: 10px 28px;
  background: #292e32;
  display: flex;
  .item{
    flex: 1;
    .icon{
      display: inline-block;
      width: 14px;
      height: 16px;
      margin-top: 3px;
      background: url(../../common/image/icon-nav-le.png) no-repeat center;
      background-size: 100%;
      vertical-align: top;
    }
    .con{
      height: 16px;
      line-height: 16px;
      font-size: 12px;
      color: #fd7f1e;
    }
  }
  .item-ri{
    text-align: center;
    .icon{
      background: url(../../common/image/icon-nav-ri.png) no-repeat center;
      background-size: 100%;
      vertical-align: top;
    }
    .con{
      color: #218cfd;
    }
  }
  .line{
    flex: 0 0 2px;
    height: 14px;
    background: #292e32;
    background: #999;
    transform: translateY(3px);
  }
}
</style>

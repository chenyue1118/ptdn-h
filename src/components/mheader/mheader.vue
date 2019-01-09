<template lang="html">
  <div class="mheader">
    <div class="header">
      <i class="logo"></i>
      <a class="menu">
        <slot name="iconW"></slot>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.mheader{
  width: 100%;
  height: 65px;
  padding: 0 10px;
  .header{
    display: flex;
    width: 100%;
    height: 65px;
    .logo{
      flex: 1;
      background: url(../../common/image/icon-logo.png) no-repeat left center;
      background-size: 100px;
    }
    .menu{
      flex: 0 0 32px;
      .icon{
        display: block;
        width: 32px;
        height: 65px;
        background: url(icon-nav.png) no-repeat center;
        background-size: 20px 20px;
      }
      .btnOpen{
        background: url(icon-nav_close.png) no-repeat center;
        background-size: 20px 20px;
      }
    }
  }
}
</style>

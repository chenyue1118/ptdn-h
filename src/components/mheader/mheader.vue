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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 65px;
  padding: 0 10px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.6);
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

<template lang="html">
  <div class="menu-wrapper" v-if="myVisible">
    <ul class="menu">
      <li class="item" v-for="(item, index) in navs" :key="index">{{item.lable}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    myVisible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      navs: [{
        'name': 'index',
        'lable': '导航1'
      }, {
        'name': 'index2',
        'lable': '导航2'
      }, {
        'name': 'index3',
        'lable': '导航3'
      }, {
        'name': 'index4',
        'lable': '导航4'
      }, {
        'name': 'index5',
        'lable': '导航5'
      }, {
        'name': 'index6',
        'lable': '导航6'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-wrapper{
  position: fixed;
  top: 65px;
  z-index: 1111;
  width: 100%;
  height: calc(100% - 65px);
  background: pink;
  .menu{
    width: 100%;
    height: 100%;
    .item{
      height: 16.66%;
      font-size: 12px;
      border-bottom: 1px solid #333;
    }
  }
}
// .menu{
//   position: relative;
//   top: 45px;
//   width: 100%;
//   background: #fff;
// }
</style>

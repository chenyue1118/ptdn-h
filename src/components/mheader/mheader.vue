<template lang="html">
  <div class="mheader">
    <div class="header">
      <i class="logo"></i>
      <img v-if="navListShow" class="btn btn-open" src="./icon-nav.png">
      <img v-else class="btn btn-close" src="./icon-nav_close.png">
    </div>
    <ul class="nav">
      <li class="item" v-for="(item, index) in navs" :key="index">{{item.lable}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navListShow: true,
      navs: [{
        'name': 'index',
        'lable': '导航1'
      }, {
        'name': 'index2',
        'lable': '导航2'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

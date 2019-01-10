<template lang="html">
  <div class="menu-wrapper" v-if="myVisible">
    <ul class="menu">
      <li class="item" v-for="(item, index) in navs" :key="index" @click="linkTo(item)">
        <span class="name">{{item.lable}}</span>
        <span class="nameen">{{item.nameen}}</span>
      </li>
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
        'lable': '首页',
        'nameen': 'ABOUT  US'
      }, {
        'name': 'joinus',
        'lable': '加入我们',
        'nameen': 'ABOUT  US'
      }, {
        'name': 'morenews',
        'lable': '更多新闻',
        'nameen': 'ABOUT  US'
      }, {
        'name': 'news',
        'lable': '新闻详情',
        'nameen': 'ABOUT  US'
      }, {
        'name': 'product',
        'lable': '产品展示',
        'nameen': 'ABOUT  US'
      }, {
        'name': 'profile',
        'lable': '公司简介',
        'nameen': 'ABOUT  US'
      }]
    }
  },
  methods: {
    linkTo (item) {
      this.$emit('update:myVisible', false)
      this.$router.push({
        path: item.name
      })
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
  background: #000;
  .menu{
    width: 100%;
    height: 100%;
    .item{
      height: 16.66%;
      padding-left: 40px;
      font-size: 12px;
      background: #3f3f42;
      .name{
        display: block;
        height:50%;
        padding-top: 20px;
        font-size: 20px;
        color: #ffffff;
      }
      .nameen{
        display: block;
        height: 50%;
        font-size: 18px;
        color: #b2b2b2;
      }
    }
    .item:nth-child(2){
      background: #313134;
    }
    .item:nth-child(3){
      background: #212122;
    }
    .item:nth-child(4){
      background: #151517;
    }
    .item:nth-child(5){
      background: #0e0e0f;
    }
    .item:nth-child(6){
      background: #000000;
    }
  }
}
</style>

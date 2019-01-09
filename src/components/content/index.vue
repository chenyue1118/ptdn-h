<template lang="html">
  <div class="index">
     首页
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  created () {
    // this.indexInit()
  },
  methods: {
    indexInit () {
      Toast('提示信息')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

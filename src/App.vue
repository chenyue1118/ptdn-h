<template>
  <div id="app">
    <div class="wrapper">
      <Mheader>
        <i class="icon" :class="{btnOpen: visible}" slot="iconW" @click='toogleMenu'></i>
      </Mheader>
      <Menu :my-visible.sync = "visible" />
      <div class="seize"></div>
      <router-view/>
      <Footer/>
    </div>

  </div>
</template>

<script>
import Mheader from './components/mheader/mheader'
import Menu from './components/menu/menu'
import Footer from './components/footer/footer'
export default {
  name: 'App',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    toogleMenu () {
      this.visible = !this.visible
    }
  },
  components: {
    Mheader,
    Menu,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  width: 100%;
  background: #fff;
  .seize{
    height: 65px;
  }
}
</style>

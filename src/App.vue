<template>
  <div id="app">
    <div class="wrapper">
      <Mheader/>
      <router-view/>
      <Footer/>
    </div>

  </div>
</template>

<script>
import Mheader from './components/mheader/mheader'
import Footer from './components/footer/footer'
export default {
  name: 'App',
  components: {
    Mheader,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  width: 100%;
  background: #fff;
}
</style>

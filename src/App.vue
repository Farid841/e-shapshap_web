<template>
  <div id="app">
    <Header />
      <router-view>
        
        
      </router-view>
    <Footer />
  </div>
</template>

<script>
import Header from '../src/views/AppHeader.vue'
import Footer from '../src/views/AppFooter.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
/* Styles globaux pour votre application peuvent aller ici */
</style>

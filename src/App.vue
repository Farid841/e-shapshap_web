<template>

  <div style="display: flex; flex-direction: column; min-height: 100vh;">
    <Header />
    <div id="app" style="flex: 1 0 auto;">
      <router-view>
        
      </router-view>
    </div>
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

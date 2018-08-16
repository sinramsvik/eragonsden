<template>
  <div id="app" class="margins">
    <desktop-header class="spacer"></desktop-header>
    <client-list class="spacer"></client-list>
    <about></about>
  </div>
</template>

<script>
import DesktopHeader from './components/DesktopHeader.vue'
import ClientList from './components/ClientList.vue'
import About from './components/About.vue'
export default {
  name: 'app',
  components: {
    DesktopHeader,
    ClientList,
    About
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
  @import '/assets/scss/app';

  .margins {
    margin: 55px 80px;
  }
</style>


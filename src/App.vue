<template>
  <div id="app" class="margins">
    <desktop-header class="spacer"></desktop-header>
    <client-list class="spacer"></client-list>
  </div>
</template>

<script>
import DesktopHeader from './components/DesktopHeader.vue'
import ClientList from './components/ClientList.vue'
export default {
  name: 'app',
  components: {
    DesktopHeader,
    ClientList
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


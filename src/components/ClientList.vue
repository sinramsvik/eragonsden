<template>
  <section class="columns">
    <div class="column is-4 scroll rows">
      <clients class="row" v-for="(row,index) in table" :key="index" :client="row.client" :photo="row['photo-url']" :body="row.clientBody">
      </clients>
    </div>
    <portal-target class="column is-offset-3" name="destination"></portal-target>
  </section>
</template>

<script>
import Clients from './Clients.vue'
import Tabletop from 'tabletop'
export default {
  components: { Clients },
  data () {
    return {
      table: []
    }
  },

  mounted () {
    Tabletop.init({  
      key: '1W-xMb9P4Xpnn4iOKgDsA7H1dzwED_Jm3gqewoIpzHGo',
      callback: this.showInfo,
      simpleSheet: true 
    })
  },

  methods: {
    showInfo(data,tabletop) {
      this.table = (tabletop.sheets('work').elements)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/variables.scss";

  div.scroll {
    height: 100vh;
    overflow-y: scroll;
  }

</style>
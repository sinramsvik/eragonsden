<template>
  <header class="rows">
    <div class="row columns" v-for="(row,index) in table" :key="index">
      <div class="column is-two-thirds">
        <img src="../assets/icons/logo.svg" />
        <h2>{{ row.subHeader }}</h2>
      </div>
      <social class="column is-1"></social>
    </div>
  </header>
</template>

<script>
import Social from './Social.vue'
import Tabletop from 'tabletop'
export default {
  components: { Social },
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
      this.table = (tabletop.sheets('header','contact').elements)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/variables.scss";

  h2 {
    color: $subtext-gray;
  }
</style>


<template>
    <header class="level columns">
      <div class="level-left column" v-for="(row,index) in table" :key="index">
        <img src="../assets/icons/logo.svg" />
        <h2>{{ row.subHeader }}</h2>
      </div>
      <social class="level-right justified"></social>
    </header>
</template>

<script>
import Social from './Social.vue'
import Tabletop from 'tabletop'
import _ from 'lodash'
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
      this.table = _.compact(tabletop.sheets('header').elements)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/variables.scss";

  .level-left h2 {
    color: $subtext-gray;
  }
  .justified {
    justify-content: top;
  }
</style>


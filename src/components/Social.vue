<template>
  <div>
    <div v-for="(row, index) in table" :key="index">
      <a :href="row.socialUrl">{{ row.social }}</a>
    </div>
  </div>
</template>

<script>
import Tabletop from 'tabletop'
import _ from 'lodash'
export default {
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
      this.table = _.compact(tabletop.sheets('contact').elements)
    }
  }
}
</script>

<style lang="scss" scoped>
  
  a {
    font-size: 12px;
    text-decoration-line: underline;
    margin-left: 12px;
    margin-right: 12px;
  }

</style>

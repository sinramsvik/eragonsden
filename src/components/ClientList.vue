<template>
  <section>
    <div class="rows">
      <div class="row" v-for="(row,index) in table" :key="index">
        <p class="client" @mouseover="isActive = true">{{ row.client }}</p>
        <!-- <aside class="columns" v-if="isActive">
          <div class="column is-offset-6 aside">
            <img :src="row['photo-url']">
            <p>{{ row.clientBody }}</p>
          </div>
        </aside> -->
      </div>
    </div>
  </section>
</template>

<script>
import Tabletop from 'tabletop'
import _ from 'lodash'
export default {
  data () {
    return {
      table: [],
      isActive: false
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
      this.table = _.compact(tabletop.sheets('work').elements)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/variables.scss";

  .client {
    display: inline-block;
    line-height: 30px;
    &:hover {
      background-color: #eaeaea;
      border-radius: 4px;
    }
  }
  .aside {
    width: 560px;
    height: 620px;
  }

</style>
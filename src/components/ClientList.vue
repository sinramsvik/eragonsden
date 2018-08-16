<template>
  <section class="columns">
    <div class="column is-4 scroll rows">
      <clients class="row" @hover="setProject" v-for="(row,index) in table" :key="index" :index="index" :client="row.client">
      </clients>
    </div>
    <div class="column is-offset-3" v-if="project">
      <img :src="project['photo-url']" />
      <h1>{{ project.client }}</h1>
      <p>{{ project.clientBody }}</p>
    </div>
  </section>
</template>

<script>
import Clients from './Clients.vue'
import Tabletop from 'tabletop'
export default {
  components: { Clients },
  data () {
    return {
      table: [],
      project: null
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
    },

    setProject ({ index }) {
      let item = this.table[index]
      this.project = item
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/variables.scss";

  div.scroll {
    height: 80vh;
    overflow-y: scroll;
  }  

</style>
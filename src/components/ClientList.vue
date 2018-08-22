<template>
  <section class="columns">
    <div class="column is-4 scroll rows">
      <clients class="row" @hover="setProject" v-for="(entry,index) in entries" :key="index" :index="index" :client="entry.gsx$client.$t">
      </clients>
    </div>
    <div class="column is-offset-3" v-if="project">
      <img :src="project.gsx$photo.$t" />
      <h1>{{ project.gsx$client.$t }}</h1>
      <p>{{ project.gsx$clientbody.$t }}</p>
    </div>
  </section>
</template>

<script>
import Clients from './Clients.vue'
export default {
  components: { Clients },
  data () {
    return {
      entries: null,
      project: null
    }
  },

  watch: {
    currentPage: 'fetchData'
  },

  created () {
    this.fetchData()
  },

  methods: {
    fetchData() {
      let xhr = new XMLHttpRequest()
      let self = this
      xhr.open('GET','https://spreadsheets.google.com/feeds/list/1W-xMb9P4Xpnn4iOKgDsA7H1dzwED_Jm3gqewoIpzHGo/5/public/values?alt=json')
      xhr.onload = function () {
        let response = JSON.parse(xhr.responseText)
        self.entries = response.feed.entry
      }
      xhr.send()
    },
    setProject ({ index }) {
      let item = this.entries[index]
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
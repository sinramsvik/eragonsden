<template>
  <header class="rows">
    <div class="row columns" v-for="(entry,index) in entries" :key="index">
      <div class="column is-two-thirds">
        <!-- <img :src="entry.gsx$logo.$t" /> -->
        <img src="../assets/icons/logo.svg" />
        <h2>{{ entry.gsx$subheader.$t }}</h2>
      </div>
      <social></social>
    </div>
  </header>
</template>

<script>
import Social from './Social.vue'
export default {
  components: { Social },
  data () {
    return {
      entries: null
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
      xhr.open('GET','https://spreadsheets.google.com/feeds/list/1W-xMb9P4Xpnn4iOKgDsA7H1dzwED_Jm3gqewoIpzHGo/2/public/values?alt=json')
      xhr.onload = function () {
        let response = JSON.parse(xhr.responseText)
        self.entries = response.feed.entry
      }
      xhr.send()
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/variables.scss";

  h2 {
    color: $subtext-gray;
  }
</style>


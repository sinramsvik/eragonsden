<template>
  <div class="columns">
    <div class="column" v-for="(entry,index) in entries" :key="index">
      <a :href="entry.gsx$socialurl.$t">{{ entry.gsx$social.$t }}</a>
    </div>
  </div>
</template>

<script>
export default {
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
      xhr.open('GET','https://spreadsheets.google.com/feeds/list/1W-xMb9P4Xpnn4iOKgDsA7H1dzwED_Jm3gqewoIpzHGo/3/public/values?alt=json')
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
  
  a {
    font-size: 12px;
    text-decoration-line: underline;
    margin-left: 12px;
    margin-right: 12px;
  }

</style>

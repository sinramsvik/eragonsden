<template>
  <section class="columns" id="about">
    <div class="column rows" v-for="(entry,index) in entries" :key="index">
      <h2>{{ entry.gsx$number.$t }}</h2>
      <svg height="2" width="55" class="row">
        <line x1="55" y1="0" x2="0" y2="0" />
      </svg>
      <p class="row">{{ entry.gsx$about.$t }}</p>
      <p class="row">{{ entry.gsx$abouttwo.$t }}</p>
    </div>
  </section>
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
      xhr.open('GET','https://spreadsheets.google.com/feeds/list/1W-xMb9P4Xpnn4iOKgDsA7H1dzwED_Jm3gqewoIpzHGo/4/public/values?alt=json')
      xhr.onload = function () {
        let response = JSON.parse(xhr.responseText)
        self.entries = response.feed.entry
      }
      xhr.send()
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";

  h2 {
    display: block;
    & + svg {
      stroke: $secondary;
      stroke-width: 2px;
    }
    & ~ p {
    color: $subtext-gray;
    padding-bottom: 16px;
    }
  }

</style>
<template>
  <section class="columns" id="about">
    <div class="column rows" v-for="(entry,index) in entries" :key="index">
      <h2>{{ entry.fields.number }}</h2>
      <svg height="2" width="55" class="row">
        <line x1="55" y1="0" x2="0" y2="0" />
      </svg>
      <p class="row">{{ entry.fields.about }}</p>
      <p class="row">{{ entry.fields.aboutAlt }}</p>
    </div>
  </section>
</template>

<script>
import _ from 'lodash'
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
      xhr.open('GET','https://api.airtable.com/v0/appudoYlR0W35iwUx/about?api_key=keyNazOMJHA5IFSJw')
      xhr.onload = function () {
        let response = JSON.parse(xhr.responseText)
        self.entries = response.records
        //console.log(self.entries)
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
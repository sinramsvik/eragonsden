<template>
  <section class="columns">
    <div class="column is-4 scroll rows">
      <clients class="row" @hover="setProject" v-for="(entry,index) in entries" :key="index" :index="index" :client="entry.fields.client">
      </clients>
    </div>
    <div class="column is-offset-3" v-if="project">
      <img v-if="project.fields.photo" :src="project.fields.photo[0].url" />
      <h1>{{ project.fields.client }}</h1>
      <p>{{ project.fields.body }}</p>
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
      xhr.open('GET','https://api.airtable.com/v0/appudoYlR0W35iwUx/work?api_key=keyNazOMJHA5IFSJw')
      xhr.onload = function () {
        let response = JSON.parse(xhr.responseText)
        self.entries = response.records
        //console.log(self.entries)
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
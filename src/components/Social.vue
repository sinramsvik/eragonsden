<template>
  <div class="columns">
    <div class="column" v-for="(entry,index) in entries" :key="index">
      <a :href="entry.fields.socialUrl">{{ entry.fields.social }}</a>
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
      xhr.open('GET','https://api.airtable.com/v0/appudoYlR0W35iwUx/contact?api_key=keyNazOMJHA5IFSJw')
      xhr.onload = function () {
        let response = JSON.parse(xhr.responseText)
        self.entries = response.records
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

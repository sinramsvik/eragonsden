<template>
  <div>
    <p class="client" @mouseover="open = !open">{{ client }}</p>
    <portal class="aside" to="destination" v-if="open">
      <img :src="photo" />
      <p>{{ body }}</p>
    </portal>
  </div>
</template>

<script>
export default {
  props: {
    client: String,
    photo: String,
    body: String
  },
  data () {
    return {
      open: false
    }
  }
}
</script>

<style lang="scss">
  
  .aside {
    width: 520px;
    height: 520px;
  }
  .hidden {
    display: none;
  }
  p.client {
    display: inline-block;
    &:hover {
      background-color: #eaeaea;
      border-radius: 4px;
    }
  }
</style>
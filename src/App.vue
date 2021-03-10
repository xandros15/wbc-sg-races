<template>
    <div id="app">
        <ChoseRace></ChoseRace>
        <Races></Races>
    </div>
</template>

<script>
  import ChoseRace from './components/ChoseRace'
  import Races from './components/Races'

  export default {
    name: 'App',
    components: {
      Races,
      ChoseRace
    },
    created () {
      this.$store.dispatch('loadData')
    }
  }
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

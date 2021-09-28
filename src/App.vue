<template>
    <div id="app" :class="{dark}">
        <ChangeTheme></ChangeTheme>
        <ChoseRace></ChoseRace>
        <Races></Races>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  import ChangeTheme from './components/ChangeTheme'
  import ChoseRace from './components/ChoseRace'
  import Races from './components/Races'

  export default {
    name: 'App',
    components: {
      ChangeTheme,
      Races,
      ChoseRace
    },
    computed: mapState(['dark']),
    created () {
      this.$store.dispatch('loadData')
    }
  }
</script>

<style lang="scss">
    @import '~bootstrap/dist/css/bootstrap.min.css';

    #app {
        min-height: 100vh;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        padding-top: 30px;

        &.dark {
            background-color: var(--dark) !important;
            color: var(--light) !important;
        }
    }
</style>

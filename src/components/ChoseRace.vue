<template>
    <div class="d-flex justify-content-center">
        <div class="form-group">
            <select class="race-select form-control" :class="{dark}" title="Chose race" @change="changeRace($event)">
                <option disabled selected value>Select Race</option>
                <option v-for="race in races" :key="race" :value="race">
                    {{race}}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'ChoseRace',
    computed: {
      ...mapState(['dark']),
      races () {
        return this.$store.state.races.map(u => u.name)
      }
    },
    methods: {
      changeRace ({target}) {
        if (target && target.value) {
          this.$store.commit('setRaceName', target.value)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
    .race-select {
        margin-bottom: 1rem;

        &.dark {
            color: #fff;
            background-color: #232323;
            &:focus {}
        }
    }
</style>

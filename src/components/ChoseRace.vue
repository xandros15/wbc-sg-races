<template>
    <div>
        <select title="Chose race" @change="changeRace($event)">
            <option v-for="race in races" :key="race" :value="race">
                {{race}}
            </option>
        </select>
    </div>
</template>

<script>
  export default {
    name: 'ChoseRace',
    computed: {
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

<style scoped>
    select {
        margin-bottom: 1rem;
    }
</style>

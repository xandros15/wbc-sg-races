<template>
    <div>
        <select title="Chose unit" @change="changeUnit($event)">
            <option v-for="unit in units" :key="unit.id" :value="unit.id">
                {{unit.name}}
            </option>
        </select>
    </div>
</template>

<script>
  export default {
    name: 'ChoseUnit',
    computed: {
      units () {
        return this.$store.state.units.map(u => {
          return {
            id: u.id,
            name: u.name,
          }
        })
      }
    },
    methods: {
      changeUnit ({target}) {
        if (target && target.value) {
          this.$store.commit('setUnitId', target.value)
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

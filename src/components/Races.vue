<template>
    <div>
        <table class="table" v-if="race">
            <tr>
                <th>Name</th>
                <th>Tier</th>
                <th>Combat</th>
                <th>Hits</th>
                <th>Speed</th>
                <th>View</th>
                <th>Damage</th>
                <th>Range</th>
                <th>DType</th>
                <th>AType</th>
                <th>Armour</th>
                <th>Resistance</th>
                <th title="Resilience">Res</th>
                <th title="Vulnerability">Vul</th>
                <th>Cost</th>
            </tr>
            <tr v-for="unit in race" :key="unit.id">
                <td>{{unit.name}}</td>
                <td>{{unit.tier}}</td>
                <td>{{unit.combat}}</td>
                <td>{{unit.hits}}</td>
                <td>{{unit.speed}}</td>
                <td>{{unit.view}}</td>
                <td>{{unit.damage}}</td>
                <td>{{unit.range}}</td>
                <td>
                    <DamageType :type="unit.damageType"></DamageType>
                </td>
                <td>{{unit.attackType}}</td>
                <td>{{unit.armour}}</td>
                <td>{{unit.resistance}}</td>
                <td>
                    <DamageType class="d-block" v-for="res in unit.resilience" :key="res" :type="res"></DamageType>
                </td>
                <td>
                    <DamageType class="d-block" v-for="vul in unit.vulnerability" :key="vul" :type="vul"></DamageType>
                </td>
                <td>
                    <Price v-bind="unit.production"></Price>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
  import DamageType from './DamageType'
  import Price from './Price'

  export default {
    name: 'Races',
    components: {Price, DamageType},
    computed: {
      race () {
        const name = this.$store.state.currentRaceName
        if (name) {
          const race = this.$store.state.races.filter(r => r.name === name)[0]
          const raceUnits = race.units
          raceUnits.sort((a, b) => a.tier - b.tier)
          const units = []
          for (const ru of raceUnits) {
            const unit = this.$store.state.units.filter(u => u.id === ru.id)[0]
            units.push({...unit, tier: ru.tier})
          }

          return units
        } else {
          return false
        }
      }
    }
  }
</script>

<style scoped>
    .d-block {
        display: block;
    }
</style>
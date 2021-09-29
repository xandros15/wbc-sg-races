<template>
    <div>
        <table class="table tableFixHead" :class="{'table-dark': dark}" v-if="race">
            <thead :class="{'thead-dark': dark}">
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Tier</th>
                <th scope="col">Combat</th>
                <th scope="col">Hits</th>
                <th scope="col">Speed</th>
                <th scope="col">View</th>
                <th scope="col">Damage</th>
                <th scope="col">Range</th>
                <th scope="col">DType</th>
                <th scope="col">AType</th>
                <th scope="col">Armour</th>
                <th scope="col">Resistance</th>
                <th scope="col" title="Resilience">Res</th>
                <th scope="col" title="Vulnerability">Vul</th>
                <th scope="col">Cost</th>
            </tr>
            </thead>
            <tbody>
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
            </tbody>
        </table>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  import DamageType from './DamageType'
  import Price from './Price'

  export default {
    name: 'Races',
    components: {Price, DamageType},
    computed: {
      ...mapState(['dark']),
      race () {
        const name = this.$store.state.currentRaceName
        if (name) {
          const race = this.$store.state.races.filter(r => r.name === name)[0]
          const raceUnits = race.units
          raceUnits.sort((a, b) => a.tier - b.tier)
          const units = []
          for (const ru of raceUnits) {
            const unit = this.$store.state.units.filter(u => u.id === ru.id)[0]
            if (ru.production) {
              unit.production = {...unit.production, ...ru.production}
            }
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
    .table {
        margin-bottom: 0;
    }

    .tableFixHead { overflow-y: auto; height: 100px; }
    .tableFixHead thead th { position: sticky; top: 0; }

    /* Just common table stuff. Really. */
    table { border-collapse: collapse; width: 100%; }
    th, td { padding: 8px 16px; }
    th { background: #eee; }
</style>
<template>
    <div>
        <table v-if="unit">
            <tr>
                <th>Name</th>
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
                <th>Resilience</th>
                <th>Vulnerability</th>
                <th>Cost</th>
            </tr>
            <tr>
                <td>{{unit.name}}</td>
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
    name: 'Unit',
    components: {Price, DamageType},
    computed: {
      unit () {
        const id = this.$store.state.currentUnitId
        if (id) {
          return this.$store.state.units.filter(u => u.id === id)[0]
        } else {
          return false
        }
      }
    }
  }
</script>

<style scoped>
    td, table {
        border: 1px solid black
    }
    td {
        padding: .3rem
    }
    .d-block {
        display: block;
    }
</style>
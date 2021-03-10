<template>
    <span>{{mapped}}</span>
</template>

<script>
  const map = {
    'slashing': '⚔️',
    'crushing': '🔨',
    'piercing': '🗡️',
    'fire': '🔥',
    'cold': '❄️',
    'electricity': '⚡',
    'magic': '📖'
  }

  export default {
    props: {type: {require: true, type: String}},
    name: 'DamageType',
    computed: {
      mapped () {
        return map[this.type] || '-'
      }
    }
  }
</script>

<style scoped>
</style>

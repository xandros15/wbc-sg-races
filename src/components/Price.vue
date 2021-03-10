<template>
    <span>
        {{gold}}💰<br>
        {{metal}}🛡️<br>
        {{stone}}🗿<br>
        {{crystal}}💎<br>
        {{time}}⏳
    </span>
</template>

<script>
  export default {
    name: 'Price',
    props: {
      gold: {required: true, type: Number},
      metal: {required: true, type: Number},
      stone: {required: true, type: Number},
      crystal: {required: true, type: Number},
      time: {required: true, type: Number},
    },
  }
</script>

<style scoped>

</style>
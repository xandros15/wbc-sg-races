<template>
    <div class="d-flex justify-content-end">
        <button @click.prevent="toggleTheme" class="btn theme-change-button"
                :class="{'btn-light': dark, 'btn-outline-dark': !dark}">
            <img class="img-fluid" v-if="dark" alt="sun" src="../assets/icons8-sun-24.png">
            <img class="img-fluid" v-else alt="moon" src="../assets/icons8-moon-symbol-30.png">
        </button>
    </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'

  export default {
    name: 'ChangeTheme',
    computed: mapState(['dark']),
    methods: mapMutations(['toggleTheme']),
  }
</script>

<style scoped>
    .theme-change-button {
        max-height: 40px;
        max-width: 40px;
        margin-right: 1rem;
    }
</style>

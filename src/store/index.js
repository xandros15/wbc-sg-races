import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    units: [],
    races: [],
    currentUnitId: '',
    currentRaceName: '',
  },
  mutations: {
    setUnits (store, units) {
      store.units = units
    },
    setUnitId (store, id) {
      store.currentUnitId = id
    },
    setRaceName (store, name) {
      store.currentRaceName = name
    },
    setRaces (store, races) {
      store.races = races
    },
  },
  actions: {
    loadData ({commit}) {
      try {
        fetch('./units.json')
          .then(r => r.json())
          .then(units => commit('setUnits', units))
          .catch(e => alert(e))
        fetch('./races.json')
          .then(r => r.json())
          .then(races => commit('setRaces', races))
          .catch(e => alert(e))
      } catch (e) {
        alert(e)
      }
    }
  },
  modules: {}
})

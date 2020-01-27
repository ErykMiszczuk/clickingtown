import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    saves: [],
    saveId: null,
  },
  mutations: {
    newSave(state, payload) {
      console.warn(payload)
      state.saves.push(
        {
          name: payload.name,
          resources: {
            food: 0,
            materials: 0,
            weapons: 0,
            culture: 0,
            knowledge: 0,
          },
          buildings: []
        }
      )
    },
    setSaves(state, payload) {
      state.saves = payload.saves
    }
  },
  actions: {
    createNewSave({ commit, dispatch }, payload) {
      commit('newSave', payload);
      dispatch('setSavesInLocalStorage');
    },
    getSavesFromLocalStorage({commit, state}) {
      const localStorage = window.localStorage;
      const saves = JSON.parse(localStorage.getItem('saves'));
      if (saves) {
        commit('setSaves', {saves});
      }
    },
    setSavesInLocalStorage({commit, state}) {
      const localStorage = window.localStorage;
      const saves = JSON.stringify(state.saves);
      if (saves) {
        localStorage.setItem('saves', saves);
      }
    }
  }
});

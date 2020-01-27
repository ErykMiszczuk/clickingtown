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
    getSavesFromLocalStorage({commit, state}) {
      const localStorage = window.localStorage;
      const saves = JSON.parse(localStorage.getItem('saves'));
      commit('setSaves', {saves});
    },
    setSavesInLocalStorage({commit, state}) {
      const localStorage = window.localStorage;
      const saves = JSON.parse(state.saves);
      localStorage.setItem('saves', saves);
    }
  }
});

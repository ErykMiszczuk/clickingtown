import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    saves: [],
    saveId: null,
    resources: {
      food: 0,
      materials: 0,
      weapons: 0,
      culture: 0,
      knowledge: 0,
    },
    buildings: []
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
    setSaveDataFromSaves(state, payload) {
      state.saveId = payload.saveId;
      state.resources = state.saves[payload.saveId].resources;
      state.buildings = state.saves[payload.saveId].buildings;
    },
    updateSaveDataInSaves(state) {
      state.saves[state.saveId].resources = state.resources;
      state.saves[state.saveId].buildings = state.buildingsl
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
    postSavesToLocalStorage({commit, state}) {
      const localStorage = window.localStorage;
      const saves = JSON.parse(state.saves);
      localStorage.setItem('saves', saves);
    }
  }
});

import Vue from "vue";
import Vuex from "vuex";
import * as R from "ramda";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    saves: [],
    saveId: null,
  },
  mutations: {
    newSave(state, payload) {
      state.saves.push({
        name: payload.name,
        resources: {
          food: 0,
          materials: 0,
          weapons: 0,
          culture: 0,
          knowledge: 0
        },
        buildings: []
      });
    },
    deleteSave(state, payload) {
      let saves = state.saves;
      let filteredSaves = saves.filter(el => el.name != payload.name);
      state.saves = filteredSaves;
    },
    setSaves(state, payload) {
      state.saves = payload.saves;
    },
    setCurrentSave(state, payload) {
      state.saveId = payload.saveId;
    },
    addFoodResource(state, payload) {
      let saveId = state.saveId;
      state.saves[saveId].resources.food += payload.value;
    },
    addWeaponsResource(state, payload) {
      let saveId = state.saveId;
      state.saves[saveId].resources.weapons += payload.value;
    },
    addKnowledgeResource(state, payload) {
      let saveId = state.saveId;
      state.saves[saveId].resources.knowledge += payload.value;
    },
    addMaterialsResource(state, payload) {
      let saveId = state.saveId;
      state.saves[saveId].resources.materials += payload.value;
    },
    addCultureResource(state, payload) {
      let saveId = state.saveId;
      state.saves[saveId].resources.culture += payload.value;
    }
  },
  actions: {
    async createNewSave({ commit, dispatch }, payload) {
      commit("newSave", payload);
      await dispatch("setSavesInLocalStorage");
    },
    async deleteSaveGame({ commit, dispatch }, payload) {
      commit("deleteSave", payload);
      await dispatch("setSavesInLocalStorage");
    },
    async setSaveAsCurrentGame({ commit }, payload) {
      commit("setCurrentSave", payload);
    },
    async getSavesFromLocalStorage({ commit, state }) {
      const localStorage = window.localStorage;
      const saves = JSON.parse(localStorage.getItem("saves"));
      if (saves) {
        commit("setSaves", { saves });
      }
    },
    async setSavesInLocalStorage({ commit, state }) {
      const localStorage = window.localStorage;
      const saves = JSON.stringify(state.saves);
      if (saves) {
        localStorage.setItem("saves", saves);
      }
    }
  }
});

import Vue from "vue";
import Vuex from "vuex";
import * as R from "ramda";

Vue.use(Vuex);

import buildingsList from "./data/BuildingsList";

export default new Vuex.Store({
  state: {
    saves: [],
    saveId: null,
  },
  mutations: {
    newSave(state, payload) {
      state.saves.push({
        name: payload.name,
        townLevel: 0,
        resources: {
          food: 10,
          materials: 10,
          weapons: 10,
          culture: 10,
          knowledge: 10
        },
        buildings: buildingsList.slice(0, 5)
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
    },
    addAllResources(state, payload) {
      let saveId = state.saveId;
      state.saves[saveId].resources = payload;
    },
    addBuildingLevel(state, payload) {
      let save = state.saves[state.saveId];
      let buildingsList = save.buildings;
      let index = R.findIndex(R.propEq("name", payload.buildingName))(
        buildingsList
      );
      if (index != -1) {
        if (
          save.resources.food >= buildingsList[index].resourcesRequired.food &&
          save.resources.weapons >=
            buildingsList[index].resourcesRequired.weapons &&
          save.resources.culture >=
            buildingsList[index].resourcesRequired.culture &&
          save.resources.materials >=
            buildingsList[index].resourcesRequired.materials &&
          save.resources.knowledge >=
            buildingsList[index].resourcesRequired.knowledge
        ) {
          //Add building level
          buildingsList[index].level += 1;
          //Remove items from inventory
          const { food, weapons, culture, materials, knowledge } = buildingsList[index].resourcesRequired;
          save.resources.food -= food;
          save.resources.weapons -= weapons;
          save.resources.culture -= culture;
          save.resources.materials -= materials;
          save.resources.knowledge -= knowledge;
          //Add town level
          save.townLevel += 1;
          //Increment building cost
          buildingsList[index].resourcesRequired.food = newRequiredresources(buildingsList[index].level, food);
          buildingsList[index].resourcesRequired.weapons = newRequiredresources(buildingsList[index].level, weapons);
          buildingsList[index].resourcesRequired.culture = newRequiredresources(buildingsList[index].level, culture);
          buildingsList[index].resourcesRequired.materials = newRequiredresources(buildingsList[index].level, materials);
          buildingsList[index].resourcesRequired.knowledge = newRequiredresources(buildingsList[index].level, knowledge);
        }
      }
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
    async upgradeBuilding({ commit }, payload) {
      commit("addBuildingLevel", payload);
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
    },
    async collectResources({ commit, state }) {
      const { saves, saveId } = state;
      const currentResources = saves[saveId].resources;
      const buildingsList = saves[saveId].buildings;
      let producedResources = buildingsList.map(el => {
        let material = el.produces.substring(4);
        return [material, levelBasedAmountOfResourcesProduced(el.level)];
      });
      let obj = {};
      producedResources.map(el => {
        obj[el[0]] = el[1];
      });
      producedResources = obj;
      let resourcesSum = {
        food: currentResources.food + producedResources.food,
        materials: currentResources.materials + producedResources.materials,
        weapons: currentResources.weapons + producedResources.weapons,
        culture: currentResources.culture + producedResources.culture,
        knowledge: currentResources.knowledge + producedResources.knowledge,
      }
      commit("addAllResources", resourcesSum);
    }
  }
});


function newRequiredresources(buildingLevel, resource) {
  return Math.floor((Math.pow(buildingLevel,2)/4) + resource)
}

function levelBasedAmountOfResourcesProduced(buildingLevel) {
  return Math.floor((Math.pow(buildingLevel, 3)/8)) + 1;
}
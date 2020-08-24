<template>
  <div class="gameMap">
    <div class="gameBackground"></div>
    <div class="gameTiles">
      <BuildingTile @gather="handleGather" v-for="(building, key) in listOfVisibleBuildingTiles" :key="key" :buildingData="building" />
    </div>
  </div>
</template>

<script>
import BuildingTile from "@/components/BuildingTile.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "GameMap",
  components: {
    BuildingTile
  },
  methods: {
    handleGather(e) {
      if (e == "itr_food") {
        this.addFoodResource({ value: 1 });
      } else if (e == "itr_culture") {
        this.addCultureResource({ value: 1 });
      } else if (e == "itr_materials") {
        this.addMaterialsResource({ value: 1 });
      } else if (e == "itr_weapons") {
        this.addWeaponsResource({ value: 1 });
      } else if (e == "itr_knowledge") {
        this.addKnowledgeResource({ value: 1 });
      }
    },
    ...mapMutations([
      "addFoodResource",
      "addWeaponsResource",
      "addKnowledgeResource",
      "addMaterialsResource",
      "addCultureResource"
    ]),
  },
  computed: {
    listOfVisibleBuildingTiles() {
      return this.saves[this.saveId].buildings.filter(el => el.level > 0);
    },
    ...mapState({
      saves: state => state.saves,
      saveId: state => state.saveId
    })
  }
};
</script>

<style lang="scss" scoped>

.gameBackground {
  background: rgb(120,180,255);
  background: radial-gradient(circle, rgba(120,180,255,1) 0%, rgba(67,147,255,1) 100%);
  overflow: hidden;
  width: 100%;
  height: 100vh;
}

.gameTiles {
  position: absolute;
  width: 240px;
  height: 3*140px;
  top: 0;
  left: 0;
}

</style>

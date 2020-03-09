<template>
  <div class="gameMap">
    <div class="gameBackground"></div>
    <BuildingTile @gather="handleGather" v-for="(building, key) in listOfVisibleBuildingTiles" :key="key" :buildingData="building" />
    <!-- <BuildingTile class="gameMap__tile--one"  @gather="handleGather">
      <img class="tile__image" src="@/assets/tiles/medieval_house.png" alt="Cabin" />
    </BuildingTile>
    <BuildingTile class="gameMap__tile--two" resourceProduced="itr_weapons" @gather="handleGather">
      <img class="tile__image" src="@/assets/tiles/medieval_openCastle.png" alt="Castle" />
    </BuildingTile>
    <BuildingTile class="gameMap__tile--three" resourceProduced="itr_materials" @gather="handleGather">
      <img class="tile__image" src="@/assets/tiles/medieval_mine.png" alt="Mine" />
    </BuildingTile>
    <BuildingTile class="gameMap__tile--four" resourceProduced="itr_food" @gather="handleGather">
      <img class="tile__image" src="@/assets/tiles/medieval_farm.png" alt="Farm" />
    </BuildingTile>
    <BuildingTile class="gameMap__tile--five" resourceProduced="itr_knowledge" @gather="handleGather">
      <img class="tile__image" src="@/assets/tiles/medieval_church.png" alt="Church" />
    </BuildingTile> -->
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
.gameMap {
  background-color: magenta;
}

.gameBackground {
  position: absolute;
  top: -10px;
  left: -10px;
  background: rgb(30,24,137);
  background: linear-gradient(31deg, rgba(30,24,137,1) 0%, rgba(12,203,214,1) 35%, rgba(56,165,7,1) 63%, rgba(56,165,7,1) 100%);
  background: url("./../assets/map_background.png");
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-position: -115px -100px;
}
</style>

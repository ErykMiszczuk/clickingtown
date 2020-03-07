<template>
  <div class="gameMap">
    <div class="gameBackground"></div>
    <BuildingTile class="gameMap__tile--one" resourceProduced="itr_culture">
      <img class="tile__image" src="@/assets/tiles/medieval_house.png" alt="Cabin" />
    </BuildingTile>
    <BuildingTile class="gameMap__tile--two" resourceProduced="itr_wepons">
      <img class="tile__image" src="@/assets/tiles/medieval_openCastle.png" alt="Castle" />
    </BuildingTile>
    <BuildingTile class="gameMap__tile--three" resourceProduced="itr_materials">
      <img class="tile__image" src="@/assets/tiles/medieval_mine.png" alt="Mine" />
    </BuildingTile>
    <BuildingTile class="gameMap__tile--four" resourceProduced="itr_food">
      <img class="tile__image" src="@/assets/tiles/medieval_farm.png" alt="Farm" />
    </BuildingTile>
    <BuildingTile class="gameMap__tile--five" resourceProduced="itr_knowledge">
      <img class="tile__image" src="@/assets/tiles/medieval_church.png" alt="Church" />
    </BuildingTile>
  </div>
</template>

<script>
import BuildingTile from "@/components/BuildingTile.vue";
export default {
  name: "GameMap",
  components: {
    BuildingTile
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

.gameMap__tile {
  &--one {
    @extend .gameMap__tile;
    left: 355px;
    top: 310px;
  }

  &--two {
    @extend .gameMap__tile;
    left: 535px;
    top: 415px;
  }

  &--three {
    @extend .gameMap__tile;
    left: 295px;
    top: 204px;
  }

  &--four {
    @extend .gameMap__tile;
    left: 295px;
    top: 415px;
  }

  &--five {
    @extend .gameMap__tile;
    left: 535px;
    top: 204px;
  }
}

.tile__image {
  width: 100%;
  height: 100%;

  &:hover {
    animation: building_selected 2s infinite;
  }
}

@keyframes building_selected {
  0% {
    filter: brightness(1) saturate(130%);
  }
  50% {
    filter: brightness(1.3) saturate(160%);
  }
  100% {
    filter: brightness(1) saturate(130%);
  }
}
</style>

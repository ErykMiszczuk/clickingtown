<template>
  <div class="gameMap">
    <div class="gameMap__tile--one" @click="$emit('gather','itr_culture')">
      <img class="tile__image" src="./../assets/tiles/medieval_house.png" alt="Cabin" />
    </div>
    <div class="gameMap__tile--two" @click="$emit('gather','itr_weapons')">
      <img class="tile__image" src="./../assets/tiles/medieval_openCastle.png" alt="Cabin" />
    </div>
    <div class="gameMap__tile--three" @click="$emit('gather','itr_materials')">
      <img class="tile__image" src="./../assets/tiles/medieval_mine.png" alt="Cabin" />
    </div>
    <div class="gameMap__tile--four" @click="$emit('gather','itr_food')">
      <img class="tile__image" src="./../assets/tiles/medieval_farm.png" alt="Cabin" />
    </div>
    <div class="gameMap__tile--five" @click="$emit('gather','itr_knowledge')">
      <img class="tile__image" src="./../assets/tiles/medieval_church.png" alt="Cabin" />
    </div>
  </div>
</template>

<script>
export default {
  name: "GameMap"
};
</script>

<style lang="scss" scoped>
.gameMap {
  background-color: magenta;
}

.gameMap__tile {
  position: absolute;
  width: 100px;
  height: 110px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

  &--one {
    @extend .gameMap__tile;
    left: 100px;
  }

  &--two {
    @extend .gameMap__tile;
    left: 150px;
    top: 83px;
  }

  &--three {
    @extend .gameMap__tile;
    left: 50px;
    top: 83px;
  }

  &--four {
    @extend .gameMap__tile;
    left: 100px;
    top: 166px;
  }

  &--five {
    @extend .gameMap__tile;
    left: 200px;
    top: 166px;
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

<template>
  <div class="buildingTile" @click="$emit('gather', resourceProduced)">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BuildingTile",
  props: {
    resourceProduced: String
  }
}
</script>

<style>
.buildingTile {
  position: absolute;
  width: 120px;
  height: 140px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
</style>
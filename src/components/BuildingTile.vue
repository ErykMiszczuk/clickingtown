<template>
  <div class="buildingTile" @click="$emit('gather', resourceProduced)">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BuildingTile",
  data() {
    return {
      time: null,
      gatherTimer: null
    }
  },
  props: {
    resourceProduced: String
  },
  methods: {
    tick(currentTime) {
      let saveEveryAmountOfSeconds = 10000;
      if (!this.time) this.time = currentTime;
      let delta = currentTime - this.time;
      if (delta > saveEveryAmountOfSeconds) {
        this.time = 0;
        this.$emit('gather', this.resourceProduced);
      }
      window.requestAnimationFrame(this.tick)
    }
  },
  created() {
    this.gatherTimer = window.requestAnimationFrame(this.tick)
  },
  destroyed() {
    window.cancelAnimationFrame(this.gatherTimer)
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
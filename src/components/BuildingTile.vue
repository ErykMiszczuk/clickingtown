<template>
  <div class="buildingTile" @click="$emit('gather', buildingData.produces)" :style="cssStyles">
    <img class="tile__image" :src="buildingData.imgPath" :alt="buildingData.name">
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
    buildingData: Object
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
  computed: {
    cssStyles() {
      return {
        '--pos-x': this.buildingData.position.x + "px",
        '--pos-y': this.buildingData.position.y + "px"
      }
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

<style lang="scss">
.buildingTile {
  position: absolute;
  top: var(--pos-y);
  left: var(--pos-x);
  width: 120px;
  height: 140px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
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
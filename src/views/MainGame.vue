<template>
  <div class="mainGame">
    <GameMap class="mapPanel" @gather="handleGather" />
    <ResourcesBar class="resourcesPanel"/>
    <BuildingsList class="buildingsPanel"/>
  </div>
</template>

<script>
import GameTextButton from "@/components/GameTextButton.vue";
import GameMap from "@/components/GameMap.vue";
import ResourcesBar from '@/components/ResourcesBar.vue';
import BuildingsList from "@/components/BuildingsList.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "MainGame",
  data() {
    return {
      time: null,
      mainTimer: undefined,
      resourceGaterTime: null,
      eventsHandlerList: {
        blur: null,
        resize: null,
      }
    };
  },
  components: {
    GameTextButton,
    GameMap,
    ResourcesBar,
    BuildingsList
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
    tick(currentTime) {
      let saveEveryAmountOfSeconds = 1500;
      if (!this.time) this.time = currentTime;
      if (!this.resourceGaterTime) this.resourceGaterTime = currentTime;
      let delta = currentTime - this.time;
      if (delta > saveEveryAmountOfSeconds) {
        this.time = 0;
        this.setSavesInLocalStorage();
      }
      window.requestAnimationFrame(this.tick)
    },
    ...mapMutations([
      "addFoodResource",
      "addWeaponsResource",
      "addKnowledgeResource",
      "addMaterialsResource",
      "addCultureResource"
    ]),
    ...mapActions([
      "setSavesInLocalStorage"
    ])
  },
  computed: mapState({
    saves: state => state.saves,
    saveId: state => state.saveId
  }),
  created() {
    this.mainTimer = window.requestAnimationFrame(this.tick);
    this.eventsHandlerList.blur = window.addEventListener('blur', this.setSavesInLocalStorage);
    this.eventsHandlerList.resize = window.addEventListener('resize', this.setSavesInLocalStorage);
  },
  destroyed() {
    window.cancelAnimationFrame(this.mainTimer);
    this.mainTimer = undefined;
    window.removeEventListener('blur', this.setSavesInLocalStorage);
    window.removeEventListener('resize', this.setSavesInLocalStorage);
    this.eventsHandlerList.blur = null;
    this.eventsHandlerList.resize = null;
  }
};
</script>

<style lang="scss">
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

.buildingsPanel {
  max-width: 50vw;
  max-height: 75vh;
  min-height: 50vh;
  position: absolute;
  bottom: 0;
  right: 0;
  overflow-y: scroll;
}

.resourcesPanel {
  position: absolute;
  top: 0;
  right: 0;
}

.mapPanel {
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>

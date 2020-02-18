<template>
  <div class="mainGame">
    <GameMap @gather="handleGather" />
  </div>
</template>

<script>
import GameTextButton from "@/components/GameTextButton.vue";
import GameMap from "@/components/GameMap.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "MainGame",
  data() {
    return {
      time: null,
      mainTimer: undefined,
      resourceGaterTime: null,
      eventsHandlerList: {
        blur: null
      }
    };
  },
  components: {
    GameTextButton,
    GameMap
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
      let saveEveryAmountOfSeconds = 15000;
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
    saves: state => state.saves
  }),
  created() {
    this.mainTimer = window.requestAnimationFrame(this.tick);
    this.eventsHandlerList.blur = window.addEventListener('blur', this.setSavesInLocalStorage());
  },
  destroyed() {
    window.cancelAnimationFrame(this.mainTimer);
    this.mainTimer = undefined;
  }
};
</script>

<style lang="scss">
@import "../styles/mixins.scss";
@import "../styles/variables.scss";
</style>

<template>
  <div class="mainGame">
    <GameMap @gather="handleGather"/>
  </div>
</template>

<script>
import GameTextButton from "@/components/GameTextButton.vue";
import GameMap from "@/components/GameMap.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "MainGame",
  components: {
    GameTextButton,
    GameMap
  },
  methods: {
    handleGather(e) {
      if (e == 'itr_food') {this.addFoodResource({value: 1})}
      else if (e == 'itr_culture') {this.addCultureResource({value: 1})}
      else if (e == 'itr_materials') {this.addMaterialsResource({value: 1})}
      else if (e == 'itr_weapons') {this.addWeaponsResource({value: 1})}
      else if (e == 'itr_knowledge') {this.addKnowledgeResource({value: 1})}
    },
    ...mapMutations([
      "addFoodResource",
      "addWeaponsResource",
      "addKnowledgeResource",
      "addMaterialsResource",
      "addCultureResource"
    ])
  },
  computed: mapState({
    saves: state => state.saves
  })
};
</script>

<style lang="scss">
@import "../styles/mixins.scss";
@import "../styles/variables.scss";
</style>

<template>
  <div class="mainGame">
    <GameMap />
  </div>
</template>

<script>
import GameTextButton from "@/components/GameTextButton.vue";
import GameMap from "@/components/GameMap.vue";
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: "MainGame",
  components: {
    GameTextButton
  },
  data() {
    return 
  },
  computed: mapState({
    saves: state => state.saves,
  })
};
</script>

<style lang="scss">
@import "../styles/mixins.scss";
@import "../styles/variables.scss";
</style>

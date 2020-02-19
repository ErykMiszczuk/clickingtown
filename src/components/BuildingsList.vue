<template>
  <ul class="buildingsList">
    <li
      class="buildingsList__building"
      v-for="(value, key) in saves[saveId].buildings"
      :key="key"
    >
      <div class="building__name">
        {{ value.name.toUpperCase() }} Level {{ value.level }}
      </div>
      <ul class="building__requiredResources">
        <li
          class="requiredResources__item"
          v-for="(value, name) in value.resourcesRequired"
          :key="name"
        >
          <span class="resourcesItem__name">
            {{ name }}
          </span>
          <span class="resourcesItem__value">
            {{ value }}
          </span>
        </li>
      </ul>
      <div class="buildingOptions">
        <GameTextButton accept @click="handleUpgrade(value.name)">
          Upgrade
        </GameTextButton>
      </div>
    </li>
  </ul>
</template>

<script>
import ResourceItem from "@/components/ResourceItem.vue";
import GameTextButton from "@/components/GameTextButton.vue";
import { mapState, mapMutations, mapActions } from "vuex";
import * as R from "ramda";

export default {
  name: "BuildingsList",
  components: {
    ResourceItem,
    GameTextButton
  },
  methods: {
    handleUpgrade(buildingName) {
      this.upgradeBuilding({ buildingName: buildingName })
    },
    ...mapActions([
      'upgradeBuilding'
    ])
  },
  computed: mapState(["saves", "saveId"])
};
</script>

<style lang="scss">
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

.buildingsList {
  @include borderUiMixin($interactiveBlueAccent, $interactiveBlueBackground);
  @include basicTextMixin;
  list-style-type: none;
  margin: 0;
  padding: 0.5em;
}

.buildingsList__building {
  @include borderUiMixin($interactiveBlueAccent, $interactiveBlueBackground);
  padding: 0.5em;
  display: block;
  margin-bottom: 0.5em;
}

.building__requiredResources {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: nowrap;
}

.requiredResources__item {
  margin-right: 0.5em;
}
</style>

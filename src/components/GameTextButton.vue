<template>
  <div class="gameTextButton" v-on:click="$emit('click', $event)">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GameTextButton",
  // props: {
  //   msg: String
  // }
};
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

.gameTextButton {
  @include borderUiMixin($interactiveBlueAccent, $interactiveBlueBackground);
  padding: .5em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-stroke: 2px rgba(11, 11, 11, 1);
  text-shadow: 0 0 4px rgba(11, 11, 11, 1);
  text-transform: uppercase;
  text-align: center;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    @include borderUiMixin($acceptGreenAccent, $acceptGreenBackground);
  }
}
.--verticalDivide {
  margin-bottom: .5em;
}

</style>

<template>
  <div :class="btnStyle" @click="$emit('click', $event)">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GameTextButton",
  props: {
    inactive: Boolean,
    danger: Boolean,
    accept: Boolean
  },
  computed: {
    btnStyle() {
      if (this.inactive) return "gameTextButton--inactive";
      else if (this.danger) return "gameTextButton--danger";
      else if (this.accept) return "gameTextButton--accept";
      else return "gameTextButton";
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

.gameTextButton {
  @include borderUiMixin($interactiveBlueAccent, $interactiveBlueBackground);
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-stroke: 2px rgba(11, 11, 11, 1);
  text-shadow: 0 0 4px rgba(11, 11, 11, 1);
  text-transform: uppercase;
  text-align: center;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  cursor: pointer;

  &--inactive {
    @extend .gameTextButton;
    @include borderUiMixin($inactiveGreyAccent, $inactiveGreyBackground);

    &:hover {
      @include borderUiMixin($inactiveGreyAccent, $inactiveGreyAccent);
    }
  }

  &--danger {
    @extend .gameTextButton;
    @include borderUiMixin($dangerRedAccent, $dangerRedBackground);

    &:hover {
      @include borderUiMixin($dangerRedAccent, $dangerRedAccent);
    }
  }

  &--accept {
    @extend .gameTextButton;
    @include borderUiMixin($acceptGreenAccent, $acceptGreenBackground);

    &:hover {
      @include borderUiMixin($acceptGreenAccent, $acceptGreenAccent);
    }
  }
}
.--verticalDivide {
  margin-bottom: 0.5em;
}
</style>

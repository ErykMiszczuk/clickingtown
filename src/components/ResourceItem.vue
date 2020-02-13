<template>
  <div class="resourceItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ResourceItem",
}
</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

.resourceItem {
  @include borderUiMixin($interactiveBlueAccent, $interactiveBlueBackground);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}
</style>
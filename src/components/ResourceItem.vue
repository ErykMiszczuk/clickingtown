<template>
  <li class="resourceItem">
    <slot></slot>
  </li>
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
  @include basicTextMixin;
  padding: 0.25em;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}
</style>
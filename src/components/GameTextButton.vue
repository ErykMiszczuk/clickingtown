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
.gameTextButton {
  border-radius: .5em;
  border-color: rgb(7, 33, 150);
  background-color: rgba(7, 33, 150, 0.75);
  border-style: solid;
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
    border-color: rgb(31, 150, 7);
    background-color: rgba(31, 150, 7, 0.75);
  }
}
.--verticalDivide {
  margin-bottom: .5em;
}

</style>

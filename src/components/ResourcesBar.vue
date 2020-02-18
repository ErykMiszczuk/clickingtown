<template>
  <ul class="resourcesBar">
    <ResourceItem v-for="(value, name) in saves[saveId].resources" :key="name">
      <span>{{ name }}</span>
      <span class="resource__value">{{ value }}</span>
    </ResourceItem>
  </ul>
</template>

<script>
import ResourceItem from '@/components/ResourceItem.vue';
import { mapState } from 'vuex';

export default {
  name: "ResourcesBar",
  components: {
    ResourceItem
  },
  computed: mapState({
    saves: state => state.saves,
    saveId: state => state.saveId
  })
}
</script>

<style lang="scss" scoped>
.resourcesBar {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: nowrap;
}
.resource__value {
  min-width: 4em;
  text-align: right;
}
</style>
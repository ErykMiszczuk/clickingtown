<template>
    
</template>

<script>
import ResourceItem from './ResourceItem';
import { mapState } from 'vuex';

export default {
  name: "ResourcesBar",
  components: {
    ResourceItem
  },
  computed: mapState({
    saves: state => state.saves,
    saveId: state => state.saves
  })
}
</script>

<style lang="scss" scoped>

</style>
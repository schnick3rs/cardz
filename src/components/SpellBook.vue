<template>
  <div class="spellbook">
    <div v-for="spell in spellRepository" :key="spell.name" class="spellbock__spell-card">
      <spell-card :spell="spell" ></spell-card>
    </div>
  </div>
</template>

<script>
  import SpellCard from './templates/SpellCard/SpellCard'
  import SpellRepository from '../assets/repositories/dnd-spells-migrated.json'
  export default {
  name: 'SpellBook',
  components: {SpellCard},
  data () {
    return {
      spellRepository: SpellRepository,
      spellBook: []
    }
  }
}
</script>

<style scoped>
.spellbock__spell-card {
  float: left;
}
</style>

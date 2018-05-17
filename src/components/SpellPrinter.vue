<template>
  <div class="spellbook">
    <div v-for="spell in spellBook" :key="spell.name" class="spellbock__spell-card">
      <spell-card :spell="spell" ></spell-card>
    </div>
  </div>
</template>

<script>
  import SpellCard from './SpellCard'
  import SpellRepository from '../assets/cardz-spell-repository.json'
  export default {
  name: 'SpellPrinter',
  components: {SpellCard},
  props: {
    spellsHash: { type: String }
  },
  data () {
    return {
      spellRepository: SpellRepository
    }
  },
  computed: {
    spellBook: function() {
      var spellHashArray = this.spellsHash.match(/.{1,4}/g)
      return this.spellRepository.filter(function(item){
        return spellHashArray.indexOf(item.id) >= 0
      })
    }
  }
}
</script>

<style scoped>
.spellbock__spell-card {
  float: left;
}
.spellbock__spell-card {
  display: block;
  page-break-inside: avoid;
}
</style>

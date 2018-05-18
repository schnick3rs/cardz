<template>
  <div class="page spellbook">
    <div>
      <select v-model="selectedTheme">
        <option v-for="(value, key) in themeOptions" :key="key" v-bind:value="key">{{ value }}</option>
      </select>
    </div>
    <div v-for="spell in spellBook" :key="spell.name" class="spellbock__spell-card">
      <spell-card :spell="spell" :theme="selectedTheme"></spell-card>
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
      selectedTheme: undefined,
      themeOptions: {
        druid: 'Druid',
        wizard: 'Wizard',
        sorcerer: 'Sorcerer',
        warlock: 'Warlock',
        ranger: 'Ranger',
        paladin: 'Paladin',
        warrior: 'Warrior'
      },
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

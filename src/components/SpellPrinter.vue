<template>
  <div>
    <div class="toolbar">
      <select v-model="selectedTheme">
        <option v-for="(value, key) in themeOptions" :key="key" v-bind:value="key">{{ value }}</option>
      </select>
      <input v-model="customTheme"/>
    </div>
    <div class="page">
      <spell-card class="page__card"
                  v-for="spell in spellBook" :key="spell.name"
                  :spell="spell" :theme="selectedTheme" :customTheme="customTheme"
      />
    </div>
  </div>
</template>

<script>
  import SpellCard from './SpellCard/SpellCard'
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
      customTheme: '',
      themeOptions: {
        druid: 'Druid',
        wizard: 'Wizard',
        sorcerer: 'Sorcerer',
        warlock: 'Warlock',
        ranger: 'Ranger',
        paladin: 'Paladin',
        warrior: 'Warrior'
      },
      spellRepository: SpellRepository,
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
  @media print {
    .toolbar {
      display: none;
    }
  }

  .page {
    page-break-inside: avoid;
  }

  .page__card {
  float: left;
  display: block;
  page-break-inside: avoid;
}
</style>

<template>
  <div>
    <section>
      <input v-model="searchQuery" placeholder="Enter spell name"/>
    </section>
    <section class="search-container">
      <section class="search-container__collumn search-results">
        <h3>Search results:</h3>
        <ul>
          <li
            v-for="spellz in searchResults"
            :key="spellz.name"
            @mouseover="preview(spellz)"
            @click="learnSpell(spellz)"
          >{{ spellz.name }}</li>
        </ul>
      </section>
      <section class="search-container__collumn spell-preview">
        <spell-card v-if="selectedSpell" :spell="selectedSpell"/>
      </section>
      <section class="search-container__collumn active-spell-book">
        <h3>Spellbook</h3>
        <input v-bind:value="spellHash" />
        <ul>
          <li v-for="spell in activeSpellBook" :key="spell.id">{{ spell.name }}</li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
  import SpellRepository from '../assets/cardz-spell-repository.json'
  import SpellCard from './SpellCard'

  export default {
  name: 'SpellSearch',
  components: {SpellCard},
  data () {
    return {
      searchQuery: '',
      selectedSpell: undefined,
      activeSpellBook: [],
      spellRepository: SpellRepository
    }
  },
  computed: {
    searchResults: function () {
      var query = this.searchQuery
      if (this.searchQuery.length > 0) {
        return this.spellRepository.filter(function (item) {
          return item.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) >= 0
        })
      }
      return []
    },
    spellHash: function () {
      var hash = ""
      for(var i = 0, len = this.activeSpellBook.length; i < len; i++) {
        hash += this.activeSpellBook[i].id
      }
      return hash
    }
  },
  methods: {
    preview: function (item, event) {
      this.selectedSpell = item
    },
    learnSpell: function (spellToLearn, event) {
      let duplicatedSpells = this.activeSpellBook.filter(function (learnedSpell) {
        if (learnedSpell.id === spellToLearn.id) return learnedSpell
      })
      if (duplicatedSpells.length === 0) {
        this.activeSpellBook.push(spellToLearn)
      }
    }
  }
}
</script>

<style scoped>
.search-container{
  float: left;
  width: 100%;
}
.search-container__collumn{
  float: left;
  width: 33%;
}
</style>

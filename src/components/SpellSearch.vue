<template>
  <div>
    <section class="search-box">
      <input v-model="searchQuery" placeholder="Enter spell name"/>
      <select v-model="selectedClass">
        <option v-for="(value, key) in clazzes" :key="key" v-bind:value="key" >{{ value }}</option>
      </select>
      <select v-model="selectedOrder">
        <option v-for="(value, key) in orderOptions" :key="key" v-bind:value="key" >{{ value }}</option>
      </select>
      <select v-model="selectedSource">
        <option v-for="(value, key) in sourceOptions" :key="key" v-bind:value="key" >{{ value }}</option>
      </select>
    </section>
    <section class="search-container">
      <section class="search-container__collumn search-results">
        <h3>Search results:</h3>
        <div class="spell-teaser-table">
          <div class="spell-teaser-item"
            v-for="spellz in searchResults"
            :key="spellz.name"
            @mouseover="preview(spellz)"
          >
            <span class="spell-teaser-item__icon spell-teaser-item__icon--info" >{{ spellz.level }}</span>
            <span class="spell-teaser-item__name">{{ spellz.name }}</span>
            <span class="spell-teaser-item__icon spell-teaser-item__icon--add" @click="learnSpell(spellz)" >+</span>
          </div>
        </div>

      </section>
      <section class="search-container__collumn spell-preview">
        <spell-card v-if="selectedSpell" :spell="selectedSpell"/>
      </section>
      <section class="search-container__collumn active-spell-book">
        <h3>Spellbook</h3>
        <input v-bind:value="spellHash" />
        <router-link :to="{ name: 'spellPrinter', params: { spellHash: spellHash } }">print</router-link>
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
  import SpellItemRow from "./SpellItemRow";
  export default {
  name: 'SpellSearch',
  components: {SpellItemRow, SpellCard},
  data () {
    return {
      searchQuery: '',
      selectedClass: '',
      selectedOrder: 'levelAsc',
      selectedSource: '',
      selectedSpell: undefined,
      activeSpellBook: [],
      spellRepository: SpellRepository,
      clazzes: { druid: 'Druid', wizard: 'Wizard', sorcerer: 'Sorcerer', warlock: 'Warlock', ranger: 'Ranger', paladin: 'Paladin' },
      orderOptions: { level: 'by level', name: "by name" },
      sourceOptions: { phb: 'Players Handbook'},
      filter: {}
    }
  },
  computed: {
    searchResults: function () {
      var query = this.searchQuery
      var clazz = this.selectedClass
      var source = this.selectedSource
      var searchResults = this.spellRepository

      if (source.length > 0) {
        searchResults = searchResults.filter(function (item) {
          return item.source.toLocaleLowerCase().indexOf(source.toLocaleLowerCase()) >= 0
        })
      }

      if (this.selectedClass.length > 0) {
        searchResults = searchResults.filter(function (item) {
          return item.class.toLocaleLowerCase().indexOf(clazz.toLocaleLowerCase()) >= 0
        })
      }

      if (this.searchQuery.length > 0) {
        searchResults = searchResults.filter(function (item) {
          return item.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) >= 0
        })
      }

      var comperatorString = this.selectedOrder
      if (this.selectedOrder.length > 0){
        searchResults.sort(function(a, b) {
          if (a[comperatorString] < b[comperatorString]) return -1
          if (a[comperatorString] > b[comperatorString]) return 1
          return 0
        })
      }

      return searchResults
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
.spell-teaser-table {
}
.spell-teaser-item {
  border-style: solid;
  border-color: black;
  border-width: 0.5px;
  border-radius: 5px;
  padding: 4px 8px;
  margin-bottom: 2px;

}
.spell-teaser-item__icon {
  color: white;
  background-color: forestgreen;
  width: 24px;
  vertical-align: middle;
  text-align: center;
  border-radius: 5px;
  display: inline-block;

  border-style: solid;
  border-width: 1px;
}
.spell-teaser-item__icon--add {
  content: '+';
  color: forestgreen;
  background-color: white;
  border-color: forestgreen;
  float: right;
}
.spell-teaser-item__icon--add:hover {
  content: '+';
  color: white;
  background-color: forestgreen;
  cursor: pointer;
}
.spell-teaser-item__icon--info {
  background-color: dodgerblue;
}
</style>

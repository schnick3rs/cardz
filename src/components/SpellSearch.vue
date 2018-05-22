<template>
  <div>
    <section class="search-box">
      <select v-model="selectedClass" multiple>
        <option v-for="(value, key) in clazzes" :key="key" v-bind:value="key" >{{ value }}</option>
      </select>
      <select v-model="selectedLevel" multiple>
        <option v-for="(value, key) in levelOptions" :key="key" v-bind:value="key">{{ value }}</option>
      </select>
      <select v-model="selectedSource">
        <option v-for="(value, key) in sourceOptions" :key="key" v-bind:value="key" >{{ value }}</option>
      </select>
      <div>
        <input v-bind:value="spellHash"/>
        <router-link :to="{ name: 'spellPrinter', params: { spellHash: spellHash } }">print</router-link>
      </div>
    </section>
    <section style="width: 50%; float: left;">
      <h3>Search results:</h3>
      <div style="margin-bottom: 10px;">
        <span>{{ searchResults.length }} spells found</span>
        <span class="spell-teaser-item__icon spell-teaser-item__icon--add spell-teaser-item__icon--all"
              @click="learnAllFiltered()">add all</span>
      </div>

      <md-table v-model="searched" md-sort="level" md-sort-order="asc" md-card>

        <md-table-toolbar>
          <div class="md-toolbar-section-start">
            <h1 class="md-title">Users</h1>
          </div>

          <md-field md-clearable class="md-toolbar-section-end">
            <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable"/>
          </md-field>
        </md-table-toolbar>

        <md-table-empty-state
          md-label="No spell found"
          :md-description="`No spell found, matching '${search}'. Try a different search term.`">
        </md-table-empty-state>

        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="Level" md-sort-by="level" md-numeric>{{ item.level }}</md-table-cell>
          <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
          <md-table-cell md-label="Action">
            <md-button class="md-icon-button md-raised md-dense" @click="preview(item)">
              <md-icon>search</md-icon>
            </md-button>
            <md-button class="md-icon-button md-primary md-raised md-dense" @click="learnSpell(item)">
              <md-icon>note_add</md-icon>
            </md-button>
          </md-table-cell>
        </md-table-row>

      </md-table>


    </section>
      <section class="search-container__collumn active-spell-book">
        <h3>Spellbook</h3>
        <div style="margin-bottom: 10px;">
          <span>contains {{ activeSpellBook.length }} spells</span>
          <span class="spell-teaser-item__icon spell-teaser-item__icon--remove spell-teaser-item__icon--all"
                @click="activeSpellBook = []">erase memory</span>
        </div>
        <div class="spell-teaser-table">
          <div class="spell-teaser-item"
               v-for="spellz in activeSpellBook"
               :key="spellz.name"
               @mouseover="preview(spellz)"
          >
            <span class="spell-teaser-item__icon spell-teaser-item__icon--info">{{ spellz.level }}</span>
            <span class="spell-teaser-item__name" @click="preview(undefined)">{{ spellz.name }}</span>
            <span class="spell-teaser-item__icon spell-teaser-item__icon--remove" @click="forgetSpell(spellz)">-</span>
          </div>
        </div>
      </section>
      <section class="search-container__collumn spell-preview">
        <spell-card v-if="selectedSpell" :spell="selectedSpell" :theme="selectedClass[0]"/>
      </section>
  </div>
</template>

<script>
  const toLower = text => {
    return text.toString().toLowerCase()
  }
  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.name).includes(toLower(term)))
    }
    return items
  }
  import SpellRepository from '../assets/cardz-spell-repository.json'
  import SpellCard from './SpellCard'
  import SpellItemRow from "./SpellItemRow";
  export default {
  name: 'SpellSearch',
  components: {SpellItemRow, SpellCard},
  data () {
    return {
      searchQuery: '',
      selectedClass: [],
      selectedLevel: [],
      selectedOrder: 'level',
      selectedSource: 'phb',
      selectedSpell: undefined,
      activeSpellBook: [],
      spellRepository: SpellRepository,
      search: null,
      searched: [],
      fields: [
        {name: 'level', label: 'Lvl'},
        {name: 'name', label: 'Name'},
        {name: 'actions', label: 'Actions'}
      ],
      clazzes: {
        druid: 'Druid',
        wizard: 'Wizard',
        sorcerer: 'Sorcerer',
        warlock: 'Warlock',
        ranger: 'Ranger',
        paladin: 'Paladin'
      },
      orderOptions: {level: 'by level', name: "by name", description: "by text"},
      sourceOptions: {
        phb: 'Players Handbook',
        ee: 'Elemental Evil Player\'s Companion',
        scag: 'Sword Coast Adventure Guide',
        xge: 'Xanathar\'s guide to everything'
      },
      levelOptions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      filter: {}
    }
  },
  computed: {
    searchResults: function () {
      var query = this.searchQuery
      var source = this.selectedSource
      var searchResults = this.spellRepository

      if (source.length > 0) {
        searchResults = searchResults.filter(function (item) {
          return item.source.toLocaleLowerCase().indexOf(source.toLocaleLowerCase()) >= 0
        })
      }
      var clazz = this.selectedClass
      if (clazz.length > 0) {
        searchResults = searchResults.filter(function (item) {
          return clazz.some(v => item.class.join().toLowerCase().indexOf(v) >= 0)
        })
      }
      var level = this.selectedLevel
      if (level.length > 0) {
        searchResults = searchResults.filter(function (item) {
          return level.includes(item.level)
        })
      }

      if (this.searchQuery.length > 0) {
        searchResults = searchResults.filter(function (item) {
          return item.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) >= 0
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
    searchOnTable() {
      this.searched = searchByName(this.spellRepository, this.search)
    },
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
    },
    forgetSpell: function (spellToforget, event) {
      let i = this.activeSpellBook.map(item => item.id).indexOf(spellToforget.id) // find index of your object
      this.activeSpellBook.splice(i, 1) // remove it from array
    },
    learnAllFiltered: function () {
      this.searchResults.forEach(v => this.learnSpell(v))
    }
  },
    created() {
      this.searched = this.spellRepository
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

.spell-teaser-item__icon--all {
  width: unset;
}
.spell-teaser-item__icon--remove {
  content: '-';
  color: indianred;
  background-color: white;
  border-color: indianred;
  float: right;
}
</style>

<template>
  <div>
    <section>
      <input v-model="searchQuery" placeholder="Enter spell name"/>
    </section>
    <section class="search-container">
      <section class="search-container__collumn search-results">
        <h3>Search results:</h3>
        <ul>
          <li v-for="result in searchResults" :key="result.name" @click="preview(result)">{{ result.name }}</li>
        </ul>
      </section>
      <section class="search-container__collumn spell-preview">
        <spell-card v-if="selectedSpell" :spell="selectedSpell"/>
      </section>
    </section>
  </div>
</template>

<script>
  import SpellRepository from '../assets/cardz-spell-repository.json'
  import SpellCard from "./SpellCard";

  export default {
  name: 'SpellSearch',
  components: {SpellCard},
  data () {
    return {
      searchQuery: '',
      selectedSpell: undefined,
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
    }
  },
  methods: {
    preview: function (item, event) {
      this.selectedSpell = item;
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
  width: 50%;
}
</style>

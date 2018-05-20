<template>
  <nav>
    <button v-for="routes in navItems" :key="navItems.text">
      <router-link  :to="routes.page">{{ routes.text }}</router-link>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'NavigationSection',
  data() {
    return {
      navItems: [
        { text: 'Home', page: { name: 'home' } },
        {text: 'Search', page: {name: 'spellSearch'}},
        {text: 'Migrate', page: {name: 'migrateSpells'}},
        {text: 'Builder (futuristic)', page: {name: 'cardBuilder'}}
      ]
    }
  }
}
</script>

<style scoped>

</style>

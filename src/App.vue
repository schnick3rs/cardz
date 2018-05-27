<template>
  <div class="page-container">
    <md-app>

      <md-app-toolbar class="md-primary">

        <span class="md-title">Cartz</span>
      </md-app-toolbar>

      <md-app-drawer style="max-width: 230px;" md-permanent="clipped">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>
          <div class="md-toolbar-section-end">

          </div>
        </md-toolbar>

        <md-list>
          <md-list-item v-for="routes in navItems" :key="navItems.text" :to="routes.page">
            <md-icon>{{ routes.icon }}</md-icon>
            <span class="md-list-item-text">{{ routes.text }}</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view class="main"/>
      </md-app-content>

    </md-app>

  </div>
</template>

<script>
  export default {
  name: 'App',
    data() {
      return {
        menuVisible: false,
        navItems: [
          {text: 'Cartz', page: {name: 'home'}, icon: 'home'},
          {text: 'Search', page: {name: 'spellSearch'}, icon: 'image_search'},
          {text: 'Builder (futuristic)', page: {name: 'cardBuilder'}, icon: 'build'},
          {text: 'Builder (character A5)', page: {name: 'characterSheetBuilder'}, icon: 'build'},
          {text: 'Migrate', page: {name: 'migrateSpells'}, icon: 'autorenew'},
          {text: 'Projects', page: {name: 'projectPrinter'}, icon: 'print'}
        ]
      }
    },
    methods: {
      toggleMenu() {
        this.menuVisible = !this.menuVisible
      }
    }
}
</script>

<style>
  /* MEDIA PRINT */
  @media print {
    .main {
      margin: 0 !important;
    }

    .md-app-toolbar {
      display: none;
    }

    .md-drawer {
      display: none;
    }
  }

  /* MEDIA SCREEN */
  * {
    -webkit-print-color-adjust: exact;
  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

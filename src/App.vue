<template>
  <div id="app" class="page-container">

    <md-app>

      <md-app-toolbar md-waterfall md-mode="fixed " class="md-primary">
        <span class="md-title">Cartz</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="clipped">
        <md-toolbar class="md-transparent" md-elevation="0">

        </md-toolbar>

        <md-list>
          <md-list-item v-for="routes in navItems" :key="navItems.text" :to="routes.page">
            {{ routes.text }}
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
  import NavigationSection from "./components/NavigationSection";
  export default {
  name: 'App',
    components: {NavigationSection},
    data() {
      return {
        navItems: [
          {text: 'Cartz', page: {name: 'home'}},
          {text: 'Search', page: {name: 'spellSearch'}},
          {text: 'Builder (futuristic)', page: {name: 'cardBuilder'}},
          {text: 'Migrate', page: {name: 'migrateSpells'}},
          {text: 'Projects', page: {name: 'projectPrinter'}}
        ]
      }
    }
}
</script>

<style>
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

  .md-app {
  }

  .md-drawer {
    width: 230px;
  }

  .sidebar {
    width: 150px;
  }

* {
  -webkit-print-color-adjust: exact;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app img{
  width: 32px;
}
</style>

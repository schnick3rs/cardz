<template>
  <div>

    <md-app>

      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Cartz</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-permanent="full" md-persistent="mini" md-fixed>
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
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

  .md-drawer {
    max-width: 230px;
  }
</style>

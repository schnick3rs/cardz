<template>
  <div class="page-container">
    <md-app>

      <md-app-toolbar class="md-primary md-dense">
        <span class="md-title">Cartz</span>

        <md-button class="md-raised" v-for="item in toolbarItems" :key="item.text" :to="item.page">
          {{ item.text }}
        </md-button>

      </md-app-toolbar>

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
        ],
        toolbarItems: [
          {text: 'Build Deck', page: {name: 'spellSearch'}, icon: 'image_search'},
          {text: 'Create Card', page: {name: 'cardBuilder'}, icon: 'build'},
          {text: 'Create NSC', page: {name: 'characterSheetBuilder'}, icon: 'build'},
          {text: 'Print Project', page: {name: 'projectPrinter'}, icon: 'print'},
          {text: 'Migrate Repository', page: {name: 'migrateSpells'}, icon: 'autorenew'}
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

    .cz--hide-for-print {
      display: none;
    }

    .cz-printable-item {
      margin: 0;
      padding: 0;
    }

    .md-content {
      margin: 0;
      padding: 0;
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

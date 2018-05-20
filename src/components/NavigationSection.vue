<template>
  <nav>
    <router-link class="menu__item" v-for="routes in navItems" :key="navItems.text" :to="routes.page">{{ routes.text
      }}
    </router-link>
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
        {text: 'Builder (futuristic)', page: {name: 'cardBuilder'}},
        {text: 'Migrate', page: {name: 'migrateSpells'}},
        {text: 'Projects', page: {name: 'projectPrinter'}}
      ]
    }
  }
}
</script>

<style scoped>
  @media print {
    nav {
      display: none;
    }
  }

  nav {
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 20px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }

    .sidenav a {
      font-size: 18px;
    }
  }

  .menu__item {
    width: 100%;
    display: block;
    padding: 8px 16px;
    text-align: left;
    border: none;
    white-space: normal;
    float: none;
    outline: 0;
    text-underline: none;
    text-decoration: none;
  }

  .menu__item {
    color: lightgrey;
    background-color: #000000;
  }

  .menu__item:hover {
    color: #000000;
    background-color: lightgrey;
  }
</style>

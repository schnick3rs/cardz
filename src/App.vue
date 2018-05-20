<template>
  <div id="app">
    <NavigationSection class="sidebar"></NavigationSection>
    <router-view class="main"/>
  </div>
</template>

<script>
  import NavigationSection from "./components/NavigationSection";
  export default {
  name: 'App',
  components: {NavigationSection}
}
</script>

<style>
  @media print {
    .main {
      margin: 0 !important;
    }
  }

  .sidebar {
    width: 150px;
  }

  .main {
    margin-left: 150px;
  }
* {
  -webkit-print-color-adjust: exact;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}
#app img{
  width: 32px;
}
</style>

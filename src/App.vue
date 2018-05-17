<template>
  <div id="app">
    <NavigationSection></NavigationSection>
    <router-view/>
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

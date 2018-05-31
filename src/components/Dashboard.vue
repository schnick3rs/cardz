<template>
  <div class="md-layout">
    <md-card>
      <md-card-media-cover md-text-scrim>
        <md-card-media>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4f7glxGncYy9Nh4g4vpRpYjGkaWFq1WhtQSCJj3sZh4kfNVg"/>
        </md-card-media>
        <md-card-area>
          <md-card-header>
            <span>Test</span>
          </md-card-header>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
    <md-button>
      <md-icon class="md-size-5x">help</md-icon>
    </md-button>
  </div>
</template>

<script>
  import NavigationSection from "./NavigationSection";
  export default {
  name: 'Dashboard',
  components: {NavigationSection}
}
</script>

<style scoped>

</style>

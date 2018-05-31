<template>
  <div>
    <div class="card-title" v-bind:style="glowingBorder">
      <span class="card-title__text">{{ title }}</span>
    </div>
    <div v-if="subtitle" class="card-title__subtitle">
      <span class="card-title__subtitle-text" v-bind:style="{ color: flavour }">{{ subtitle }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SpaceCardTitle',
    props: {
      title: {type: String, required: true},
      subtitle: {type: String, required: false},
      flavour: {type: String, required: false, default: ''}
    },
    computed: {
      glowingBorder: function () {
        if (this.flavour) {
          return {
            borderColor: this.flavour,
            boxShadow: '0 0px 10px 0px ' + this.flavour
          }
          return ''
        }
      }
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  .card-title {
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
    display: table;
    margin-bottom: 1mm;
    width: 100%;

    border-bottom-width: 2px;
    border-bottom-style: solid;
  }

  .card-title__text {
    font-size: 3.5mm;
    line-height: 6.0mm;
    text-transform: uppercase;
    vertical-align: middle;
    display: table-cell;
    margin: 0;
    text-align: left;
    padding-left: 4mm;
    padding-top: 2mm;
  }

  .card-title__subtitle-text {
    padding-left: 4mm;
    font-size: 3.0mm;
    text-shadow: -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  }
  .card-title__subtitle-text--white-glow {
    text-shadow: -1px -1px 0 #fff,
    1px -1px 0 #fff,
    -1px 1px 0 #fff,
    1px 1px 0 #fff;
  }
</style>

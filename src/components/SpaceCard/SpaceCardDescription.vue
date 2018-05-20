<template>
  <div>
    <div class="card-text-container" v-bind:class="flavour">
      <div class="card-text-description" v-html="description"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SpaceCardDescription',
    props: {
      description: {type: String},
      flavour: {type: String, default: ''}
    },
    computed: {
      colorFlavour: function () {
        if (this.flavour.length > 0) {
          return 'card-flavour--' + this.flavour;
        }
        return '';
      }
    }
  }
</script>

<style scoped>
  .card-text-container {
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
    position: absolute;
    bottom: 0;
    width: 100%;
    margin-bottom: 3mm;

    border-top: 2px solid forestgreen;
    border-bottom: 2px solid forestgreen;
    box-shadow: 0 0px 10px 0px forestgreen;
  }

  .card-text-container.yellow {
    border-top: 2px solid yellow;
    border-bottom: 2px solid yellow;
    box-shadow: 0 0px 10px 0px yellow;
  }

  .card-text-container.green {
    border-top: 2px solid forestgreen;
    border-bottom: 2px solid forestgreen;
    box-shadow: 0 0px 10px 0px forestgreen;
  }

  .card-text-container.red {
    border-top: 2px solid orangered;
    border-bottom: 2px solid orangered;
    box-shadow: 0 0px 10px 0px orangered;
  }

  .card-text-container.blue {
    border-top: 2px solid dodgerblue;
    border-bottom: 2px solid dodgerblue;
    box-shadow: 0 0px 10px 0px dodgerblue;
  }

  .card-text-container .card-text-description {
    font-family: "sans serif";
    display: inline-block;
    font-size: 2.5mm;
    margin: 1mm;
  }

  .card-text-description >>> p {
    font-size: 2.5mm;
    line-height: 3.5mm;
    text-align: justify;
    margin-top: 0;
    margin-bottom: 0.5mm;
  }

  .card-text-description >>> ul {
    padding-left: 3mm;
    margin: 0;
    margin-bottom: 0.5mm;
  }
</style>

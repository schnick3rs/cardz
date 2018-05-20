<template>
  <div>
    <div class="card-title" v-bind:class="flavour">
      <span class="card-title__text">{{ title }}</span>
    </div>
    <div v-if="subtitle" class="card-title__subtitle">
      <span class="card-title__subtitle-text" v-bind:class="flavour">{{ subtitle }}</span>
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
    data() {
      return {
        flavours: [
          {green: 'forestgreen'},
          {red: 'red'},
          {blue: 'blue'},
          {blue: 'yellow'}
        ]
      }
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
  .card-title {
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
    display: table;
    margin-bottom: 1mm;
    width: 100%;

    border-bottom: 2px solid forestgreen;
    border-radius: 0px;
    box-shadow: 0 0px 10px 0px forestgreen;
  }

  .card-title.yellow {
    border-color: yellow;
    box-shadow: 0 0px 10px 0px yellow;
  }

  .card-title.green {
    border-color: forestgreen;
    box-shadow: 0 0px 10px 0px forestgreen;
  }

  .card-title.red {
    border-color: orangered;
    box-shadow: 0 0px 10px 0px orangered;
  }

  .card-title.blue {
    border-color: dodgerblue;
    box-shadow: 0 0px 10px 0px dodgerblue;
  }
  .card-title__text {
    font-size: 3.5mm;
    text-transform: uppercase;
    text-align: center;
    vertical-align: middle;
    display: table-cell;
    margin: 0mm;
    text-align: left;
    padding-left: 4mm;
    padding-top: 2mm;
    line-height: 6.0mm;
  }

  .card-title__subtitle-text {
    padding-left: 4mm;
    color: forestgreen;
    text-shadow: -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
    font-style: italic;
  }

  .card-title__subtitle-text.yellow {
    color: yellow;
  }

  .card-title__subtitle-text.green {
    color: forestgreen;
  }

  .card-title__subtitle-text.red {
    color: orangered;
  }

  .card-title__subtitle-text.blue {
    color: dodgerblue;
  }
  .card-title__subtitle-text--white-glow {
    text-shadow: -1px -1px 0 #fff,
    1px -1px 0 #fff,
    -1px 1px 0 #fff,
    1px 1px 0 #fff;
  }
</style>

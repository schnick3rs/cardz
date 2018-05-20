<template>
  <div>
    <div class="card card-dimensions--magic card-bg" v-bind:style="customStyle">
      <SpaceCardTitle :title="card.title" :subtitle="card.subtitle" v-bind:flavour="flavour"></SpaceCardTitle>
      <SpaceCardDescription :description="card.description" v-bind:flavour="flavour"></SpaceCardDescription>
    </div>
  </div>
</template>

<script>
  import SpaceCardTitle from './SpaceCardTitle';
  import SpaceCardDescription from './SpaceCardDescription';
  export default {
    name: 'SpaceCard',
    components: {SpaceCardTitle, SpaceCardDescription},
    props: {
      card: {type: Object}
    },
    computed: {
      customStyle: function () {
        let theme = this.card['_theme']
        if (theme && theme.length > 0) {
          return 'background-image: url("' + theme + '")'
        }
        return ''
      },
      flavour: function () {
        return this.card['_flavour']
      }
    }
  }
</script>

<style scoped>
  .card {
    font-family: Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal, "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", "sans serif";
    font-size: 2.5mm;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
  }

  .card {
    border-color: red;
    border: 0.3mm;
    border-style: dashed;

    overflow: hidden;
    position: relative;
  }

  .card-dimensions--magic {
    height: 88mm;
    width: 63mm;
  }

  .card-bg {
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('https://vignette.wikia.nocookie.net/warhammer40k/images/4/48/Battleship_Gothic_cover.jpg/revision/latest?cb=20130414015051');
  }

  .card-image {
  / / -moz-box-shadow: inset 0 8 px 8 px - 8 px #4c4c4c, inset 0 - 8 px 8 px - 8 px #4c4c4c;
  / / -webkit-box-shadow: inset 0 8 px 8 px - 8 px #4c4c4c, inset 0 - 8 px 8 px - 8 px #4c4c4c;
    box-shadow: inset 0 16px 8px -8px #4c4c4c, inset 0 -16px 8px -8px #4c4c4c;
    height: 30%;
  }

  .card-image {
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .card-description {
    background-color: rgba(255, 255, 255, 0.75);
    color: black;
  / / box-shadow: 5 px 0 px 2 mm 0 mm #4c4c4c;
    display: table;
    margin-top: 3mm;
    width: 100%;
  }

  .card-description--fixed {
    height: 65%;
  }

  .card-description__text {

  }
</style>

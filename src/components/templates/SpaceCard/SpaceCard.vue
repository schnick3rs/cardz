<template>
  <div class="cz-print">
    <div class="card card-dimensions--magic card-bg" v-bind:style="customStyle">
      <SpaceCardTitle :title="card.title" :subtitle="card.subtitle" v-bind:flavour="flavour"></SpaceCardTitle>
      <cartz-value-container
        v-if="card.value"
        icon="mailed-fist"
        position="center"
      >{{ card.value }}
      </cartz-value-container>
      <CzGlowingTextBand
        class="card__text-band"
        :html="card.description"
        :glowColor="card._flavour"
      ></CzGlowingTextBand>
    </div>
  </div>
</template>

<script>
  import SpaceCardTitle from './SpaceCardTitle';
  import CzGlowingTextBand from "../CardElements/CzGlowingTextBand";
  import CartzValueContainer from "../CardElements/CartzValueContainer";
  export default {
    name: 'SpaceCard',
    components: {CartzValueContainer, CzGlowingTextBand, SpaceCardTitle},
    props: {
      card: {type: Object}
    },
    computed: {
      customStyle: function () {
        let style = {};
        let theme = this.card['_theme']
        if (theme && theme.length > 0) {
          style['background-image'] = 'url("' + theme + '")';
        }
        return style;
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
  }

  .card__text-band {
    position: absolute;
    bottom: 0;
    margin-bottom: 3mm;
  }
</style>

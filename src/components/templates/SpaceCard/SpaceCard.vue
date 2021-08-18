<template>

  <div class="cz-print">

    <cz-card-frame
      class="card card-bg"
      :style="backgroundImage"
      :dimensions="card._dimension"
    >

      <space-card-title
        v-if="card.title"
        :title="card.title"
        :subtitle="card.subtitle"
        :flavour="flavour"
      />

      <cartz-value-container
        v-if="card.value"
        :value="card.value"
        :flavour="card._flavour"
        icon="mailed-fist"
        position="center"
      />

      <cz-glowing-text-band
        v-if="card.description"
        class="description-band"
        :html="card.description"
        :glowColor="card._flavour"
      />

    </cz-card-frame>

  </div>

</template>

<script>
import SpaceCardTitle from './SpaceCardTitle'
import CzGlowingTextBand from '../CardElements/CzGlowingTextBand'
import CartzValueContainer from '../CardElements/CartzValueContainer'
import CzCardFrame from '../CardElements/CzCardFrame'
export default {
  name: 'SpaceCard',
  components: {CzCardFrame, CartzValueContainer, CzGlowingTextBand, SpaceCardTitle},
  props: {
    card: {type: Object}
  },
  computed: {
    backgroundImage: function () {
      let style = {}
      let theme = this.card['_theme']
      if (theme && theme.length > 0) {
        style['background-image'] = 'url("' + theme + '")'
      }
      return style
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

  .card-bg {
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .description-band {
    position: absolute;
    bottom: 0;
    margin-bottom: 3mm;
  }
</style>

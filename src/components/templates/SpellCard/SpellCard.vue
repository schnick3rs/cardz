<template>

  <div class="cz-print">

    <cz-card-frame
      :dimensions="dimensions"
      :background-image="backgroundImage"
      class="card card-bg"
      :opacity="0.75"
    >

      <spell-card-title :name="spell.name" :flavour="flavour"></spell-card-title>
      <spell-card-level :level="spell.level" :flavour="flavour"></spell-card-level>
      <div>
        <spell-card-meta
          style="float: left;"
          v-if="spell.meta.castingTime"
          :label="'Casting Time'"
          :value="spell.meta.castingTime"
          :ritual="spell.flags.includes('Ritual')"
        />
        <spell-card-meta style="float: right;" pushRight v-if="spell.meta.duration" :label="'Duration'"
                         :value="spell.meta.duration"
                         :concentration="spell.flags.includes('Concentration')"></spell-card-meta>
        <spell-card-meta style="clear: both; float: left;" v-if="spell.meta.range" :label="'Range'" :value="spell.meta.range" showSquares></spell-card-meta>
        <spell-card-meta style="float: right;" pushRight v-if="spell.meta.area" :label="'Area'" :value="spell.meta.area" ></spell-card-meta>
      </div>
      <spell-card-description
        class="description-container description-container--fixed"
        :class="descriptionStyle"
        :description="spell.description"
        :overcast="spell.descriptionOvercast"
        :flavour="flavour"
      />
      <spell-card-components
        :has-verbal="hasVerbal"
        :has-somatic="hasSomatic"
        :has-material="hasMaterial"
        :material-text="spell.materialText"
        :flavour="flavour"
      ></spell-card-components>
      <card-copyright v-if="image && image.artist" position="bottom" theme="light">{{ image.artist }}</card-copyright>

    </cz-card-frame>

  </div>

</template>

<script>
import {FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText} from '@fortawesome/vue-fontawesome'
import SpellCardComponents from './SpellCardComponents'
import SpellCardDescription from './SpellCardDescription'
import SpellCardLevel from './SpellCardLevel'
import SpellCardTitle from './SpellCardTitle'
import SpellCardMeta from './SpellCardMeta'
import CardCopyright from '../CardElements/CardCopyright'
import CzCardFrame from '../CardElements/CzCardFrame'

export default {
  name: 'SpellCard',
  components: {
    CzCardFrame,
    FontAwesomeIcon,
    FontAwesomeLayers,
    FontAwesomeLayersText,
    CardCopyright,
    SpellCardMeta,
    SpellCardTitle,
    SpellCardDescription,
    SpellCardComponents,
    SpellCardLevel
  },
  props: {
    spell: {type: Object, required: true},
    image: {
      type: Object,
      default: function () {
        return {src: require('../../../assets/img/artworks/artwork-arcane-trickster.jpg')}
      }
    },
    flavour: {type: String, default: 'light'},
    dimensions: {type: String, default: 'dragonsleeve'}
  },
  data () {
    return {
      spellComponents: [ 'Verbal', 'Somatic', 'Material' ]
    }
  },
  computed: {
    descriptionStyle: function () {
      return 'description-container--' + this.dimensions
    },
    backgroundImage: function () {
      if (this.image && this.image.src) {
        return this.image.src
      }
      return ''
    },
    hasVerbal: function () {
      return this.spell.components.includes('Verbal')
    },
    hasSomatic: function () {
      return this.spell.components.includes('Somatic')
    },
    hasMaterial: function () {
      return this.spell.components.includes('Material')
    }
  }
}
</script>

<style scoped>

.card {
  font-family: Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif;
  font-size: 2.5mm;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
}

.card > * {
  z-index: 2;
}

.cutter {
  border-color: red;
  border-width: 0.3mm;
  border-style: dashed;
}

.theme-config {
  border-color: lightgrey;
  border: 1px;
  border-style: solid;
  margin-bottom: 10px;
  padding: 5px;
}
.theme-config label:after{
  content: ":";
}

.description-container {
  clear: both;
  margin-top: 1mm;
  padding-top: 0.5mm;
  max-height: 58mm;
  overflow: hidden;
}

.description-container--bottom {
  position: absolute;
  bottom: 10mm;
}

.description-container--dragonsleeve {
  max-height: 62mm !important;
  min-height: 62mm !important;
}

.description-container--fixed {
  min-height: 58mm;
}
</style>

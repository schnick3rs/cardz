<template>
  <div class="cz-print">
    <div class="card card-bg" v-bind:class="bgClass" v-bind:style="customStyle">
      <spell-card-title :name="item.name"></spell-card-title>
      <span v-if="spell.flags.includes('Ritual')" class="spell-meta__ritual" hidden>
        <font-awesome-layers class="fa-2x">
          <font-awesome-icon icon="square" :transform="{ rotate: 45 }" style="color: black;opacity:0.75;"/>
          <font-awesome-icon icon="book" transform="shrink-9" style="color: white;"/>
        </font-awesome-layers>
      </span>
      <span v-if="spell.flags.includes('Concentration')" class="spell-meta__concentration" hidden>
        <font-awesome-layers class="fa-2x">
          <font-awesome-icon icon="square" :transform="{ rotate: 45 }" style="color: black;opacity:0.75;"/>
          <font-awesome-layers-text value="C" transform="shrink-9" style="color: white;"/>
        </font-awesome-layers>
      </span>
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
        <spell-card-meta style="clear: both; float: left;" v-if="spell.meta.range" :label="'Range'"
                         :value="spell.meta.range" showSquares></spell-card-meta>
        <spell-card-meta style="float: right;" pushRight v-if="spell.meta.area" :label="'Area'"
                         :value="spell.meta.area"></spell-card-meta>
      </div>
      <spell-card-description
        class="description-container description-container--fixed"
        :class="descriptionStyle"
        :description="spell.description"
        :overcast="spell.descriptionOvercast"
      />
      <spell-card-components
        v-bind:has-verbal="hasVerbal"
        v-bind:has-somatic="hasSomatic"
        v-bind:has-material="hasMaterial"
        v-bind:material-text="spell.materialText"
      ></spell-card-components>
    </div>
  </div>
</template>

<script>
  import {FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText} from '@fortawesome/vue-fontawesome'
  import SpellCardComponents from './SpellCardComponents'
  import SpellCardDescription from './SpellCardDescription'
  import SpellCardLevel from './SpellCardLevel'
  import SpellCardTitle from './SpellCardTitle'
  import SpellCardMeta from './SpellCardMeta'
  export default {
    name: 'SpellCard',
    components: {
      FontAwesomeIcon,
      FontAwesomeLayers,
      FontAwesomeLayersText,
      SpellCardMeta,
      SpellCardTitle,
      SpellCardDescription,
      SpellCardComponents,
      SpellCardLevel
    },
    props: {
      spell: {type: Object, required: true},
      theme: {type: String, required: false, default: 'mesmer'},
      customTheme: {type: String, default: ''},
      dimensions: {type: String, default: 'magic'}
    },
    data() {
      return {
        spellComponents: ['Verbal', 'Somatic', 'Material']
      }
    },
    computed: {
      descriptionStyle: function () {
        return 'description-container--' + this.dimensions
      },
      backgroundImage: function () {
        if (this.customTheme.length > 0) {
          return 'background-image: url("' + this.customTheme + '")'
        }
        return ''
      },
      bgClass: function () {
        return [
          'card-bg-' + this.theme,
          'card-dimensions--' + this.dimensions
        ]
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

  .card-dimensions--dragonsleevesfit {
    height: 90mm;
    width: 63mm;
  }

  .card-dimensions--dragonsleeves {
    height: 91mm;
    width: 63mm;
  }

  .card-bg {
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .theme-config {
    border-color: lightgrey;
    border: 1px;
    border-style: solid;
    margin-bottom: 10px;
    padding: 5px;
  }

  .theme-config label:after {
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

  .description-container--dragonsleevesfit {
    max-height: 60mm !important;
    min-height: 60mm !important;
  }

  .description-container--fixed {
    min-height: 58mm;
  }

  .spell-meta__ritual {
    position: absolute;
    left: 27.0mm;
    top: 8mm;
  }

  .spell-meta__concentration {
    position: absolute;
    right: 21mm;
    top: 8mm;
  }
</style>

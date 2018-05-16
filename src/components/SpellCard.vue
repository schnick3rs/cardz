<template>
  <div>
    <div class="card card-dimensions--magic card-bg" v-bind:class="bgClass">
      <spell-card-title :name="spell.name"></spell-card-title>
      <spell-card-level :level="spell.level"></spell-card-level>
      <span v-if="spell.flags.includes('Ritual')" class="spell-meta__ritual">
        <font-awesome-layers class="fa-2x">
          <font-awesome-icon icon="square" :transform="{ rotate: 45 }" style="color: black;opacity:0.75;"/>
          <font-awesome-icon icon="book" transform="shrink-9" style="color: white;" />
        </font-awesome-layers>
      </span>
      <span v-if="spell.flags.includes('Concentration')" class="spell-meta__concentration">
        <font-awesome-layers class="fa-2x">
          <font-awesome-icon icon="square" :transform="{ rotate: 45 }" style="color: black;opacity:0.75;"/>
          <font-awesome-layers-text value="C" transform="shrink-9" style="color: white;" />
        </font-awesome-layers>
      </span>
      <div>
        <spell-card-meta style="float: left;" v-if="spell.meta.castingTime" :label="'Casting Time'" :value="spell.meta.castingTime" ></spell-card-meta>
        <spell-card-meta style="float: right;" pushRight v-if="spell.meta.duration" :label="'Duration'" :value="spell.meta.duration" ></spell-card-meta>
        <spell-card-meta style="clear: both; float: left;" v-if="spell.meta.range" :label="'Range'" :value="spell.meta.range" showSquares></spell-card-meta>
        <spell-card-meta style="float: right;" pushRight v-if="spell.meta.area" :label="'Area'" :value="spell.meta.area" ></spell-card-meta>
      </div>
      <spell-card-description style="clear: both;" :description="spell.description" />
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
  components: { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText, SpellCardMeta, SpellCardTitle, SpellCardDescription, SpellCardComponents, SpellCardLevel },
  props: {
    spell: { type: Object, required: true }
  },
  data () {
    return {
      selected: 'mesmer',
      spellComponents: [ 'Verbal', 'Somatic', 'Material' ]
    }
  },
  computed: {
    bgClass: function () {
      return 'card-bg-' + this.selected
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
//line-height: 20px;
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
.card-bg-mesmer {
  background-image: url('https://i.pinimg.com/originals/f9/88/5d/f9885d08f0e3810dcf4b6434b28a1fa5.jpg');
}
.card-bg-druid{
  background-image: url("https://wiki.guildwars2.com/images/thumb/8/8c/Spec_image_Druid.jpg/350px-Spec_image_Druid.jpg");
}
.card-bg-sorcerer{
  background-image: url("https://wiki.guildwars2.com/images/thumb/5/5e/Elementalist_04_concept_art.png/250px-Elementalist_04_concept_art.png");
}
.card-bg-paladin{
  background-image: url("https://s-media-cache-ak0.pinimg.com/736x/4e/c1/9b/4ec19b9d9827544f0ece01221e817138.jpg");
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
.spell-meta__ritual {
  position: absolute;
  left: 24.5mm;
  top: 8mm;
}
.spell-meta__concentration {
  position: absolute;
  right: 21.5mm;
  top: 8mm;
}
</style>

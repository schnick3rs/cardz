<template>
  <div>
    <div class="theme-config">
      <div class="input">
        <label for="school">School</label>
        <select id="school" v-model="selected">
          <option v-for="school in schools" v-bind:value="school.value" :key="school.value">
            {{ school.text }}
          </option>
        </select>
      </div>
      <div class="input">
        <label>Spell Level</label>
        <input v-model.number="spell.level" type="number" value="2"/>
      </div>
      <div class="input">
        <label>Spell Components</label>
          <input
            v-for="spellComponent in spellComponents"
            v-bind:key="spellComponents.id"
            v-bind:id="spellComponent"
            v-bind:value="spellComponent"
            type="checkbox"
            v-model="spell.components" />
        <select v-model="spellComponents" multiple>
          <option selected>Verbal</option>
          <option selected>Somatic</option>
          <option>Material</option>
        </select>
        <span>{{ spellComponents }}</span>
      </div>
    </div>
    <div class="card card-dimensions--magic card-bg" v-bind:class="bgClass">
      <SpellCardTitle :title="spell.title"></SpellCardTitle>
      <SpellCardLevel :level="spell.level"></SpellCardLevel>
      <SpellCardDescription></SpellCardDescription>
      <SpellCardComponents
        v-bind:has-verbal="hasVerbal"
        v-bind:has-somatic="hasSomatic"
        v-bind:has-material="hasMaterial"
      ></SpellCardComponents>
    </div>
  </div>
</template>

<script>
import SpellCardComponents from './SpellCardComponents'
import SpellCardDescription from './SpellCardDescription'
import SpellCardLevel from './SpellCardLevel'
import SpellCardTitle from './SpellCardTitle'
export default {
  name: 'SpellCard',
  components: { SpellCardTitle, SpellCardDescription, SpellCardComponents, SpellCardLevel },
  data () {
    return {
      selected: 'mesmer',
      schools: [
        { text: 'Warlock', value: 'mesmer' },
        { text: 'Druid', value: 'druid' },
        { text: 'paladin', value: 'paladin' }
      ],
      spellComponents: [ 'Verbal', 'Somatic', 'Material' ],
      spell: {
        title: 'Shadow Blade',
        level: 2,
        components: [ 'Verbal', 'Somatic' ]
      }
    }
  },
  computed: {
    bgClass: function () {
      return 'card-bg-' + this.selected
    },
    hasVerbal: function () {
      return this.spellComponents.includes('Verbal')
    },
    hasSomatic: function () {
      return this.spellComponents.includes('Somatic')
    },
    hasMaterial: function () {
      return this.spellComponents.includes('Material')
    },
    methods: {
      hasComponent (val) {
        return this.spellComponents.includes(val)
      }
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
</style>

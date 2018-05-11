<template>
  <div>
    <div class="card card-dimensions-magic card-bg card-bg" v-bind:class="bgClass">
      <Title></Title>
      <Content></Content>
      <SpellComponents></SpellComponents>
    </div>
    <select v-model="selected">
      <option v-for="option in options" v-bind:value="option.value" :key="option.value">
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>
</template>

<script>
import Title from './card/Title'
import Content from './card/Content'
import SpellComponents from './card/SpellComponents'
export default {
  name: 'Card',
  components: {Title, Content, SpellComponents},
  data () {
    return {
      selected: 'mesmer',
      options: [
        { text: 'Mesmer', value: 'mesmer' },
        { text: 'Druid', value: 'druid' },
        { text: 'paladin', value: 'paladin' }
      ]
    }
  },
  computed: {
    bgClass: function () {
      return 'card-bg-' + this.selected
    }
  }
}
</script>

<style scoped>

.card {
//font-family: Copperplate, "Copperplate Gothic Light", fantasy;
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

.card-dimensions-magic {
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
</style>

<template>
  <div class="spell-meta">
    <div v-if="!pushRight" class="spell-meta__label"><span>{{ label }}</span></div>
    <div v-if="concentration" class="spell-meta__label"><span>C</span></div>
    <div class="spell-meta__value"><span>{{ value }}</span></div>
    <div v-if="ritual" class="spell-meta__label"><span>
      <font-awesome-icon icon="book" style="color: white;"/>
    </span></div>
    <div v-if="pushRight" class="spell-meta__label"><span>{{ label }}</span></div>
  </div>
</template>

<script>
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
  export default {
    components: {FontAwesomeIcon},
  name: 'SpellCardMeta',
  props: {
    label: { type: String },
    value: { type: String },
    pushRight: {type: Boolean},
    ritual: {type: Boolean, default: false},
    concentration: {type: Boolean, default: false}
  },
  computed: {
    addSquares: function () {
      return ''
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto');

.spell-meta {
  font-family: 'Roboto', sans-serif;
  width: 50%;
  font-size: 2.1mm;
  line-height: 3.2mm;
  overflow: hidden;
  margin-bottom: 2mm;
  box-shadow: 0px 5px 2mm 0mm #4c4c4c;
  max-width: fit-content;
}
.spell-meta > div {
  width: max-content;
  float: left;
}
.spell-meta__label {
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
}
.spell-meta__value {
  background-color: rgba(255, 255, 255, 0.75);
  color: black;
}
.spell-meta span {
  margin: 1mm;
}
</style>

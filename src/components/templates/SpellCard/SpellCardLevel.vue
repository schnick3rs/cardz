<template>
  <div class="spell-level">
    <font-awesome-layers class="fa-4x">
      <font-awesome-icon icon="bookmark" class="background" :class="[ flavour ]"/>
      <font-awesome-layers-text :value="roman[level]" transform="shrink-9" class="value" :class="[ flavour ]"/>
    </font-awesome-layers>
  </div>
</template>

<script>
  import {FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText} from '@fortawesome/vue-fontawesome'
  export default {
  name: 'SpellCardLevel',
  components: { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText },
  props: {
    level: {type: Number, required: true},
    flavour: {type: String, String: 'light'}
  },
  data () {
    return {
      roman: [ '-', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX' ]
    }
  }
}
</script>

<style scoped>
.spell-level {
  position: absolute;
  top: -1.5mm;
  left: 0.0mm;
}

.background.light {
  color: black;
  opacity: 0.75;
}

.value.light {
  color: white;
}

.background.dark {
  color: white;
  opacity: 0.75;
}

.value.dark {
  color: black;
}
</style>

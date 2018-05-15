<template>
  <div class="spell-level">
    <font-awesome-layers class="fa-4x">
      <font-awesome-icon icon="bookmark" style="color: black;opacity:0.75;"/>
      <font-awesome-layers-text :value="roman[level]" transform="shrink-9" style="color: white;" />
    </font-awesome-layers>
  </div>
</template>

<script>
import {FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText} from '@fortawesome/vue-fontawesome'
export default {
  name: 'SpellCardLevel',
  components: { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText},
  props: {
    level: { type: Number, required: true }
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
  left: 1mm;
}
.spell-level__background {
  background-color: rgba(0, 0, 0, 0.75);
  display: table;
}
.spell-level__background--border {
  height: 7mm;
  width: 6mm;
  position: absolute;
  top: 0;
  left: 2mm;
  border-bottom-right-radius: 2mm;
  border-bottom-left-radius: 2mm;
}

.spell-level__background--polygon {
  -webkit-clip-path: polygon(100% 0, 100% 100%, 50% 50%, 0 100%, 0 0);
  clip-path: polygon(100% 0, 100% 100%, 50% 75%, 0 100%, 0 0);
  width: 6mm;
  height: 8mm;
  position: absolute;
  top: 0;
  left: 3mm;
}
.spell-level__background--shadow{
//  box-shadow: 0px 5px 2mm 0mm #4c4c4c;
  filter: drop-shadow(5px 0px 5px grey);
}

.spell-level__text {
  color: white;
  font-weight: bold;
  width: 100%;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  fint-size: 3mm;
}
</style>

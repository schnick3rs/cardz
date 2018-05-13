<template>
  <div class="spell-level">
    <div class="spell-level__background spell-level__background--border">
      <span class="spell-level__text">{{ roman[level] }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpellCardLevel',
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
.spell-level__background {
  background-color: rgba(0, 0, 0, 0.75);
}
.spell-level__background--border {
  height: 6mm;
  width: 5mm;
  position: absolute;
  top: 0;
  left: 3mm;
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
  position: absolute;
  color: white;
  top: 10%;
  left: 0;
  font-weight: bold;
  width: 100%;
  text-align: center;
}
</style>

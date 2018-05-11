<template>
  <div>
    <div class="shape-flag">
      <span>{{ roman[level] }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpellCardLevel',
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      roman: [ '-', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX' ]
    }
  }
}
</script>

<style scoped>
.shape-flag {
  -webkit-clip-path: polygon(100% 0, 100% 100%, 50% 50%, 0 100%, 0 0);
  clip-path: polygon(100% 0, 100% 100%, 50% 75%, 0 100%, 0 0);
  background-color: rgba(0, 0, 0, 0.75);
  width: 6mm;
  height: 8mm;
  position: absolute;
  top: 0;
  left: 3mm;
//  box-shadow: 0px 5px 2mm 0mm #4c4c4c;
  filter: drop-shadow(5px 0px 5px grey);
}

.shape-flag span {
  position: absolute;
  color: white;
  top: 10%;
  left: 0;
  width: 6mm;
  text-align: center;
}
</style>

<template>
  <div class="container shadow" v-bind:class="[ flavour ]"><span>{{ name }}</span></div>
</template>

<script>
export default {
  name: 'SpellCardTitle',
  props: {
    name: {type: String, required: true},
    flavour: {type: String, default: 'light'}
  }
}
</script>

<style scoped>
  .container {
  display: table;
  margin-top: 1mm;
  margin-bottom: 3mm;
  width: 100%;
}

  .container.dark {
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
  }

  .container.light {
    background-color: rgba(255, 255, 255, 0.75);
    color: black;
  }

  .container.shadow {
    box-shadow: 0px 5px 2mm 0mm #4c4c4c;
  }

  .container span {
  font-size: 3.5mm;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  margin: 0mm;
  line-height: 5.0mm;
}
</style>

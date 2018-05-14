<template>
  <div class="spell-meta">
    <div class="spell-meta__label"><span>{{ label }}</span></div>
    <div class="spell-meta__value"><span>{{ value }}</span></div>
  </div>
</template>

<script>
export default {
  name: 'SpellCardMeta',
  props: {
    label: { type: String },
    value: { type: String }
  }
}
</script>

<style scoped>
.spell-meta {
  width: 50%;
  font-size: 2mm;
  overflow: hidden;
  margin-bottom: 3mm;
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

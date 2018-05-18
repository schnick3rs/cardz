<template>
  <div class="spell-teaser-item">
    <span class="spell-teaser-item__name">{{ spell.name }}</span>
    <span class="spell-teaser-item__action-add" on-click="$parent.$emit('learn-spell', spell)" >+</span>
  </div>
</template>

<script>
export default {
  name: 'SpellItemRow',
  props: {
    spell: { type: Object, required: true }
  }
}
</script>

<style scoped>
.spell-teaser-item {
  border-style: solid;
  border-color: black;
  border-width: 0.5px;
  border-radius: 5px;
  padding: 4px 8px;
  margin-bottom: 2px
}
.spell-teaser-item__action-add {
  float: right;
  color: white;
  background-color: forestgreen;
  width: 24px;
  vertical-align: middle;
  text-align: center;
  border-radius: 5px;
}
</style>

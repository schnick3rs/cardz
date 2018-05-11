<template>
  <div>
    <div class="card-text-container">
      <div class="card-text-description" v-html="description"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpellCardDescription',
  data () {
    return {
      description: '<p>You weave together threads of shadow to create a sword of solidified gloom into your hand. This magic sword lasts until the spell ends. It counts as a simple melee weapon with which you are proficient. It deals 2d8 psychic damage on hit and has the finesse, light, and thrown properties (range 20/60). In addition, when you use the sword to attack a target that is in dim light or darkness, you make the attack roll with advantage.</p><p>If you drop the weapon or throw it, it dissipates at the end of the turn. Thereafter, while the spell persists, you can use a bonus action to cause the sword to reappear in your hand.</p>'
    }
  }
}
</script>

<style scoped>
  .card-text-container {
    background-color: rgba(255, 255, 255, 0.75);
    color: black;
    box-shadow: 0px 5px 2mm 0mm #4c4c4c; }
  .card-text-container .card-text-description {
    font-size: 3mm;
    margin: 1mm;
    display: inline-block; }
  .card-text-container .card-text-description p {
    margin-top: 0;
    line-height: 3mm; }
</style>

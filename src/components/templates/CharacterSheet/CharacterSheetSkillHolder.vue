<template>
  <div class="skill-holder">
    <div style="" v-for="item in skills" v-bind:key="item.label">
      <span class="skill-holder__label">{{ item.label }}</span>
      <span>{{ item.value }}</span>
    </div>
    <div v-for="n in 12">
      <span class="skill__field--placeholder skill__name--placeholder"></span>
      <span class="skill__field--placeholder skill__value--placeholder"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CharacterSheetSkillHolder",
    props: {
      skills: {type: Array, default: ''},
      slots: {type: Number, default: 6}
    }
  }
</script>

<style scoped>

  .skill-holder {
    column-count: 2;
    padding: 4mm 0mm;
  }

  .skill-holder__label {
    width: 5mm;
  }

  .skill__field--placeholder {
    background-color: rgba(255, 255, 255, 0.75);
    color: black;
    height: 6mm;
    display: inline-block;
    border-color: grey;
    border-style: solid;
    border-width: 0.1mm;
  }

  .skill__name--placeholder {
    width: 74%;
  }

  .skill__value--placeholder {
    float: right;
    width: 25%;
  }

</style>

<template>
  <div class="card">
    <div class="card-title" v-bind:class="flavour">
      <span class="card-title__text">{{ name }}</span>
    </div>
    <div v-if="profession" class="card-title__subtitle">
      <span class="card-title__subtitle-text" v-bind:class="flavour">{{ profession }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CharacterSheetName",
    props: {
      name: {type: String},
      profession: {type: String},
      flavour: {type: String, default: ''}
    }
  }
</script>

<style scoped>
  .card {
    position: absolute;
    top: 2mm;

  }

  .card-title {
  / / background-color: rgba(0, 0, 0, 0.75);
    color: black;
    display: table;
    margin-bottom: 1mm;
    width: 100%;

    font-size: 5mm;

    padding-left: 5mm;
    padding-right: 15mm;

    border-bottom: 2px solid forestgreen;
    border-radius: 0px;
  / / box-shadow: 0 0 px 10 px 0 px forestgreen;
  }

  .card-title__subtitle {
    padding-left: 5mm;
  }

  .card-title__subtitle-text {
    font-size: 4mm;
  }
</style>

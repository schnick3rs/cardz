<template>
  <div>
    <div class="card-title">
      <span class="card-title__text">{{ title }}</span>
    </div>
    <div v-if="subtitle" class="card-title__subtitle">
      <span class="card-title__subtitle-text ">{{ subtitle }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SpaceCardTitle',
    props: {
      title: {type: String, required: true},
      subtitle: {type: String, required: false}
    }
  }
</script>

<style scoped>
  .card-title {
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
    display: table;
    margin-bottom: 1mm;
    width: 100%;

    border-bottom: 2px solid forestgreen;
    border-radius: 0px;
    box-shadow: 0 0px 10px 0px forestgreen;
  }
  .card-title__text {
    font-size: 3.5mm;
    text-transform: uppercase;
    text-align: center;
    vertical-align: middle;
    display: table-cell;
    margin: 0mm;
    text-align: left;
    padding-left: 4mm;
    padding-top: 2mm;
    line-height: 6.0mm;
  }

  .card-title__subtitle-text {
    padding-left: 4mm;
    color: forestgreen;
    text-shadow: -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
    font-style: italic;
  }

  .card-title__subtitle-text--white-glow {
    text-shadow: -1px -1px 0 #fff,
    1px -1px 0 #fff,
    -1px 1px 0 #fff,
    1px 1px 0 #fff;
  }
</style>

<template>
  <div class="card-title">
    <span class="card-title__text">{{ title }}</span>
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
    margin-bottom: 3mm;
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
    padding-top: 2 m m;
    line-height: 6.0mm;
  }
</style>

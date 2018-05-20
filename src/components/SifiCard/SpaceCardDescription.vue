<template>
  <div>
    <div class="card-text-container">
      <div class="card-text-description" v-html="description"></div>
      <div class="card-text-description" v-if="overcast" v-html="overcast"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SpaceCardDescription",
    props: {
      description: {type: String}
    }
  }
</script>

<style scoped>
  .card-text-container {
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
    position: absolute;
    bottom: 0;
    width: 100%;
    margin-bottom: 3mm;

    border-top: 2px solid forestgreen;
    border-bottom: 2px solid forestgreen;
    box-shadow: 0 0px 10px 0px forestgreen;
  }

  .card-text-container .card-text-description {
    font-family: "sans serif";
    display: inline-block;
    font-size: 2.5mm;
    margin: 1mm;
  }

  .card-text-description >>> p {
    font-size: 2.5mm;
    line-height: 3.5mm;
    text-align: justify;
    margin-top: 0;
    margin-bottom: 0.5mm;
  }

  .card-text-description >>> ul {
    padding-left: 3mm;
    margin: 0;
    margin-bottom: 0.5mm;
  }
</style>

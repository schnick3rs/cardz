<template>
  <div class="container" v-bind:class="flavour">
    <div class="container__content">
      <p class="container__text" v-html="description"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterSheetDescription',
  props: {
    description: {type: String, default: ''},
    flavour: {type: String, default: ''}
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  .container {
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
    margin-bottom: 3mm;

    border-top: 2px solid forestgreen;
    border-bottom: 2px solid forestgreen;
    box-shadow: 0 0px 10px 0px forestgreen;
  }

  .container.yellow {
    border-top: 2px solid yellow;
    border-bottom: 2px solid yellow;
    box-shadow: 0 0px 10px 0px yellow;
  }

  .container.imperial-guard {
    border-top: 2px solid forestgreen;
    border-bottom: 2px solid forestgreen;
    box-shadow: 0 0px 10px 0px forestgreen;
  }

  .container.adeptus-mechanicus {
    border-top: 2px solid orangered;
    border-bottom: 2px solid orangered;
    box-shadow: 0 0px 10px 0px orangered;
  }

  .container.navis-nobilite,
  .container.adeptus-astartes {
    border-top: 2px solid dodgerblue;
    border-bottom: 2px solid dodgerblue;
    box-shadow: 0 0px 10px 0px dodgerblue;
  }

  .container_content {

  }

  .container__text {
    /*font-family: "sans serif";*/
    font-family: 'Roboto', sans-serif;
    display: inline-block;
    font-size: 3mm;
    line-height: 4mm;
    margin: 1mm;
  }

  .container__text >>> p {

    text-align: justify;
    margin-top: 0;
    margin-bottom: 1.5mm;
  }

  .container__text >>> ul {
    padding-left: 3mm;
    margin: 0;
    margin-bottom: 1.5mm;
  }
</style>

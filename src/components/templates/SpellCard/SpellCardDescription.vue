<template>
  <div class="container shadow" v-bind:class="[ flavour ]">
    <div class="container-text" v-html="description"></div>
    <hr v-if="overcast" :class="[ flavour ]"/>
    <div class="container-text container-text--overcast" v-if="overcast" v-html="overcast"></div>
  </div>
</template>

<script>
export default {
  name: 'SpellCardDescription',
  props: {
    description: {type: String},
    overcast: {type: String},
    flavour: {type: String, default: 'light'}
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto');

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

  hr {
    border: 0;
    height: 1px;
    margin-top: -0.0mm;
    margin-bottom: -0.0mm;
  }

  .container.light hr {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  }

  .container.dark hr {
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
  }

  .container-text {
    font-family: 'Roboto', sans-serif;
  display: inline-block;
  margin: 1mm;
}

  .container-text >>> p {
    font-size: 2.5mm;
    line-height: 3.3mm;
    text-align: justify;
    margin-top: 0;
    margin-bottom: 0.8mm;
  }

  .container .container-text >>> hr {
    border: 0;
    height: 1px;
    margin-top: 0.5mm;
    margin-bottom: 0.5mm;
  }

  .container.light .container-text >>> hr {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  }

  .container.dark .container-text >>> hr {
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
  }
  .container-text >>> li {
    line-height: 3.5mm;
  }
  .container-text >>> ul {
  padding-left: 3mm;
    margin: 0 0 0.5mm;
}
</style>

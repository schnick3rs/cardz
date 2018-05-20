<template>
  <div>
    <div class="card card-dimensions--magic card-bg">
      <SpaceCardTitle :title="card.title"></SpaceCardTitle>
      <SpaceCardDescription :description="card.description"></SpaceCardDescription>
    </div>
  </div>
</template>

<script>
  import SpaceCardTitle from './SpaceCardTitle';
  import SpaceCardDescription from './SpaceCardDescription';
  export default {
    name: 'SpaceCard',
    components: {SpaceCardTitle, SpaceCardDescription},
    data() {
      return {
        card: {
          title: "Crush the Sensory",
          description: "<p>You have positioned youself so that you can decimate the enemies augur telemetry array.</p>"
        }
      }
    }
  }
</script>

<style scoped>
  .card {
    font-family: Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal, "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", "sans serif";
    font-size: 2.5mm;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
  }

  .card {
    border-color: red;
    border: 0.3mm;
    border-style: dashed;

    overflow: hidden;
    position: relative;
  }

  .card-dimensions--magic {
    height: 88mm;
    width: 63mm;
  }

  .card-bg {
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('http://www.wallpapers13.com/wp-content/uploads/2015/12/Space-Battle-Wide-Desktop-Background-915x515.jpg');
  }

  .card-image {
  / / -moz-box-shadow: inset 0 8 px 8 px - 8 px #4c4c4c, inset 0 - 8 px 8 px - 8 px #4c4c4c;
  / / -webkit-box-shadow: inset 0 8 px 8 px - 8 px #4c4c4c, inset 0 - 8 px 8 px - 8 px #4c4c4c;
    box-shadow: inset 0 16px 8px -8px #4c4c4c, inset 0 -16px 8px -8px #4c4c4c;
    height: 30%;
  }

  .card-image {
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .card-description {
    background-color: rgba(255, 255, 255, 0.75);
    color: black;
  / / box-shadow: 5 px 0 px 2 mm 0 mm #4c4c4c;
    display: table;
    margin-top: 3mm;
    width: 100%;
  }

  .card-description--fixed {
    height: 65%;
  }

  .card-description__text {

  }
</style>

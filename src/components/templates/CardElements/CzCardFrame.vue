<template>
  <div class="card cutter" :class="[ dimensions ]">
    <div class="background" :style="backgroundStyle">
    </div>
    <img class="background-image" :src="backgroundImage" style="display:none;"/>

    <div style="position: absolute; top:0; bottom:0; left:0; right:0;">
    <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CzCardFrame",
    props: {
      dimensions: {type: String, required: true},
      lines: {type: Array},
      backgroundImage: {type: String, default: ''}
    },
    computed: {
      backgroundStyle: function () {
        return {
          backgroundImage: 'url("' + this.backgroundImage + '")'
          /*          opacity: 0.5,
                    '-webkit-Filter': 'sepia(100%)'*/
        }
      }
    }
  }
</script>

<style scoped>
  .card {
    overflow: hidden;
    position: relative;
  }

  .cutter {
    border-color: red;
    border: 0.3mm;
    border-style: dashed;
  }

  .zombicide-item {
    height: 63mm;
    width: 41mm;
  }

  .zombicide-hero {
    height: 76mm;
    width: 88mm;
  }

  .din-a4 {
    height: 297mm;
    width: 210mm;
  }

  .din-a5 {
    height: 210mm;
    width: 148mm;
  }

  .din-a5-landscape {
    height: 148mm;
    width: 210mm;
  }

  /* find correct dimensions */
  .din-a6-landscape {
    height: 74mm;
    width: 105mm;
  }

  .magic {
    height: 88mm;
    width: 63mm;
  }

  .magic-landscape {
    height: 63mm;
    width: 88mm;
  }

  .dragonsleeve {
    height: 91mm;
    width: 63mm;
  }

  .background-image {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    opacity: 0.5;

  }

  .background {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .background {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    opacity: 0.5;

    background-color: unset;
    color: unset;

    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }

</style>

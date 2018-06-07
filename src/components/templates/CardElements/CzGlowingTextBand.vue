<template>
  <div class="container" :style="glowingBorder">
    <div class="content" v-html="html"></div>
  </div>
</template>

<script>
  export default {
    name: 'CzGlowingTextBand',
    props: {
      html: {type: String, required: true},
      glowColor: {type: String, default: ''},
      lightTheme: {type: Boolean, default: false}
    },
    computed: {
      glowingBorder: function () {
        if (this.glowColor) {
          return {
            borderTop: '2px solid ' + this.glowColor,
            borderBottom: '2px solid ' + this.glowColor,
            boxShadow: '0 0px 10px 0px ' + this.glowColor
          }
        }
        return ''
      }
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  .container {
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
    width: 100%;
  }

  .content {
    font-family: 'Roboto', sans-serif;
    display: block;
    margin: 1mm;
  }

  .content >>> p {
    font-size: 2.5mm;
    line-height: 4.0mm;
    text-align: justify;
    margin-top: 0;
    margin-bottom: 0.5mm;
  }

  .content >>> li {
    line-height: 3.5mm;
  }

  .content >>> ul {
    padding-left: 3mm;
    margin: 0 0 0.5mm;
  }

  .content >>> hr {
    border: 0;
    width: 100%;
    height: 1px;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
    margin-top: 1mm;
    margin-bottom: 1mm;
  }
</style>

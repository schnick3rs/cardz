<template>
  <div :class="[ position, theme, size ]">
    Credit: <i>
    <slot></slot>
  </i>
  </div>
</template>

<script>
  export default {
    name: "CardCopyright",
    props: {
      position: {type: String, default: "bottom"},
      theme: {type: String, default: "light"},
      size: {type: String, default: "normal"}
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  * {
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
  }

  .top {
    position: absolute;
    top: 0;
    width: 100%;
    text-align: center;
  }

  .bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
  }

  .light {
    color: white;
  }

  .dark {
    color: black;
  }

  .normal {
    font-size: 2mm;
    line-height: 3mm;
  }

  .dense {
    font-size: 1.5mm;
    line-height: 1.8mm;
  }

  .prominent {
    font-size: 3mm;
    line-height: 3.5mm;
  }
</style>

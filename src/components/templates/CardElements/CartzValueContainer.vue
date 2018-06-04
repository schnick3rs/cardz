<template>
  <div class="container" :class="[ position ]">
    <img class="icon" :src="mailedFist"/>
    <span class="value"><slot></slot></span>
  </div>
</template>

<script>
  export default {
    name: "CartzValueContainer",
    props: {
      icon: String,
      position: {type: String, default: 'center'}
    },
    data() {
      return {
        mailedFist: require('../../../assets/img/mailed-fist.png'),
      }
    },
    computed: {
      background: function () {
        let icon = this.icon
        if (icon) {
          return 'background-image: url("' + this.mailedFist + '")'
        }
        return ''
      }
    }
  }
</script>

<style scoped>
  .container {

  }

  .container.center {
    position: absolute;
    width: 50%;
    left: 25%;
    top: 25%;
  }

  .icon {
    width: 100%;
    clip-path: circle(50%);
    opacity: 0.85;
    background-color: rgba(0, 0, 0, 0.75);
  }

  .icon.mailed-fist {
  }

  .value {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 10mm;
  }
</style>

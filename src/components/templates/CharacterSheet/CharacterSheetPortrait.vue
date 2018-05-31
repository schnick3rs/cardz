<template>
  <div class="portrait-container portrait-container--fixed">
    <img class="card-bg "
         src="../../../assets/template-frame-green-portrait.png"
    />
    <div class="portrait-container__image portrait-container__image--mask"
         v-bind:style="{ 'background-image': 'url(' + portrait + ')' }">
    </div>
  </div>
</template>

<script>
  export default {
    name: "CharacterSheetPortrait",
    props: {
      portrait: {type: String, default: 'http://www.auto-nothaft.de/wp-content/uploads/2013/07/profile-placeholder.gif'}
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .card-bg {
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .portrait-container--fixed {
  }

  .card__portrait-container {
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
  / / background-image: url('https://vignette.wikia.nocookie.net/warhammer40k/images/f/f9/IG_Sergeant.jpg/revision/latest?cb=20130408090242');
  }

  .portrait-container__image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .portrait-container__image--mask {
    margin-top: 3mm;
    margin-left: 6.5mm;
    margin-bottom: 3mm;
    margin-right: 1mm;
    clip-path: polygon(
      0% 0%, 26% 0%, 31.5% 3%, 37% 0%, 100% 0%,
      100% 100%, 37% 100%, 32% 97%, 25.5% 100%,
      0% 100%, 0% 86%, 5.5% 82.5%, 0% 79%, 0% 21%, 5.5% 17.5%, 0% 14%
    );
  }

  /*
  clip-path: polygon(
      9.5% 2.5%, 33% 2.5%, 37.5% 5.5%, 42% 2.5%, 98.8% 2.5%,
      98.8% 97.5%, 42% 97.5%, 38% 94.5%, 32% 97.5%,
      9.5% 97.5%
    );
   */

</style>

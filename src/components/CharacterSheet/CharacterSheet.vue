<template>
  <div>
    <div class="card card-dimensions--a5-landscape card-bg">
      <aside>
      </aside>
      <section>

      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CharacterSheet",
    props: {
      character: {type: Object, required: true}
    },
    created: function () {
      if (this.character === undefined) {
        this.character = {
          _theme: 'https://vignette.wikia.nocookie.net/warhammer40k/images/f/f9/IG_Sergeant.jpg/revision/latest?cb=20130408090242',
          name: 'Col. Armus Strok',
          profession: 'PVS Commander in Chief',
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

  .card-dimensions--a5-landscape {
    height: 148.5mm;
    width: 210mm;
  }

  .card-bg {
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  / / background-image: url('https://vignette.wikia.nocookie.net/warhammer40k/images/f/f9/IG_Sergeant.jpg/revision/latest?cb=20130408090242');
    background-color: #000;
  }

  aside {
    position: absolute;
    left: 5mm;
    top: 5mm;
    height: 50%;
    width: 33%;
    border-width: 2px;
    border-style: dashed;
    border-color: orangered;
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('https://vignette.wikia.nocookie.net/warhammer40k/images/f/f9/IG_Sergeant.jpg/revision/latest?cb=20130408090242');
  }

  section {

  }
</style>

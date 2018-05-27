<template>
  <div>
    <div class="printable-item printable-item--sci-fi printable-item--a5-landscape character-sheet">
      <div>
        <div class="character-sheet__background character-sheet__background--war" v-bind:class="character._flavour"/>
      </div>
      <div>
        <CharacterSheetName :name="character.name" :profession="character.profession"></CharacterSheetName>
        <CharacterSheetPortrait :portrait="character.portrait"></CharacterSheetPortrait>
      </div>
    </div>
  </div>
</template>

<script>
  import CharacterSheetPortrait from "./CharacterSheetPortrait";
  import CharacterSheetName from "./CharacterSheetName";
  export default {
    name: "CharacterSheet",
    components: {CharacterSheetName, CharacterSheetPortrait},
    props: {
      character: {type: Object, required: true}
    },
    created: function () {
      if (this.character === undefined) {
        this.character = {
          _theme: 'https://i.pinimg.com/originals/4d/f3/f5/4df3f5c0c1e4d3e569d50cacb442fe17.jpg',
          portrait: 'https://i.pinimg.com/originals/4d/f3/f5/4df3f5c0c1e4d3e569d50cacb442fe17.jpg',
          name: 'Col. Armus Strok',
          profession: 'PVS Commander in Chief',
        }
      }
    }
  }
</script>

<style scoped>
  .printable-item {
    border-color: red;
    border: 0.3mm;
    border-style: dashed;

    overflow: hidden;
    position: relative;
  }

  .printable-item--sci-fi {
    font-family: Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal, "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", "sans serif";
    font-size: 2.5mm;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
  }

  .printable-item--a5-landscape {
    height: 148.5mm;
    width: 210mm;
  }

  .character-sheet__background {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .character-sheet__background.inquisition {
    background-image: url('https://i.ytimg.com/vi/1qwOUcqhwSI/maxresdefault.jpg');
    opacity: 0.5;
  }

  .character-sheet__background.adeptus-astartes {
    background-image: url('https://vignette.wikia.nocookie.net/warhammer40k/images/3/3b/UM_Company_formation.png/revision/latest/scale-to-width-down/1000?cb=20130921060347');
    opacity: 0.5;
  }

  .character-sheet__background.adeptus-mechanicus {
    background-image: url('http://www.mesacuadrada.es/wp-content/uploads/2017/07/19257651e17feb19b6e2603852bd62fa.png');
    opacity: 0.5;
  }

  .character-sheet__background.imperial-guard {
    background-image: url('https://78.media.tumblr.com/82938fb0efc7203f68e6c6d3237bbdd1/tumblr_oh3fwsc9Hg1vjjcaco1_1280.jpg');
    opacity: 0.5;
    -webkit-filter: sepia(100%);
  }

  .character-sheet__background--war {
    background-image: url('https://78.media.tumblr.com/82938fb0efc7203f68e6c6d3237bbdd1/tumblr_oh3fwsc9Hg1vjjcaco1_1280.jpg');
    opacity: 0.5;
  }

</style>

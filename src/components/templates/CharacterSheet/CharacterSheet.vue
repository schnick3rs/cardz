<template>
  <div class="cz-printable-item">

    <cz-card-frame
      class="printable-item--sci-fi character-sheet "
      dimensions="din-a5-landscape"
      :backgroundImage="backgroundImages[character._flavour]"
    >

      <div class="character-sheet__background character-sheet__background--war" v-bind:class="character._flavour"/>

      <div>
        <CharacterSheetName :name="character.name" :profession="character.profession"></CharacterSheetName>
        <CharacterSheetPortrait
          class="character-sheet__portrait"
          :portrait="character.portrait"
        />
      </div>

      <div class="characteristic-section">

        <div class="attribute-holder attribute-holder--table">
          <table>
            <tr>
              <th class="table-cell table-header" v-for="attribute in character.attributes"
                  v-bind:key="attribute.label">{{ attribute.code }}
              </th>
            </tr>
            <tr>
              <td class="table-cell table-value" v-for="attribute in character.attributes" v-bind:key="attribute.label">
                &nbsp;{{ attribute.value }}
              </td>
            </tr>
          </table>
        </div>

        <CharacterSheetSkillHolder
          :skills="character.skills"
        />

      </div>

      <CharacterSheetDescription
        :description="character.description"
        :flavour="character._flavour"
        class="character-sheet__description"
      />

    </cz-card-frame>

  </div>

</template>

<script>
import CharacterSheetPortrait from './CharacterSheetPortrait'
import CharacterSheetName from './CharacterSheetName'
import CharacterSheetDescription from './CharacterSheetDescription'
import CharacterSheetSkillHolder from './CharacterSheetSkillHolder'
import CzCardFrame from '../CardElements/CzCardFrame'
export default {
  name: 'CharacterSheet',
  components: {
    CzCardFrame,
    CharacterSheetSkillHolder,
    CharacterSheetDescription,
    CharacterSheetName,
    CharacterSheetPortrait
  },
  props: {
    character: {type: Object, required: true}
  },
  data () {
    return {
      backgroundImages: {
        doom: 'https://pre00.deviantart.net/af57/th/pre/i/2014/266/9/6/doctor_doom_splat_colors_by_slypstream-d809r5v.png',
        imperialGuard: 'https://78.media.tumblr.com/82938fb0efc7203f68e6c6d3237bbdd1/tumblr_oh3fwsc9Hg1vjjcaco1_1280.jpg'
      }
    }
  },
  created: function () {
    if (this.character === undefined) {
      this.character = {
        _theme: 'https://i.pinimg.com/originals/4d/f3/f5/4df3f5c0c1e4d3e569d50cacb442fe17.jpg',
        portrait: 'https://i.pinimg.com/originals/4d/f3/f5/4df3f5c0c1e4d3e569d50cacb442fe17.jpg',
        name: 'Col. Armus Strok',
        profession: 'PVS Commander in Chief'
      }
    }
  }
}
</script>

<style scoped>
  .printable-item--sci-fi {
    font-family: Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal, "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", "sans serif";
    font-size: 2.5mm;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
  }

  .character-sheet__background {
  }

  .character-sheet__background.inquisition {
    background-image: url('https://spikeybits.com/wp-content/uploads/2016/07/female-inquisitor-sisters.jpg');
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

  .character-sheet__background.navis-nobilite {
    background-image: url('https://vignette.wikia.nocookie.net/warhammer40k/images/d/d9/Iron_Hands_Fleet_Arrives.png/revision/latest?cb=20140415161335');
    opacity: 0.5;
  }

  .character-sheet__background.doom {
    background-image: url('https://pre00.deviantart.net/af57/th/pre/i/2014/266/9/6/doctor_doom_splat_colors_by_slypstream-d809r5v.png');
    opacity: 0.3;
  }

  .character-sheet__background--war {
    background-image: url('https://78.media.tumblr.com/82938fb0efc7203f68e6c6d3237bbdd1/tumblr_oh3fwsc9Hg1vjjcaco1_1280.jpg');
    opacity: 0.5;
  }

  .characteristic-section {
    position: absolute;
    right: 5mm;
    top: 5mm;
  }

  .attribute-holder {

  }

  .table-cell {
    width: 13mm;
    vertical-align: middle;
    text-align: center;
    display: table-cell;
    font-size: 5mm;
    line-height: 8mm;
  }

  .table-header {
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
  }

  .table-value {
    background-color: rgba(255, 255, 255, 0.75);
    color: black;
  }

  .character-sheet__portrait {
    position: absolute;
    left: 0mm;
    bottom: 10mm;
    width: 33%;
    z-index: 2;
  }

  .character-sheet__description {
    position: absolute;
    bottom: 15mm;
    width: 100%;
    z-index: 1;
    min-height: 20%;
    padding-left: 35%;
    padding-right: 5mm;
  }
</style>

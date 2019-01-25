<template>
  <div class="cz-printable-item">

    <cz-card-frame
      class="printable-item--sci-fi character-sheet"
      dimensions="din-a6-landscape"
      :backgroundImage="backgroundImages[character._flavour]"
      :opacity="0.5"
    >

      <section class="card-page card-page--left">

        <div>
          <character-sheet-name
            :name="character.title"
            :profession="character.classification['3']"
            style="position: unset;"
          />
        </div>

        <div id="traits">

          <span>{{ character.traits.defense.value }}</span>
          <span>{{ character.traits.resilience.value }}</span>
          <span>{{ character.traits.soak.value }}</span>
          <span>{{ character.traits.shock.value }}</span>
          <span>{{ character.traits.wounds.value }}</span>

        </div>

        <div id="actions" class="actions">
          <div class="actions__container">
            <div class="actions__action" v-for="action in character.actions" v-bind:key="action.key" :id="action.key">
              <span class="actions__action-label" v-html="action.label"></span>
              <div class="actions_action-value-holder">
                <span class="actions__action-value" v-for="entry in action.table">{{entry}}</span>
              </div>
              <div class="actions__modifiers">
                <p v-for="mod in action.mods">{{mod.short}}</p>
              </div>
            </div>
          </div>
        </div>

        <div id="abilities">
          <p class="abilities__ability-html-content" v-for="ability in character.abilities" v-html="ability.short"></p>
        </div>

      </section>

      <section class="card-page card-page--right">

        <div id="reference-mob">

        </div>

      </section>


      <div class="characteristic-section">


      </div>
    </cz-card-frame>

  </div>

</template>

<script>
  import CharacterSheetName from "../CharacterSheet/CharacterSheetName";
  import CzCardFrame from "../CardElements/CzCardFrame";
  import SpaceCardTitle from "../SpaceCard/SpaceCardTitle";
  import CartzValueContainer from "../CardElements/CartzValueContainer";

  export default {
    name: "WngMonsterSheet",
    components: {
      CartzValueContainer,
      SpaceCardTitle,
      CzCardFrame,
      CharacterSheetName
    },
    props: {
      character: {type: Object, required: true}
    },
    data() {
      return {
        backgroundImages: {
          doom: 'https://pre00.deviantart.net/af57/th/pre/i/2014/266/9/6/doctor_doom_splat_colors_by_slypstream-d809r5v.png',
          imperialGuard: 'https://78.media.tumblr.com/82938fb0efc7203f68e6c6d3237bbdd1/tumblr_oh3fwsc9Hg1vjjcaco1_1280.jpg',
          chaos_cultists: 'https://spikeybits.com/wp-content/uploads/2018/03/culty.jpg'
        }
      }
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
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  .printable-item--sci-fi {
    font-family: Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal, "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", "sans serif";
    font-size: 2.5mm;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
  }

  .card-page {
    width: 50%;
    height: 100%;
  }

  .abilities__ability-html-content em {
    color: red;
  }

  .card-page--left {
    float: left;
    border: red solid 1px;
  }

  .card-page--right {
    float: right;
    border: blue solid 1px;
  }

  .actions {
    font-family: 'Roboto', sans-serif;
    position: relative;
    width: 100%;
  }

  .actions__container {

  }

  .actions__action {
    color: white;
    background-image: linear-gradient(to right, rgba(255, 0, 0, 0.50), rgba(255, 0, 0, 0));
    padding: 0 5px;
    margin: 5px 0;
  }

  .actions__action-label {
    text-decoration: underline;
    font-weight: bold;
    font-size: larger;
  }

  .actions__action-label em {
    color: red;
  }

  .actions__action-value {
    margin: 0 5px;
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

  .character-sheet__background.chaos_cultists {
    background-image: url('https://spikeybits.com/wp-content/uploads/2018/03/culty.jpg');
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

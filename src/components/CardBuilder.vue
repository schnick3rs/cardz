<template>
  <div>
    <section class="card-container card-input-container col-6">
      <div class="input-field">
        <label class="input-field__label" for="cardBackground">Custom background Image</label>
        <input class="input-field__field" id="cardBackground" v-model="card._customTheme"/>
      </div>
      <div class="input-field input-field--radio">
        <label class="input-field__label">Color Flavour</label>
        <label for="flavour-red" style="float:left">red:</label>
        <input class="input-field__field input-field__field--radio" id="flavour-red" type="radio" value="red"
               v-model="card._flavour"/>
        <label for="flavour-green" style="float:left">green:</label>
        <input class="input-field__field input-field__field--radio" id="flavour-green" type="radio" value="green"
               v-model="card._flavour"/>
        <label for="flavour-blue" style="float:left">blue:</label>
        <input class="input-field__field input-field__field--radio" id="flavour-blue" type="radio" value="blue"
               v-model="card._flavour"/>
        <label for="flavour-yellow" style="float:left">yellow:</label>
        <input class="input-field__field input-field__field--radio" id="flavour-yellow" type="radio" value="yellow"
               v-model="card._flavour"/>
        <span>Select a color flavour...</span>
      </div>
      <div class="input-field">
        <label class="input-field__label" for="cardTitle">Title</label>
        <input class="input-field__field" id="cardTitle" v-model="card.title"/>
      </div>
      <div class="input-field">
        <label class="input-field__label" for="cardSubtitle">Subitle</label>
        <input class="input-field__field" id="cardSubtitle" v-model="card.subtitle"/>
      </div>
      <div class="input-field input-field">
        <label class="input-field__label" for="cardSubtitle">Description</label>
        <textarea class="input-field__field input-field__field--textarea" v-model="card.description"/>
      </div>
    </section>
    <section class="card-container card-container--preview col-6">
      <SpaceCard :card="card"></SpaceCard>
    </section>
  </div>
</template>

<script>
  import SpaceCard from "./SpaceCard/SpaceCard";
  export default {
    name: "CardBuilder",
    components: {SpaceCard},
    data() {
      return {
        inputs: {
          title: {
            id: 'inputTitle',
            label: 'Title'
          }
        },
        card: {
          title: 'Crush the Sensory',
          subtitle: 'Battle Opportunity',
          description: "<p>You have positioned youself so that you can decimate the enemies augur telemetry array.</p>"
        }
      }
    }
  }
</script>

<style scoped>
  .card-container {
    float: left;
    padding: 4mm 2mm;
  }

  .card-container {
    width: 65mm;
  }

  .card-container--preview {
    width: fit-content;
  }

  .input-field {
    margin-bottom: 4mm;
    width: 100%;
  }

  .input-field--radio span {
    display: block;
    clear: both;
    font-style: italic;
    font-size: xx-small;
  }

  .input-field__label {
    display: block;
    font-size: small;
    font-weight: bold;
  }

  .input-field__field {
    width: 100%;
  }

  .input-field__field--textarea {
    height: 40mm;
    resize: vertical;
  }

  .input-field__field--radio {
    width: unset;
    float: left;
  }

</style>

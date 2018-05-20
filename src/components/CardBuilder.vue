<template>
  <div>
    <section class="card-container card-input-container col-6">
      <div class="input-field">
        <label class="input-field__label" for="cardBackground">Custom background Image</label>
        <input class="input-field__field" id="cardBackground" v-model="card._theme"/>
      </div>
      <div class="input-field input-field-radio">
        <label class="input-field__label input-field-radio__label">Color Flavour</label>
        <div>
          <div v-for="flavour in fields.flavours" v-bind:key="flavour.id" style="display: inline; margin-left:2mm;">
            <label style="font-size: xx-small;" v-bind:style="{ color: flavour.color }">{{ flavour.label }}</label>
            <input type="radio" v-bind:value="flavour.value" v-model="card._flavour"
                   style="margin: 0;padding: 0;vertical-align: middle;"/>
          </div>
        </div>
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
          description: "<p>You have positioned youself so that you can decimate the enemies augur telemetry array.</p>",
          _flavour: 'green'
        },
        fields: {
          flavours: [
            {label: 'Green', value: 'green', color: 'forestgreen'},
            {label: 'Red', value: 'red', color: 'orangered'},
            {label: 'Blue', value: 'blue', color: 'blue'},
            {label: 'Yellow', value: 'yellow', color: 'yellow'}
          ]
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

  /* INPUT RADIO FLAVOUR COLOR */
  .input-field-radio ul, .input-field-radio li {
    list-style-type: none;
    display: inline;
  }

  .input-field-radio__container { /* The container */
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .input-field-radio__container input { /* Hide the browser's default radio button */
    position: absolute;
    opacity: 0;
    cursor: pointer;
    z-index: -1;
  }

  .input-field-radio__checkbox { /* Create a custom radio button */
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
  }

  .input-field-radio__container:hover input ~ .input-field-radio__checkbox { /* On mouse-over, add a grey background color */
    background-color: #ccc;
  }

  .input-field-radio input:checked ~ .input-field-radio__checkbox { /* When the radio button is checked, add a blue background */
    background-color: #2196F3;
  }

  .input-field-radio__checkbox:after { /* Create the indicator (the dot/circle - hidden when not checked) */
    content: "";
    position: absolute;
    display: none;
  }

  .input-field-radio__container input:checked ~ .input-field-radio__checkbox:after { /* Show the indicator (dot/circle) when checked */
    display: block;
  }

  .input-field-radio__checkbox:after { /* Style the indicator (dot/circle) */
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
</style>

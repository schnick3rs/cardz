<template>
  <div>
    <section class="card-container card-input-container col-6">
      <div class="input-field">
        <label class="input-field__label" for="cardBackground">Bustom background Image</label>
        <input class="input-field__field" id="cardBackground" v-model="card.customBackground"/>
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


</style>

<template>
  <div class="page spellbook">
    <div v-for="card in cardRepository" :key="card.id" class="page__card">
      <SpaceCard :card="card"></SpaceCard>
    </div>
  </div>
</template>

<script>
  import CardRepository from '../assets/projects/rogueTrader/rouge-trader-battle-opportunity-repository'
  import SpaceCard from "./SpaceCard/SpaceCard";
  export default {
    name: "ProjectPrinter",
    components: {SpaceCard},
    data() {
      return {
        cardRepository: CardRepository,
      }
    }
  }
</script>

<style scoped>
  .page .page__card {
    float: left;
  }

  .page .page__card {
    display: block;
    page-break-inside: avoid;
  }
</style>

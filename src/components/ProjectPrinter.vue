<template>
  <div class="page spellbook">
    <div v-for="card in cardRepository" :key="card.id" class="page__card">
      <SpaceCard :card="card"></SpaceCard>
    </div>
  </div>
</template>

<script>
  import FutureCardRepository from '../assets/projects/rogueTrader/rouge-trader-battle-opportunity-repository'
  import DndCardRepository from '../assets/projects/dndAlliesAndMonsters/dnd-allies-and-monsters-repository'
  import SandboxRepository from '../assets/projects/sandbox-repository'
  import SpaceCard from "./SpaceCard/SpaceCard";
  export default {
    name: "ProjectPrinter",
    components: {SpaceCard},
    data() {
      return {
        repositories: [DndCardRepository, FutureCardRepository, SandboxRepository],
        cardRepository: SandboxRepository,
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

<template>
  <div>
    <div class="toolbar">

      <form novalidate class="md-layout" @submit.prevent="loadFromJson">

        <md-card class="md-layout-item md-size-100">

          <md-card-header>
            <div class="md-title">Loader</div>
          </md-card-header>

          <md-card-content>

            <md-field>
              <label>Insert JSON String</label>
              <md-textarea v-model="jsonString"></md-textarea>
            </md-field>

          </md-card-content>

          <md-card-actions>
            <md-button type="submit" class="md-primary">Render Cards</md-button>
          </md-card-actions>

        </md-card>

      </form>

    </div>
    <div class="page">
      <SpaceCard v-for="card in currentRepository" :key="card.id" class="page__card" :card="card">
      </SpaceCard>
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
        currentRepository: [],
        jsonString: ''
      }
    },
    methods: {
      loadFromJson: function (e) {
        this.currentRepository = JSON.parse(this.jsonString)
      }
    },
    created: function () {
      let repo = this.$route.params.payload
      if (repo) {
        this.currentRepository = repo
        this.jsonString = JSON.stringify(repo)
      }
    }
  }
</script>


<style scoped>
  @media print {
    .toolbar {
      display: none;
    }
    .page .page__card {
      display: block;
      page-break-inside: avoid;
    }
  }
  .page .page__card {
    float: left;
  }
  .page .page__card {
    display: block;
    page-break-inside: avoid;
  }
</style>

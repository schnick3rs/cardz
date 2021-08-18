<template>

  <div class="md-layout">

    <md-dialog :md-active.sync="exportSpellModificationDialog" style="min-width: 80%;">
      <md-dialog-title>Copy JSON</md-dialog-title>
      <md-dialog-content>
        <md-field>
          <label>JSON</label>
          <md-textarea v-model="spellModificationJson" readonly></md-textarea>
        </md-field>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-raised md-accent">
          Copy to clipboard
        </md-button>
      </md-dialog-actions>
    </md-dialog>

    <div class="md-layout-item md-size-50 md-small-size-100">

      <md-card>

        <md-card-actions>
          <md-button @click="update">Random Spell</md-button>
        </md-card-actions>

        <md-card-content>

          <spell-card-edit-form :card="card"></spell-card-edit-form>

        </md-card-content>

        <md-card-actions>
          <md-button class="md-raised" @click="exportSpellModificationDialog = true">export modification</md-button>
          <md-button type="submit" class="md-raised md-primary">Add Card</md-button>
        </md-card-actions>

      </md-card>

    </div>

    <div class="md-layout-item size-50">
      <spell-card :spell="card" :flavour="card._flavour"></spell-card>
    </div>

  </div>

</template>

<script>
import SpellRepository from '../../assets/repositories/dnd-spells-migrated.json'
import SpellModifications from '../../assets/repositories/dnd-spells--mods.json'
import SpellCard from '../templates/SpellCard/SpellCard'
import SpellCardEditForm from '../SpellCardEditForm'
export default {
  name: 'CardBuilder',
  components: {SpellCardEditForm, SpellCard, SpellRepository, SpellModifications},
  data () {
    return {
      card: undefined,
      spellRepository: SpellRepository,
      spellModifications: SpellModifications,
      exportSpellModificationDialog: false
    }
  },
  computed: {
    spellModificationJson: function () {
      let modification = {}
      if (this.card) {
        modification = {
          name: this.card.name,
          description: this.card.description,
          descriptionOvercast: this.card.descriptionOvercast
        }
      }
      return JSON.stringify(modification)
    }
  },
  created () {
    this.card = this.randomSpell()
  },
  methods: {
    randomSpell: function () {
      return this.spellRepository[Math.floor(Math.random() * this.spellRepository.length)]
    },
    update: function () {
      this.card = this.randomSpell()
    }
  }
}
</script>

<style scoped>
</style>

<template>
  <div>
    <textarea v-model="migratedSpells" cols="100" rows="20"></textarea>
  </div>
</template>

<script>
  import SpellsJson from '../assets/spell-repository.json'
  import SpellsModJson from '../assets/cardz-spell-mod-repository.json'
  export default {
  name: 'MigrateSpells',
  data () {
    return {
      spellDataJson: SpellsJson,
      spellModData: SpellsModJson
    }
  },
  computed: {
    migratedSpells: function () {
      var migrate = []
      for (var i = 0, len = this.spellDataJson.length; i < len; i++) {
        var daSpell = this.spellDataJson[i]
        var newSpell = {}
        var id = window.btoa(i)
        newSpell.id = id

        newSpell.name = daSpell.name
        newSpell.level = daSpell.level.substr(0, 1)
        if (newSpell.level === 'C') {
          newSpell.level = 0
        } else {
          newSpell.level = parseInt(newSpell.level)
        }
        newSpell.flags = []
        if (daSpell.ritual === 'yes') {
          newSpell.flags.push('Ritual')
        }
        if (daSpell.concentration === 'yes') {
          newSpell.flags.push('Concentration')
        }
        newSpell.description = daSpell.desc
        newSpell.meta = {
          castingTime: daSpell.casting_time,
          duration: daSpell.duration.replace('Up to ', ''),
          range: daSpell.range.replace(' feet', '\'')
        }
        newSpell.components = []
        if (daSpell.components.indexOf('V') >= 0) {
          newSpell.components.push('Verbal')
        }
        if (daSpell.components.indexOf('S') >= 0) {
          newSpell.components.push('Somatic')
        }
        if (daSpell.components.indexOf('M') >= 0) {
          newSpell.components.push('Material')
        }
        if (daSpell.material) {
          newSpell.materialText = daSpell.material
        }
        newSpell.descriptionOvercast = daSpell.higher_level
        newSpell.class = daSpell.class.split(',').map(v => v.trim())
        newSpell.source = daSpell.page
        var spellMod = this.spellModData.filter(v => v.name == newSpell.name)
        if (spellMod.length > 0) {
          newSpell = Object.assign(newSpell, spellMod[0])
        }

        migrate.push(newSpell)
      }
      return JSON.stringify(migrate)
    }
  }
}
</script>

<style scoped>
</style>

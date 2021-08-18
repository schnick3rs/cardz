<template>
  <div class="theme-config">
    <div class="input">
      <label for="school">School</label>
      <select id="school" v-model="selected">
        <option v-for="school in schools" v-bind:value="school.value" :key="school.value">
          {{ school.text }}
        </option>
      </select>
    </div>
    <div class="input">
      <label>Level</label>
      <input v-model.number="spell.level" type="number" value="2" v-bind:min="0" v-bind:max="9"/>
    </div>
    <div class="input">
      <label>Name</label>
      <input v-model="spell.name" />
    </div>
    <div class="input">
      <label>Spell Components</label>
      <input
        v-for="spellComponent in spellComponents"
        v-bind:key="spellComponent.id"
        v-bind:id="spellComponent"
        v-bind:value="spellComponent"
        type="checkbox"
        v-model="spell.components" />
      <div class="input">
        <label>Name</label>
        <input v-model="spell.materialText" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpellEditor',
  data () {
    return {
      schools: [
        { text: 'Warlock', value: 'mesmer' },
        { text: 'Druid', value: 'druid' },
        { text: 'paladin', value: 'paladin' }
      ]
    }
  }
}
</script>

<style scoped>

</style>

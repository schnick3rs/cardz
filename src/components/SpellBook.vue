<template>
  <div class="spellbook">
    <div v-for="spell in spellRepository" :key="spell">
      <span>{{ spell.name }} : {{ spell.level }}</span>
      <spell-card :spell="spell" ></spell-card>
    </div>
  </div>
</template>

<script>
import SpellCard from './SpellCard'
export default {
  name: 'SpellBook',
  components: { SpellCard },
  data () {
    return {
      spellBook: [],
      spellRepository: [
        {
          name: 'Eldritch Blast',
          level: 0,
          meta: { castingTime: '1 Action', duration: 'Instantaneous', range: '120\'' },
          flags: [],
          components: [ 'Verbal', 'Somatic' ],
          description: 'Make a ranged spell attack. On a hit, the target takes 1d10 force damage.',
          source: 'PHB'
        }, {
          name: 'Shadow Blade',
          level: 2,
          components: [ 'Verbal', 'Somatic' ],
          flags: [ 'Concentration' ],
          meta: { castingTime: '1 Bonus Action', duration: '1 Minute' },
          description: '<p>You weave together threads of shadow to create a sword of solidified gloom into your hand. This magic sword lasts until the spell ends. It counts as a simple melee weapon with which you are proficient. It deals 2d8 psychic damage on hit and has the finesse, light, and thrown properties (range 20/60). In addition, when you use the sword to attack a target that is in dim light or darkness, you make the attack roll with advantage.</p><p>If you drop the weapon or throw it, it dissipates at the end of the turn. Thereafter, while the spell persists, you can use a bonus action to cause the sword to reappear in your hand.</p>',
          source: 'SCA'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>

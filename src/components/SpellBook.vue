<template>
  <div class="spellbook">
    <div v-for="spell in spellRepository" :key="spell.name" class="spellbock__spell-card">
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
          name: 'Fearie Fire',
          level: 1,
          school: 'Evocation',
          classes: [ ],
          meta: { castingTime: '1 action', duration: '1 minute', range: '60\'', area: '20\' cube' },
          flags: [ 'Concentration' ],
          components: [ 'Verbal' ],
          description:
            '<p>Each object in a 20\' cube is outlined in blue, green or violet light. ' +
            'Creatures hit must pass a <strong>Dexterity Saving Throw</strong> or be outlined.</p>' +
            '<ul><li>Targets shed dim light in a 10\' radius,</li>' +
            '<li>Attack rolls against them have advantage</li>' +
            '<li>Targets can\'t benefit from being invisible</li></ul>',
          source: 'PHB'
        }, {
          name: 'Eldritch Blast',
          level: 0,
          school: 'Evocation',
          classes: [ 'Warlock' ],
          meta: { castingTime: '1 action', duration: 'Instantaneous', range: '120\'' },
          flags: [ 'Ritual' ],
          components: [ 'Verbal', 'Somatic' ],
          description: '<p>Make a ranged spell attack. On a hit, the target takes 1d10 force damage.</p>',
          source: 'PHB'
        }, {
          name: 'Shadow Blade',
          level: 2,
          components: [ 'Verbal', 'Somatic' ],
          flags: [ 'Concentration' ],
          meta: { castingTime: '1 bonus action', duration: '1 minute', range: 'Self' },
          description: '<p>You weave together threads of shadow to create a sword of solidified gloom into your hand. This magic sword lasts until the spell ends. It counts as a simple melee weapon with which you are proficient. It deals 2d8 psychic damage on hit and has the finesse, light, and thrown properties (range 20/60). In addition, when you use the sword to attack a target that is in dim light or darkness, you make the attack roll with advantage.</p><p>If you drop the weapon or throw it, it dissipates at the end of the turn. Thereafter, while the spell persists, you can use a bonus action to cause the sword to reappear in your hand.</p>',
          source: 'SCA'
        }, {
          name: 'Disguise Self',
          level: 1,
          components: [ 'Verbal', 'Somatic' ],
          flags: [ 'Ritual' ],
          meta: { castingTime: '1 action', duration: '1 hour', range: 'Self' },
          description: '<p>You make yourself look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can\'t change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.</p><p>If someone attempts to touch you, they will be able to pass through the illusion and learn that you are disguised. Otherwise, to discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC.</p>',
          source: 'PHA'
        }, {
          name: 'Mending',
          level: 0,
          components: [ 'Verbal', 'Somatic', 'Material' ],
          materialText: 'two loadstones',
          flags: [],
          meta: { castingTime: '1 minute', duration: 'Instantaneous', range: 'Touch' },
          description: '<p>This spell repairs a single break or tear in an object you touch, such as broken chain link, two halves of a broken key, a torn clack, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage.\n</p><p>This spell can physically repair a magic item or construct, but the spell can\'t restore magic to such an object.</p>',
          source: 'PHA'
        }
      ]
    }
  }
}
</script>

<style scoped>
.spellbock__spell-card {
  float: left;
}
</style>

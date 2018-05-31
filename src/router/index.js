import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import SpaceCardBuilder from '@/components/cardBuilder/SpaceCardBuilder'
import CharacterSheetBuilder from '@/components/cardBuilder/CharacterSheetBuilder'
import CharacterSheetPrinter from '@/components/cardPrinter/CharacterSheetPrinter'
import SpellSearch from '@/components/SpellSearch'
import SpellBook from '@/components/SpellBook'
import SpellCardPrinter from '@/components/cardPrinter/SpellCardPrinter'
import MigrateSpells from '@/components/MigrateSpells'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Dashboard },
    { path: '/migrate-spells/', name: 'migrateSpells', component: MigrateSpells },
    { path: '/search/', name: 'spellSearch', component: SpellSearch },
    { path: '/spellbook/', name: 'spellBook', component: SpellBook },
    {path: '/builder/future', name: 'spaceCardBuilder', component: SpaceCardBuilder},
    {path: '/builder/char-a5', name: 'characterSheetBuilder', component: CharacterSheetBuilder},
    {path: '/printer/char-a5', name: 'characterSheetPrinter', component: CharacterSheetPrinter},
    {path: '/printer/spellbook', name: 'spellBookPrinter', component: SpellCardPrinter},
    {
      path: '/spellbook/print/:spellHash',
      name: 'spellPrinter',
      component: SpellCardPrinter,
      props: (route) => ({spellsHash: route.params.spellHash})
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import SpaceCardBuilder from '@/components/SpaceCard/SpaceCardBuilder'
import CharacterSheetBuilder from '@/components/CharacterSheet/CharacterSheetBuilder'
import CharacterSheetPrinter from '@/components/CharacterSheet/CharacterSheetPrinter'
import ProjectPrinter from '@/components/ProjectPrinter'
import SpellBook from '@/components/SpellBook'
import SpellSearch from '@/components/SpellSearch'
import SpellPrinter from '@/components/SpellPrinter'
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
    {path: '/printer/', name: 'projectPrinter', component: ProjectPrinter},
    {path: '/printer/char-a5', name: 'characterSheetPrinter', component: CharacterSheetPrinter},
    { path: '/spellbook/print/:spellHash', name: 'spellPrinter', component: SpellPrinter, props: (route) => ({spellsHash: route.params.spellHash}) }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import CardBuilder from '@/components/CardBuilder'
import CharacterSheetBuilder from '@/components/CharacterSheet/CharacterSheetBuilder'
import ProjectPrinter from '@/components/ProjectPrinter'
import SpellBook from '@/components/SpellBook'
import SpellCard from '@/components/SpellCard'
import SpellSearch from '@/components/SpellSearch'
import SpellPrinter from '@/components/SpellPrinter'
import MigrateSpells from '@/components/MigrateSpells'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Dashboard },
    { path: '/migrate-spells/', name: 'migrateSpells', component: MigrateSpells },
    { path: '/search/', name: 'spellSearch', component: SpellSearch },
    { path: '/card/', name: 'spellCard', component: SpellCard },
    { path: '/spellbook/', name: 'spellBook', component: SpellBook },
    {path: '/builder/future', name: 'cardBuilder', component: CardBuilder},
    {path: '/builder/char-a5', name: 'characterSheetBuilder', component: CharacterSheetBuilder},
    {path: '/printer/', name: 'projectPrinter', component: ProjectPrinter},
    { path: '/spellbook/print/:spellHash', name: 'spellPrinter', component: SpellPrinter, props: (route) => ({spellsHash: route.params.spellHash}) }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import SpellBook from '@/components/SpellBook'
import SpellCard from '@/components/SpellCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'spellBook',
      component: SpellBook
    },
    {
      path: '/card/',
      name: 'spellCard',
      component: SpellCard
    }
  ]
})

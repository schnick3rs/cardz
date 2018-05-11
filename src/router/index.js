import Vue from 'vue'
import Router from 'vue-router'
import SpellCard from '@/components/SpellCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'spellCard',
      component: SpellCard
    }
  ]
})

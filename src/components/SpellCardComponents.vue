<template>
  <div class="spell-components">
    <ul class="spell-components__list">
      <li class="spell-components__list-item spell-components__list-item--verbal" v-bind:class="{ collapsed : !hasVerbal }"><span><font-awesome-icon icon="comment-dots" /></span></li>
      <li class="spell-components__list-item spell-components__list-item--somatic" v-bind:class="{ collapsed : !hasSomatic }"><span><font-awesome-icon icon="hand-paper" /></span></li>
      <li class="spell-components__list-item spell-components__list-item--material" v-bind:class="{ collapsed : !hasMaterial }"><span><font-awesome-icon icon="cogs" /></span></li>
    </ul>
    <div><span>{{ materialText }}</span></div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
export default {
  name: 'SpellCardComponents',
  components: { FontAwesomeIcon },
  props: {
    hasVerbal: { type: Boolean, required: true },
    hasSomatic: { type: Boolean, required: true },
    hasMaterial: { type: Boolean, required: true },
    materialText: { type: String, required: false },
    materialCost: { type: String, required: false }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
.spell-components{
  position: absolute;
  bottom: 0;
}
ul,li{
  margin: 0;
  padding: 0;
  list-style: none;
}
ul {
  padding-left: 1mm;
}
.spell-components__list-item {
  float: left;
  margin-left: 2mm;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  border-top-left-radius: 0mm;
  border-top-right-radius: 0mm;
  width: 4mm;
  height: 6.5mm;
  display: table;
}
.spell-components__list-item--shadow{
  filter: drop-shadow(5px 0px 5px grey);
//  box-shadow: 0px 5px 2mm 0mm #4c4c4c;
}
.spell-components__list-item span {
  width: 100%;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
}
.collapsed{
  height: 1mm;
}
.collapsed span {
  display: none;
}
</style>

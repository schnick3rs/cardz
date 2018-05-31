<template>
  <div class="container">
    <ul class="container__list">

      <li class="list-item spell-component--verbal" v-bind:class="{ collapsed : !hasVerbal }">
        <span><font-awesome-icon icon="comment-dots"/></span>
      </li>

      <li class="list-item spell-component--somatic" v-bind:class="{ collapsed : !hasSomatic }">
        <span><font-awesome-icon icon="hand-paper"/></span>
      </li>

      <li class="list-item spell-component--material" v-bind:class="{ collapsed : !hasMaterial }">
        <span><font-awesome-icon icon="cogs"/></span>
      </li>

    </ul>
    <div v-if="materialText" class="material-text-container">
      <span class="material-text-container__text">{{ materialText }}</span>
    </div>
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
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  .container {
    font-family: 'Roboto', sans-serif;
  }

  ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}

  .container__list {
  z-index: 2;
  position: absolute;
  bottom: 0;
  width: 100%;
}

  .list-item {
  float: left;
  margin-left: 1mm;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  border-top-left-radius: 0mm;
  border-top-right-radius: 0mm;
  width: 4mm;
  height: 6.5mm;
  display: table;
}

  .list-item span {
  width: 100%;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
}

  .collapsed {
  height: 1mm;
    display: none;
}
.collapsed span {
  display: none;
}

  .material-text-container {
  background-color: rgba(255, 255, 255, 0.75);
  color: black;
  box-shadow: 0px 5px 2mm 0mm #4c4c4c;
  z-index: 1;
  bottom: 0;
  width: 100%;
  display: table;
  position: absolute;
  margin-bottom: 2mm;
}

  .material-text-container__text {
  padding-left: 16mm;
  display: table-cell;
    font-size: 2.0mm;
  line-height: 2.5mm;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
  }

  .spell-components__material-detail--two-rows .material-text-container__text {
  font-size: 1.5mm;
  line-height: 2.0mm;
}

  .spell-components__material-detail--two-rows {
    margin-bottom: 1.5mm;
  }
</style>

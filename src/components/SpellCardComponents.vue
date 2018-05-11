<template>
  <ul class="footer">
    <li class="spell-badge-spell-component component-verbal"><span>&#x1F4AC;</span></li>
    <li class="spell-badge-spell-component component-sign"><span>&#x270b;</span></li>
    <li class="spell-badge-spell-component component-material"><span>&#x1F4AC;</span></li>
    <li class="text-band spell-component-material-text"><span></span></li>
  </ul>
</template>

<script>
export default {
  name: 'SpellCardComponents',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
ul,li{
  margin: 0;
  padding: 0;
  list-style: none;
}
ul {
  padding-left: 1mm;
}
li {
  float: left;
  margin-left: 2mm;
  background-color: rgba(0, 0, 0, 0.75);
}
li span{
  margin: 0.5mm;
}
.footer{
  position: absolute;
  bottom: 0;
}
</style>

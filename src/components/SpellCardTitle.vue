<template>
  <div class="header">
    <div class="card-header-title"><span>{{ title }}</span></div>
  </div>
</template>

<script>
export default {
  name: 'SpellCardTitle',
  data () {
    return {
      title: 'Shadow Blade'
    }
  }
}
</script>

<style scoped>
.card-header-title {
  background-color: rgba(255, 255, 255, 0.75);
  color: black;
  box-shadow: 0px 5px 2mm 0mm #4c4c4c;
  display: table;
  margin-top: 1mm;
  margin-bottom: 3mm;
  width: 100%;
}
.card-header-title span{
  font-size: 2.5mm;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  margin: 0mm;
  line-height: 3.0mm;
}
</style>

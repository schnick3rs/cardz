<template>
  <div style="padding-top: 0.5mm;">
    <div class="card-text-container">
      <div class="card-text-description" v-html="description"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpellCardDescription',
  props: {
    description: { type: String }
  }
}
</script>

<style scoped>
.card-text-container {
  background-color: rgba(255, 255, 255, 0.75);
  color: black;
  box-shadow: 0px 5px 2mm 0mm #4c4c4c;
  margin-top: 1mm;
}
.card-text-container .card-text-description {
  display: inline-block;
  font-size: 2.5mm;
  margin: 1mm;
}
.card-text-description >>> p {
  font-size: 2.5mm;
  line-height: 3.5mm;
  text-align: justify;
  margin-top: 0;
}
.card-text-description >>> ul {
  padding-left: 4mm;
}
</style>

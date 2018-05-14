<template>
  <div>
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
}
.card-text-container .card-text-description {
  font-size: 3mm;
  margin: 1mm;
  display: inline-block;
}
.card-text-description >>> p {
  text-align: justify;
  margin-top: 0;
  line-height: 3.5mm;
}
</style>

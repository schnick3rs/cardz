<template>
  <div>

    <div class="toolbar">

      <form novalidate class="md-layout" @submit.prevent="loadFromJson">

        <md-card class="md-layout-item md-size-100">
          <md-card-content>

            <div class="md-layout md-gutter">

              <div class="md-layout-item md-size-30">
                <md-field>
                  <label>Select a class for a predefined background image</label>
                  <md-select v-model="selectedTheme">
                    <md-option v-for="(value, key) in themeOptions" :key="key" v-bind:value="key">{{ value }}
                    </md-option>
                  </md-select>
                </md-field>
              </div>

              <div class="md-layout-item md-size-50">
                <md-field>
                  <label>Custom background image (url)</label>
                  <md-input v-model="customTheme"></md-input>
                </md-field>
              </div>

              <div class="md-layout-item md-size-20">
                <md-field>
                  <label>Card dimensions</label>
                  <md-select v-model="dimensions.selected">
                    <md-option v-for="(value, key) in dimensions.options" :key="key" v-bind:value="key">{{ value }}
                    </md-option>
                  </md-select>
                </md-field>
              </div>

              <div class="md-layout-item md-size-100">
                <md-field>
                  <label>Insert JSON String</label>
                  <md-textarea v-model="jsonString"></md-textarea>
                </md-field>
              </div>
            </div>


          </md-card-content>

          <md-card-actions>
            <md-button type="submit" class="md-primary">Render Cards</md-button>
          </md-card-actions>

        </md-card>

      </form>

    </div>

    <div class="page">
      <spell-card
        class="page__card"
        v-for="item in currentRepository"
        :key="item.name"
        :spell="item"
        :theme="selectedTheme"
        :customTheme="customTheme"
        :customDimension="dimensions.selected"
      />
    </div>

  </div>
</template>

<script>
  import SpellCard from '../templates/SpellCard/SpellCard'
  export default {
  name: 'SpellPrinter',
    components: {SpellCard},
  data () {
    return {
      dimensionsDragonsleeves: false,
      currentRepository: [],
      selectedTheme: undefined,
      customTheme: '',
      jsonString: '',
      dimensions: {
        selected: 'magic',
        options: {
          magic: 'Magic (63x88mm)',
          dragonsleevesfit: 'Dragonsleeves MOD (63x90mm)',
          dragonsleeves: 'Dragonsleeves (63x91mm)'
        }
      },
      themeOptions: {
        druid: 'Druid',
        wizard: 'Wizard',
        sorcerer: 'Sorcerer',
        warlock: 'Warlock',
        ranger: 'Ranger',
        paladin: 'Paladin',
        warrior: 'Warrior'
      }
    }
  },
    methods: {
      loadFromJson: function (e) {
        this.currentRepository = JSON.parse(this.jsonString)
      }
    },
    created: function () {
      let repo = this.$route.params.payload
      if (repo) {
        this.currentRepository = repo
        this.jsonString = JSON.stringify(repo)
    }
  }
}
</script>

<style scoped>
  @media print {
    .toolbar {
      display: none;
    }
  }

  .page {
    page-break-inside: avoid;
  }

  .page__card {
  float: left;
  display: block;
  page-break-inside: avoid;
}
</style>

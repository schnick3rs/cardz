<template>
  <div class="md-layout">

    <md-dialog :md-active.sync="selectThemeDialog" style="min-width: 80%;">

      <md-dialog-title>Select Background image</md-dialog-title>

      <md-dialog-content>
        <div
          v-for="theme in themes.options"
          :key="theme.label"
          class="theme-teaser__list-item"
          :class="{ selected:  themes.selected == theme }"
          @click="themes.selected = theme"
        >
          <div
            class="theme-teaser__list-item-image"
            :style="{ 'background-image': 'url('+theme.src+')' }"
          ></div>
        </div>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-raised md-primary" @click="selectThemeDialog = false">
          Use theme
        </md-button>
      </md-dialog-actions>

    </md-dialog>

    <div class="toolbar md-layout-item md-size-30">

      <form novalidate class="md-layout" @submit.prevent="loadFromJson">

        <md-card class="md-layout-item md-size-100">

          <md-card-content>

            <div class="md-layout md-gutter">

              <div class="md-layout-item md-size-20">

                <md-avatar class="md-large">
                  <img :src="themes.selected.src" @click="selectThemeDialog = true"/>
                </md-avatar>

              </div>

              <div class="md-layout-item md-size-70" hidden>
                <md-field>
                  <label>Custom background image (url)</label>
                  <md-input v-model="customTheme"></md-input>
                </md-field>
              </div>

              <div class="md-layout-item md-size-80">
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
        :customTheme="themes.selected.src"
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
      selectThemeDialog: false,
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
      themes: {
        selected: {label: 'Druid', value: 'druid', src: require('../../assets/img/artworks/artwork-druid.jpg')},
        options: [
          {label: 'Druid', value: 'druid', src: require('../../assets/img/artworks/artwork-druid.jpg')},
          {label: 'Druid (gw2)', value: 'druid-gw2', src: require('../../assets/img/artworks/artwork-druid--gw2.jpg')},
          {
            label: 'Druid (Moon)',
            value: 'druid-moon',
            src: require('../../assets/img/artworks/artwork-druid--circle-of-the-moon.jpg')
          },
          {label: 'Sorceres', value: 'sorcerer', src: require('../../assets/img/artworks/artwork-sorceress.jpg')},
          {label: 'Wizard', value: 'wizard', src: require('../../assets/img/artworks/artwork-wizard.jpg')},
          {label: 'Wizard', value: 'wizard', src: require('../../assets/img/artworks/artwork-wizard--necromancer.jpg')},
          {
            label: 'Wizard',
            value: 'wizard',
            src: require('../../assets/img/artworks/artwork-wizard--necromancer-2.jpg')
          },
          {label: 'Fighter', value: 'fighter', src: require('../../assets/img/artworks/artwork-fighter.jpg')},
          {
            label: 'Warlock (Tome)',
            value: 'tomelock',
            src: require('../../assets/img/artworks/artwork-warlock--sinister-tome.jpg')
          },
          {
            label: 'Paladin (Ancient)',
            value: 'paladin-ancient',
            src: require('../../assets/img/artworks/artwork-paladin-ancient.jpg')
          },
          {
            label: 'Trickster',
            value: 'trickster',
            src: require('../../assets/img/artworks/artwork-arcane-trickster.jpg')
          }
        ]
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

  .theme-teaser__list-item {
    height: 128px;
    width: 128px;
    border: 2px solid grey;
    border-radius: 5px;
    padding: 2px;
    margin: 2px;
    display: inline-grid;
    cursor: pointer;
    -webkit-filter: grayscale(100%);
  }

  .theme-teaser__list-item.selected {
    border-color: forestgreen;
    cursor: default;
    -webkit-filter: unset;
  }

  .theme-teaser__list-item:hover {
    -webkit-filter: unset;
  }

  .theme-teaser__list-item-image {
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    height: 100%;
  }
</style>

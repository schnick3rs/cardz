<template>
  <div class="md-layout">

    <md-dialog :md-active.sync="selectThemeDialog">

      <md-dialog-title>Select Background image</md-dialog-title>

      <md-dialog-content>
        <div
          v-for="theme in themes.options"
          :key="theme.value"
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

    <div class="md-layout-item md-size-50 toolbar">

      <md-card>

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
                  <md-option v-for="(value, key) in dimensions.options" :key="key"
                             v-bind:value="key">{{ value }}
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
          <md-button class="md-primary" @click="loadFromJson">Render Cards</md-button>
        </md-card-actions>

      </md-card>

    </div>

    <div class="page">
      <spell-card
        class="page__card"
        v-for="item in currentRepository"
        :key="item.name"
        :spell="item"
        :image="themes.selected"
        :theme="selectedTheme"
        :customTheme="themes.selected.src"
        :dimensions="dimensions.selected"
        :flavour="dark"
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
        selected: 'dragonsleeve',
        options: {
          magic: 'Magic (63x88mm)',
          dragonsleeve: 'Dragonsleeves (63x91mm)'
        }
      },
      themes: {
        selected: {
          label: 'Druid',
          value: 'druid',
          src: require('../../assets/img/artworks/artwork-druid.jpg')
        },
        options: [
          {
            label: 'Druid',
            value: 'druid',
            image: {
              src: 'https://cdna.artstation.com/p/assets/images/images/004/362/054/large/ivona-denovic-isaralightoverhaul1.jpg?1482949470',
              artist: 'Ivona Denovic',
              url: 'https://www.artstation.com/artwork/9XKeW'
            },
            src: require('../../assets/img/artworks/artwork-druid.jpg')
          },
          {
            label: 'Druid (gw2)',
            value: 'druid-gw2',
            src: require('../../assets/img/artworks/artwork-druid--gw2.jpg')
          },
          {
            label: 'Druid (Moon)',
            value: 'druid-moon',
            src: require('../../assets/img/artworks/artwork-druid--circle-of-the-moon.jpg')
          },
          {
            label: 'Sorceres',
            value: 'sorcerer',
            image: {
              src: 'https://www.wallpaperup.com/uploads/wallpapers/2015/05/12/685062/ac44cf2775adf9b4620d98ab5a97190c-1400.jpg',
              artist: '',
              url: ''
            }
          },
          {
            label: 'Bard',
            value: 'bard',
            src: require('../../assets/img/artworks/artwork-bard.jpg')
          },
          {
            label: 'Wizard',
            value: 'wizard',
            src: require('../../assets/img/artworks/artwork-wizard.jpg')
          },
          {
            label: 'Wizard',
            value: 'wizard-necromancer',
            src: require('../../assets/img/artworks/artwork-wizard--necromancer.jpg')
          },
          {
            label: 'Wizard',
            value: 'wizard-necromancer-2',
            src: require('../../assets/img/artworks/artwork-wizard--necromancer-2.jpg')
          },
          {
            label: 'Fighter',
            value: 'fighter',
            src: require('../../assets/img/artworks/artwork-fighter.jpg')
          },
          {
            label: 'Warlock (Tome)',
            value: 'tomelock',
            image: {
              src: 'https://cdnb.artstation.com/p/assets/images/images/004/340/705/large/bigball-gao-witch.jpg?1482674203',
              artist: 'Bigball Gao',
              url: 'https://www.artstation.com/artwork/ren6e'
            },
            src: require('../../assets/img/artworks/artwork-warlock--sinister-tome.jpg')
          },
          {
            label: 'Tiefling',
            value: 'tiefling',
            image: {
              src: 'https://i.pinimg.com/originals/44/69/a9/4469a986f64955c8c3870637aa214244.jpg',
              artist: 'John-Paul Balmet?',
              url: ''
            },
            src: 'https://i.pinimg.com/originals/44/69/a9/4469a986f64955c8c3870637aa214244.jpg'
          },
          {
            label: 'Tiefling',
            value: 'tiefling-2',
            image: {
              src: 'http://pro.bols.netdna-cdn.com/wp-content/uploads/2018/05/HpbKSsX2-720.jpg',
              artist: '',
              url: ''
            },
            src: 'http://pro.bols.netdna-cdn.com/wp-content/uploads/2018/05/HpbKSsX2-720.jpg'
          },
          {
            label: 'Paladin (Ancient)',
            value: 'paladin-ancient',
            src: require('../../assets/img/artworks/artwork-paladin-ancient.jpg')
          },
          {
            label: 'Trickster',
            value: 'trickster',
            image: {
              src: require('../../assets/img/artworks/artwork-arcane-trickster.jpg'),
              artist: '',
              url: ''
            },
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

  .page .page__card {
    display: block;
    page-break-inside: avoid;
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

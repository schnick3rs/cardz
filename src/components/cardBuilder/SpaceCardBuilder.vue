<template>

  <div class="md-layout">

    <form class="md-layout-item md-size-40 md-small-size-100" @submit.prevent="addCard(card)">

      <md-card>

        <md-card-content>

          <div class="md-layout md-gutter">

            <div class="md-layout-item md-size-100">

              <md-field>
                <label>Custom background Image</label>
                <md-input v-model="card._theme"/>
              </md-field>

            </div>

            <div class="md-layout-item md-size-80">

              <label>{{ flavours.label }}</label>
                <div>
                  <div v-for="item in flavours.options" v-bind:key="item.key" style="display: inline; margin-left:2mm;">
                    <md-radio class="md-primary" v-model="card._flavour" :value="item.label">
                      <small :style="{ color: item.color }">{{ item.label }}</small>
                    </md-radio>
                  </div>
                </div>

            </div>

            <div class="md-layout-item md-size-40">

              <md-field>
                <label>{{ dimensions.label }}</label>
                <md-select v-model="card._dimension">
                  <md-option v-for="item in dimensions.options" :key="item.key" v-bind:value="item.value">{{ item.label
                    }}
                  </md-option>
                </md-select>
              </md-field>

            </div>

            <div class="md-layout-item md-size-100">

              <md-field>
                <label>Title</label>
                <md-input v-model="card.title"/>
              </md-field>

            </div>

            <div class="md-layout-item md-size-100">

              <md-field>
                <label>Subtitle</label>
                <md-input v-model="card.subtitle"/>
              </md-field>

            </div>

            <div class="md-layout-item md-size-100">

              <md-field>
                <label>Card value</label>
                <md-input v-model="card.value"/>
              </md-field>

            </div>

            <div class="md-layout-item md-size-100">

              <md-field>
                <label>Description (markdown)</label>
                <md-textarea v-model="markdown" @input="update"/>
                <span class="md-helper-text">
                  Use <a target="_blank"
                         href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">Markdown</a> to style text blocks
                </span>
              </md-field>

            </div>

          </div>

        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-primary">Add Card</md-button>
        </md-card-actions>

      </md-card>
    </form>

    <section class="md-layout-item md-size-30 card-holder">
      <SpaceCard :card="card" :dimension="card._dimension"></SpaceCard>
    </section>

    <form class="md-layout-item md-size-30">
      <md-card>
        <md-card-actions>
          <md-button class="md-primary" :to="{ name: 'spaceCardPrinter', params: { payload: draftRepository } }">
            <md-icon>print</md-icon>
            Print
          </md-button>
        </md-card-actions>

        <md-card-content>
          <md-list class="md-dense md-triple-line">
            <md-list-item v-for="cardz in draftRepository" v-bind:key="cardz.id">
              <md-avatar>
                <img v-bind:src="cardz._theme" alt="People">
              </md-avatar>
              <div class="md-list-item-text">
                <span>{{ cardz.title }}</span>
                <span>{{ cardz.subtitle }}</span>
                <p v-html="cardz.description"></p>
              </div>
              <md-button class="md-icon-button md-list-action" @click="removeItem">
                <md-icon class="md-accent">delete</md-icon>
              </md-button>
            </md-list-item>
          </md-list>
        </md-card-content>

      </md-card>
    </form>

  </div>
</template>

<script>
import SpaceCard from '../templates/SpaceCard/SpaceCard'
import marked from 'marked'

export default {
  name: 'CardBuilder',
  components: {SpaceCard},
  data () {
    return {
      markdown: 'Oh Boy',
      inputs: {
        title: {
          id: 'inputTitle',
          label: 'Title'
        }
      },
      card: {
        title: 'Monstreous Ambush',
        subtitle: 'Event',
        description: '<p>Oh boy.</p>',
        value: '',
        valueMeta: {
          icon: 'mailed-fist',
          position: 'center'
        },
        _dimension: 'dragonsleeve',
        _flavour: 'red',
        _theme: 'https://i.pinimg.com/736x/68/86/c9/6886c95a96ce40c0dce9c49f034c0c60--fantasy-concept-art-fantasy-art.jpg'
      },
      draftRepository: [],
      dimensions: {
        label: 'Dimension',
        selected: 'dragonsleeve',
        options: {
          magic: {label: 'Magic', value: 'magic'},
          dragonsleeve: {label: 'Magic (Dragonsleeve)', value: 'dragonsleeve'},
          magicLandscape: {label: 'Magic (Landscape)', value: 'magic-landscape'},
          zombicideItem: {label: 'Zimbicide ', value: 'zombicide-item'}
        }
      },
      flavours: {
        label: 'Color Flavour',
        selected: 'red',
        options: {
          green: {label: 'Green', value: 'forestgreen', color: 'forestgreen'},
          red: {label: 'Red', value: 'orangered', color: 'orangered'},
          blue: {label: 'Blue', value: 'dodgerblue', color: 'blue'},
          yellow: {label: 'Yellow', value: 'yellow', color: 'yellow'}
        }
      }
    }
  },
  methods: {
    update: function (e) {
      this.markdown = e.target.value
      this.card.description = marked(this.markdown, {sanatize: false})
    },
    copyToClipboard: function (e) {
      navigator.clipboard.writeText(JSON.stringify(this.card))
    },
    addCard: function (item) {
      this.draftRepository.push(JSON.parse(JSON.stringify(item)))
    },
    removeItem: function (item) {
      this.draftRepository.splice(item, 1)
    }
  }
}
</script>

<style scoped>

  .card-holder {
    min-width: fit-content;
  }

  .input-field {
    margin-bottom: 4mm;
    width: 100%;
  }

  .input-field__label {
    display: block;
    font-size: small;
    font-weight: bold;
  }
  /* INPUT RADIO FLAVOUR COLOR */
  .input-field-radio ul, .input-field-radio li {
    list-style-type: none;
    display: inline;
  }

  .input-field-radio__container { /* The container */
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .input-field-radio__container input { /* Hide the browser's default radio button */
    position: absolute;
    opacity: 0;
    cursor: pointer;
    z-index: -1;
  }

  .input-field-radio__checkbox { /* Create a custom radio button */
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
  }

  .input-field-radio__container:hover input ~ .input-field-radio__checkbox { /* On mouse-over, add a grey background color */
    background-color: #ccc;
  }

  .input-field-radio input:checked ~ .input-field-radio__checkbox { /* When the radio button is checked, add a blue background */
    background-color: #2196F3;
  }

  .input-field-radio__checkbox:after { /* Create the indicator (the dot/circle - hidden when not checked) */
    content: "";
    position: absolute;
    display: none;
  }

  .input-field-radio__container input:checked ~ .input-field-radio__checkbox:after { /* Show the indicator (dot/circle) when checked */
    display: block;
  }

  .input-field-radio__checkbox:after { /* Style the indicator (dot/circle) */
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
</style>

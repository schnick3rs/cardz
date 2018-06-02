<template>
  <div class="md-layout">
    <form class="md-layout-item md-size-40 md-small-size-100" @submit.prevent="addCard(card)">
      <md-card>
        <md-card-content>
          <md-field>
            <label>Custom background Image</label>
            <md-input v-model="card._theme"/>
          </md-field>
          <div class="input-field input-field-radio">
            <label class="input-field__label input-field-radio__label">Color Flavour</label>
            <div>
              <div v-for="flavour in fields.flavours" v-bind:key="flavour.id" style="display: inline; margin-left:2mm;">
                <label style="font-size: xx-small;" v-bind:style="{ color: flavour.color }">{{ flavour.label }}</label>
                <input type="radio" v-bind:value="flavour.value" v-model="card._flavour"
                       style="margin: 0;padding: 0;vertical-align: middle;"/>
              </div>
            </div>
          </div>
          <md-field>
            <label>Title</label>
            <md-input v-model="card.title"/>
          </md-field>
          <md-field>
            <label>Subtitle</label>
            <md-input v-model="card.subtitle"/>
          </md-field>

          <md-field>
            <label>Description (markdown)</label>
            <md-textarea v-model="markdown" @input="update"/>
            <span class="md-helper-text">
              Use <a target="_blank"
                     href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">Markdown</a> to style text blocks
            </span>
          </md-field>

        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-primary">Add Card</md-button>
        </md-card-actions>

      </md-card>
    </form>

    <section class="md-layout-item md-size-30 card-holder">
      <SpaceCard :card="card"></SpaceCard>
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
  import SpaceCard from "../templates/SpaceCard/SpaceCard";
  export default {
    name: "CardBuilder",
    components: {SpaceCard},
    data() {
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
          description: "<p>Oh boy.</p>",
          _flavour: 'red',
          _theme: 'https://i.pinimg.com/736x/68/86/c9/6886c95a96ce40c0dce9c49f034c0c60--fantasy-concept-art-fantasy-art.jpg'
        },
        draftRepository: [],
        fields: {
          flavours: [
            {label: 'Green', value: 'forestgreen', color: 'forestgreen'},
            {label: 'Red', value: 'orangered', color: 'orangered'},
            {label: 'Blue', value: 'dodgerblue', color: 'blue'},
            {label: 'Yellow', value: 'yellow', color: 'yellow'}
          ]
        }
      }
    },
    methods: {
      update: function (e) {
        this.markdown = e.target.value
        this.card.description = marked(this.markdown, {sanatize: false})
      },
      copyToClipboard: function (e) {
        navigator.clipboard.writeText(JSON.stringify(this.card));
      }
    },
    methods: {
      update: function (event) {
        this.card.description = marked(this.markdown, {sanatize: false})
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

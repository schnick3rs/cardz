<template>
  <div class="md-layout">

    <md-dialog :md-active.sync="exportJsonDialog" style="min-width: 80%;">
      <md-dialog-title>Copy JSON</md-dialog-title>
      <md-dialog-content>
        <md-field>
          <label>JSON</label>
          <md-textarea v-model="itemJson" readonly></md-textarea>
        </md-field>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-raised md-accent">
          Copy to clipboard
        </md-button>
      </md-dialog-actions>
    </md-dialog>

    <form hidden="true" class="md-layout-item md-size-40 cz--hide-for-print" @submit.prevent="addCard(character)">
      <md-card class="md-elevation-6">
        <md-card-content class="input-form">

          <md-card-actions>

            <md-button type="submit" class="md-raised" @click="exportJsonDialog = true">
              <md-icon>file_copy</md-icon>
              Export
            </md-button>

            <md-button type="submit" class="md-raised md-primary">
              <md-icon>note_add</md-icon>
              Add
            </md-button>

          </md-card-actions>

          <md-field>
            <label>Character Image</label>
            <md-input v-model="character.portrait"/>
          </md-field>

          <div class="input-field input-field-radio">
            <label class="input-field__label input-field-radio__label">Faction Flavour</label>
            <div>
              <div v-for="flavour in fields.flavours" v-bind:key="flavour.id" style="display: inline; margin-left:2mm;">
                <label style="font-size: xx-small;" v-bind:style="{ color: flavour.color }">{{ flavour.label }}</label>
                <input type="radio" v-bind:value="flavour.value" v-model="character._flavour"
                       style="margin: 0;padding: 0;vertical-align: middle;"/>
              </div>
            </div>
          </div>

          <md-field>
            <label>Name</label>
            <md-input v-model="character.name"/>
          </md-field>

          <md-field>
            <label>Profession</label>
            <md-input v-model="character.profession "/>
          </md-field>

          <md-field>
            <label>Description (markdown)</label>
            <md-textarea v-model="markdown" @input="update"/>
            <span class="md-helper-text">
              Use <a target="_blank"
                     href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">Markdown</a> to style text blocks
            </span>
          </md-field>

          <div>
            <table class="input-form__table">
              <tr class="input-form__table-row">
                <td v-for="(item, index) in character.attributes" :key="index">
                  <md-field>
                    <label>{{ item.code }}</label>
                    <md-input style="width: 35px;" v-model="character.attributes[index].value"></md-input>
                  </md-field>
                </td>
              </tr>
            </table>
          </div>

        </md-card-content>

      </md-card>
    </form>

    <section class="md-layout-item card-holder">
      <wng-monster-sheet :character="character" style="zoom: 1;"/>
    </section>

    <form class="md-layout-item md-size-15">
      <md-card>
        <md-card-actions>
          <md-button class="md-primary md-raised"
                     :to="{ name: 'characterSheetPrinter', params: { payload: draftRepository } }">
            <md-icon>print</md-icon>
            Print
          </md-button>
        </md-card-actions>

        <md-card-content>
          <md-list class="md-dense md-double-line">
            <md-list-item v-for="item in draftRepository" v-bind:key="item.id">
              <md-avatar>
                <img v-bind:src="item.portrait" alt="People" @click="removeItem">
              </md-avatar>
              <div class="md-list-item-text">
                <span>{{ item.name }}</span>
                <span>{{ item.profession }}</span>
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
import WngMonsterSheet from '../templates/WrathAndGloryMonsterSheet/WngMonsterSheet'
import marked from 'marked'

export default {
  name: 'WngMonsterSheetBuilder',
  components: {WngMonsterSheet},
  data () {
    return {
      exportJsonDialog: false,
      markdown: 'Ich nehme lieber 20 Kriminelle mit festen Glauben and den Imperator als 1000 verwöhnte Erstgeborenen.',
      inputs: {
        title: {
          id: 'inputTitle',
          label: 'Title'
        }
      },
      character: {
        _theme: '40k',
        _faction: 'chaos',
        _flavour: 'chaos_cultists',
        portrait: 'https://i.pinimg.com/originals/4d/f3/f5/4df3f5c0c1e4d3e569d50cacb442fe17.jpg',
        title: 'Chaos Kultist',
        quote: 'I will follow a Corpse-God no more. I am free.',
        classification: {
          1: 'Troops',
          2: 'Troops',
          3: 'Troops',
          4: 'Troops',
          5: 'Troops'
        },
        isChampion: false,
        attributes: [
          {code: 'St', label: 'Strength', value: 3},
          {code: 'Ag', label: 'Agility', value: 2},
          {code: 'To', label: 'Toughness', value: 2}
        ],
        traits: {
          defense: {code: 'De', label: 'Defense', value: 6},
          resilience: {code: 'Re', label: 'Resilience', value: 8},
          armour: {code: 'Ar', label: 'armour', value: 3},
          soak: {code: 'Ar', label: 'Soak', value: 3},
          shock: {code: 'Sh', label: 'Shock', value: 2},
          wounds: {code: 'Wo', label: 'Wounds', value: 2}
        },
        skills: [
          {code: 'De', label: 'Deception', value: 5},
          {code: 'St', label: 'Stealth', value: 5},
          {code: 'Ws', label: 'Weapon Skill', value: 5},
          {code: 'Def', label: 'Default', value: 3}
        ],
        actions: [
          {
            key: 'range-attack',
            label: 'Auto<em>pistol</em>',
            table: {dice: 'BS: 3', range: '20m', damage: '7+1ED', salvo: 'salvo:2'},
            mods: []
          },
          {
            key: 'melee-attack',
            label: 'Knife',
            table: {dice: 'WS:5', damage: '5+1ED'},
            mods:
                [{
                  title: 'Shoot and Stab',
                  short: 'May Multi-Attack with pistol and knife without penalty.',
                  attachTo: 'melee-attack'
                }]
          }
        ],
        abilities: [
          {
            title: 'Shoot and Stab',
            short: 'Any time a cultist is slain by a critical hit, gain 1 <em>ruin</em>.',
            attachTo: 'traits'
          },
          {
            title: 'Shoot and Stab',
            short: 'May Multi-Attack with pistol and knife without penalty.',
            attachTo: 'melee-attack'
          }
        ],
        size: 'Average',
        keywords: ['Human', 'Heretic', 'Chaos']
      },
      draftRepository: [],
      fields: {
        flavours: [
          {label: 'Imperial Guard', value: 'imperial-guard', color: 'forestgreen'},
          {label: 'Doom', value: 'doom', color: 'forestgreen'},
          {label: 'Navis Nobilite', value: 'navis-nobilite', color: 'blue'},
          {label: 'Mechanicus', value: 'adeptus-mechanicus', color: 'orangered'},
          {label: 'Adeptus Astartes', value: 'adeptus-astartes', color: 'blue'},
          {label: 'Inquisition', value: 'inquisition', color: 'black'}
        ],
        attributes: [
          {code: 'Kg', label: 'Kampfgeschick', value: ''}
        ]
      }
    }
  },
  computed: {
    itemJson: function () {
      return JSON.stringify(this.character)
    }
  },
  methods: {
    update: function (event) {
      this.character.description = marked(this.markdown, {sanatize: false})
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

  .input-form__table-row {

  }
</style>

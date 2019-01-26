<template>
  <div class="md-layout">

    <md-dialog :md-active.sync="exportSpellModificationDialog" style="min-width: 80%;">
      <md-dialog-title>Copy JSON</md-dialog-title>
      <md-dialog-content>
        <md-field>
          <label>JSON</label>
          <md-textarea v-model="spellModificationJson" readonly></md-textarea>
        </md-field>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-raised md-accent">
          Copy to clipboard
        </md-button>
      </md-dialog-actions>
    </md-dialog>

    <div class="md-layout-item md-size-50">

      <md-card>

        <md-card-header>
          <div class="md-title">Spells from the realm</div>
          <div class="md-subhead">
            <span>found {{ filteredRepository.length }} of {{ spellRepository.length }} spells</span></div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label>{{ selectedFilters.clazz.label }}</label>
                <md-select v-model="selectedFilters.clazz.selection" md-dense multiple>
                  <md-option v-for="(value, key) in selectedFilters.clazz.options" :key="key" v-bind:value="key">{{
                    value }}
                  </md-option>
                </md-select>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label>{{ selectedFilters.subclazz.label }}</label>
                <md-select v-model="selectedFilters.subclazz.selection" md-dense multiple>
                  <md-option v-for="(value, key) in selectedFilters.subclazz.options" :key="key" v-bind:value="key">{{
                    value }}
                  </md-option>
                </md-select>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label>{{ selectedFilters.level.label }}</label>
                <md-select v-model="selectedFilters.level.selection" md-dense multiple>
                  <md-option v-for="(value, key) in selectedFilters.level.options" :key="key" v-bind:value="key">{{
                    value }}
                  </md-option>
                </md-select>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label>{{ selectedFilters.source.label }}</label>
                <md-select v-model="selectedFilters.source.selection" md-dense multiple>
                  <md-option v-for="(value, key) in selectedFilters.source.options" :key="key" v-bind:value="key">{{
                    value }}
                  </md-option>
                </md-select>
              </md-field>
            </div>
          </div>

        </md-card-content>

        <md-card-actions>

          <md-button class="md-primary md-raised" @click="learnAllFiltered">
            <md-icon>library_add</md-icon>
            Learn all
          </md-button>

        </md-card-actions>


      </md-card>

      <md-table v-model="filteredRepository" md-sort="level" md-sort-order="asc" md-card>

        <md-table-toolbar>
          <div class="md-toolbar-section-start">
            <h1 class="md-title">Spells</h1>
          </div>

          <md-field md-clearable class="md-toolbar-section-end">
            <md-input placeholder="Search by name..." v-model="search"/>
          </md-field>

        </md-table-toolbar>

        <md-table-empty-state
          md-label="No spell found"
          :md-description="`No spell found, matching '${search}'. Try a different search term.`">
        </md-table-empty-state>

        <md-table-row
          slot="md-table-row"
          slot-scope="{ item }"
          @click="preview(item)"
          @dblclick="learnSpell(item)"
        >

          <md-table-cell md-label="Level" md-sort-by="level" md-numeric>{{ item.level }}</md-table-cell>

          <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>

          <md-table-cell md-label="Casting Time" md-sort-by="meta.castingTime">
            {{ item.meta.castingTime }}
            <md-icon v-if="item.flags.includes('Ritual')">book</md-icon>
          </md-table-cell>

          <md-table-cell md-label="Range" md-sort-by="meta.range">{{ item.meta.range }}</md-table-cell>

          <md-table-cell md-label="Duration" md-sort-by="meta.duration">
            {{ item.meta.duration }}
            <md-icon v-if="item.flags.includes('Concentration')">copyright</md-icon>
          </md-table-cell>

          <md-table-cell md-label="Action" v-if="false">
            <md-button class="md-icon-button md-raised md-dense" @click="preview(item)">
              <md-icon>search</md-icon>
            </md-button>
            <md-button class="md-icon-button md-primary md-raised md-dense" @click="learnSpell(item)">
              <md-icon>note_add</md-icon>
            </md-button>
          </md-table-cell>

        </md-table-row>

      </md-table>
    </div>

    <div class="md-layout-item " v-bind:class="{ 'md-size-20': !editForm } ">
      <md-card>

        <md-card-header>
          <div class="md-title">Preview</div>
        </md-card-header>

        <md-card-actions>
          <md-button class="md-raised" @click="exportSpellModificationDialog = true">Export</md-button>
          <md-button class="md-raised" @click="editForm = !editForm">Edit</md-button>
        </md-card-actions>

        <md-card-content>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50 md-small-size-50" v-if="editForm">
              <md-field>
                <label>Description (markdown)</label>
                <md-textarea v-model="selectedSpellMarkdown" @input="update"/>
                <span class="md-helper-text">
              Use <a target="_blank"
                     href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">Markdown</a> to style text blocks
            </span>
              </md-field>
            </div>

            <div class="md-layout-item md-size-50 md-small-size-50">
              <spell-card v-if="selectedSpell" :spell="selectedSpell" :theme="selectedFilters.clazz.selection[0]"/>
            </div>

          </div>


        </md-card-content>
      </md-card>
    </div>

    <div class="md-layout-item md-size-30" v-if="!editForm">
      <md-card>

        <md-card-header>

          <div class="md-title">Spellbook</div>
          <div class="md-subhead"><span>contains {{ activeSpellBook.length }} spells</span></div>

        </md-card-header>

        <md-card-actions>

          <md-button class="md-accent" @click="activeSpellBook = []">
            <md-icon>gesture</md-icon>
            Wipe memory
          </md-button>

          <md-button class="md-primary md-raised"
                     :to="{ name: 'spellBookPrinter', params: { payload: activeSpellBook } }">
            <md-icon>print</md-icon>
            Print
          </md-button>

        </md-card-actions>

      </md-card>
      <md-table v-model="activeSpellBook" md-sort="level" md-sort-order="asc" md-card>

        <md-table-empty-state
          md-label="No spells learned"
          :md-description="`Search and select from the left list of known spells.`">
        </md-table-empty-state>

        <md-table-row slot="md-table-row" slot-scope="{ item }">

          <md-table-cell md-label="Level" md-sort-by="level" md-numeric>{{ item.level }}</md-table-cell>

          <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>

          <md-table-cell md-label="Action">
            <md-button class="md-icon-button md-raised md-dense" @click="preview(item)">
              <md-icon>search</md-icon>
            </md-button>
            <md-button class="md-icon-button md-raised md-accent md-dense" @click="forgetSpell(item)">
              <md-icon>delete</md-icon>
            </md-button>
          </md-table-cell>

        </md-table-row>

      </md-table>

    </div>


  </div>
</template>

<script>
  const toLower = text => {
    return text.toString().toLowerCase()
  }
  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.name).includes(toLower(term)))
    }
    return items
  }
  import SpellRepository from '../assets/repositories/dnd-spells-migrated.json'
  import SpellModifications from '../assets/repositories/dnd-spells--mods.json'
  import SpellCard from './templates/SpellCard/SpellCard'
  import SpellItemRow from "./SpellItemRow";

  export default {
  name: 'SpellSearch',
  components: {SpellItemRow, SpellCard},
  data () {
    return {
      selectedSpellMarkdown: '',
      selectedFilters: {
        clazz: {
          label: 'Classes',
          selection: [],
          options: {
            bard: 'Bard',
            druid: 'Druid',
            wizard: 'Wizard',
            sorcerer: 'Sorcerer',
            warlock: 'Warlock',
            ranger: 'Ranger',
            paladin: 'Paladin'
          }
        },
        subclazz: {
          label: 'Subclasses',
          selection: [],
          options: {
            'Oath of Ancients': 'Oath of Ancients'
          }
        },
        level: {
          label: 'Level',
          selection: [],
          options: {
            0: 'Cantrips',
            1: '1st',
            2: '2nd',
            3: '3rd',
            4: '4th',
            5: '5th',
            6: '6th',
            7: '7th',
            8: '8th',
            9: '9th'
          }
        },
        source: {
          label: 'Source',
          selection: ['br', 'phb'],
          options: {
            phb: 'Players Handbook',
            ee: 'Elemental Evil Player\'s Companion',
            scag: 'Sword Coast Adventure Guide',
            xge: 'Xanathar\'s guide to everything',
            br: 'Basic Rules'
          }
        }
      },
      selectedSpell: undefined,
      activeSpellBook: [],
      spellRepository: SpellRepository,
      spellModifications: SpellModifications,
      search: null,
      editForm: false,
      exportSpellModificationDialog: false,
      searchableRepository: [],
      fields: [
        {name: 'level', label: 'Lvl'},
        {name: 'name', label: 'Name'},
        {name: 'actions', label: 'Actions'}
      ]
    }
  },
  computed: {
    spellModificationJson: function () {
      let modification = {};
      if (this.selectedSpell) {
        modification = {
          name: this.selectedSpell.name,
          description: this.selectedSpell.description
        }
      }
      return JSON.stringify(modification);
    },
    filteredRepository: function () {
      let results = this.searchableRepository;

      let clazzes = this.selectedFilters.clazz.selection;
      clazzes = clazzes.concat(this.selectedFilters.subclazz.selection);

      if (clazzes.length > 0) {
        results = results.filter(item => clazzes.some(v => toLower(item.class.join()).indexOf(toLower(v)) >= 0))
      }

      let level = this.selectedFilters.level.selection;
      if (level.length > 0) {
        results = results.filter(item => level.includes(item.level + ''))
      }
      let sources = this.selectedFilters.source.selection;
      if (sources.length > 0) {
        results = results.filter(item => sources.some(v => toLower(item.source).indexOf(toLower(v)) >= 0))
      }
      let query = this.search;
      if (query) {
        results = searchByName(results, query)
      }
      return results;
    }
  },
  methods: {
    update: function (event) {
      this.selectedSpell.description = marked(this.selectedSpellMarkdown, {sanatize: false})
    },
    html2markdown: function (event) {
      this.selectedSpellMarkdown = new TurndownService().turndown(this.selectedSpell.description);
    },
    preview: function (item, event) {
      this.selectedSpell = item;
      this.html2markdown(event);
    },
    learnSpell: function (spellToLearn, event) {
      let duplicatedSpells = this.activeSpellBook.filter(function (learnedSpell) {
        if (learnedSpell.id === spellToLearn.id) return learnedSpell
      })
      if (duplicatedSpells.length === 0) {
        this.activeSpellBook.push(spellToLearn)
      }
    },
    forgetSpell: function (spellToforget, event) {
      let i = this.activeSpellBook.map(item => item.id).indexOf(spellToforget.id) // find index of your object
      this.activeSpellBook.splice(i, 1) // remove it from array
    },
    learnAllFiltered: function () {
      this.filteredRepository.forEach(v => this.learnSpell(v))
    }
  },
    created() {
      let folded = this.spellRepository;
      let mods = this.spellModifications;
      mods.forEach((mod) => {
        folded.forEach((fold) => {
          if (fold.name == mod.name) {
            console.info('Modify ' + fold.name);
            fold.description = mod.description;
            if (mod.descriptionOvercast) {
              fold.descriptionOvercast = mod.descriptionOvercast;
            }
          }
        });
      });
      this.searchableRepository = folded;
    }
}
</script>

<style scoped>

</style>

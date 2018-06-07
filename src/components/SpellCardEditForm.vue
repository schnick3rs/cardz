<template>

  <div class="md-layout md-gutter">
    <div class="md-layout-item md-size-50">
      <md-field>
        <label>Custom background Image</label>
        <md-input v-model="card._theme"/>
      </md-field>
    </div>

    <div class="md-layout-item md-size-30">
      <label>{{ flavour.label }}</label>
      <div>
        <div v-for="item in flavour.options" v-bind:key="item.key" style="display: inline; margin-left:2mm;">
          <md-radio class="md-primary" v-model="card._flavour" :value="item.label">
            <small :style="item.style">{{ item.label }}</small>
          </md-radio>
        </div>
      </div>
    </div>

    <div class="md-layout-item md-size-85">
      <md-field>
        <label>Spellname</label>
        <md-input v-model="card.name"/>
      </md-field>
    </div>

    <div class="md-layout-item md-size-15">
      <md-field>
        <label>Level</label>
        <md-input type="number" v-model="card.level"/>
      </md-field>
    </div>

    <div class="md-layout-item md-size-15" v-for="item in components.options" :key="item.key">
      <md-checkbox v-model="card.components" :value="item.label">{{ item.label }}</md-checkbox>
    </div>

    <div class="md-layout-item md-size-55">
      <md-field>
        <label>Material Text</label>
        <md-input v-model="card.materialText"/>
      </md-field>
    </div>

    <div class="md-layout-item md-size-30">
      <md-field>
        <label>Casting time</label>
        <md-input v-model="card.meta.castingTime"/>
      </md-field>
      <md-switch class="md-primary" v-model="card.flags" value="Ritual">Ritual?</md-switch>
    </div>

    <div class="md-layout-item md-size-30">
      <md-field>
        <label>Duration</label>
        <md-input v-model="card.meta.duration"/>
      </md-field>
      <md-switch class="md-primary" v-model="card.flags" value="Concentration">Concentration?</md-switch>
    </div>

    <div class="md-layout-item md-size-40">
      <md-field>
        <label>Range</label>
        <md-input v-model="card.meta.range"/>
      </md-field>
    </div>

    <div class="md-layout-item md-size-50">
      <md-field>
        <label>Description (markdown)</label>
        <md-textarea md-autogrow v-model="markdown.description" @input="updateCardDescription"/>
        <span class="md-helper-text">
          Use <a target="_blank" href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">Markdown</a> to style text blocks
        </span>
      </md-field>
    </div>

    <div class="md-layout-item md-size-50">
      <md-field>
        <label>Overcast (markdown)</label>
        <md-textarea md-autogrow v-model="markdown.overcast" @input="updateCardOvercast"/>
        <span class="md-helper-text">
          Use <a target="_blank" href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">Markdown</a> to style text blocks
        </span>
      </md-field>
    </div>

  </div>

</template>

<script>
  const html2markdown = (text) => {
    return new TurndownService().turndown(text);
  };
  const markdown2Html = (text) => {
    return marked(text, {sanatize: false})
  };
  import SpellCard from "./templates/SpellCard/SpellCard";
  export default {
    name: "CardBuilder",
    components: {SpellCard},
    props: {
      card: {type: Object, required: true}
    },
    data() {
      return {
        markdown: {
          description: '',
          overcast: ''
        },
        flavour: {
          label: 'Flavour',
          selected: 'light',
          options: {
            light: {label: 'light', style: {color: 'black', backgroundColor: 'white'}},
            dark: {label: 'dark', style: {color: 'white', backgroundColor: 'black'}}
          }
        },
        flags: {
          options: {
            ritual: {label: 'Ritual'},
            concentration: {label: 'Concentration'},
          }
        },
        components: {
          label: 'Components',
          selected: [],
          options: {
            verbal: {label: 'Verbal'},
            somatic: {label: 'Somatic'},
            material: {label: 'Material'}
          }
        }
      }
    },
    created: function () {
      this.markdown.description = html2markdown(this.card.description)
      this.markdown.overcast = html2markdown(this.card.descriptionOvercast)
    },
    watch: {
      card: function (newItem, oldItem) {
        console.log('new spell (' + newItem.name + ') loaded.');
        this.updateMarkdown();
      }
    },
    methods: {
      updateMarkdown: function () {
        this.markdown.description = html2markdown(this.card.description)
        if (this.card.descriptionOvercast) {
          this.markdown.overcast = html2markdown(this.card.descriptionOvercast)
        } else {
          this.markdown.overcast = ''
        }
      },
      updateCardOvercast: function (e) {
        this.card.descriptionOvercast = markdown2Html(e);
      },
      updateCardDescription: function (e) {
        this.card.description = markdown2Html(e);
      }
    },
  }
</script>

<style scoped>
</style>
